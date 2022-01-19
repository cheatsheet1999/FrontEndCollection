/// <reference path="../../typings/phaser.d.ts" />
import Phaser from 'phaser';
import StateMachine from 'javascript-state-machine';

class Hero extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, 'hero-run-sheet', 0);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.anims.play('hero-running');

    this.setOrigin(0.5, 1);
    this.body.setCollideWorldBounds(true);
    this.body.setSize(12, 40);
    this.body.setOffset(12, 23);
    this.body.setMaxVelocity(250, 400);
    this.body.setDragX(750);

    this.keys = scene.cursorKeys;
    this.input = {};

    this.setupAnimations();
    this.setupMovement();
  }

  setupAnimations() {
    this.animState = new StateMachine({
      init: 'idle',
      transitions: [
        { name: 'idle', from: ['falling', 'running', 'pivoting'], to: 'idle' },
        { name: 'run', from: ['falling', 'idle', 'pivoting'], to: 'running' },
        { name: 'pivot', from: ['falling', 'running'], to: 'pivoting' },
        { name: 'jump', from: ['idle', 'running', 'pivoting'], to: 'jumping' },
        { name: 'flip', from: ['jumping', 'falling'], to: 'flipping' },
        { name: 'fall', from: ['idle', 'running', 'pivoting', 'jumping', 'flipping'], to: 'falling' },
        { name: 'die', from: '*', to: 'dead' },
      ],
      methods: {
        onEnterState: (lifecycle) => {
          this.anims.play('hero-' + lifecycle.to);
          console.log(lifecycle);
        },
      },
    });

    this.animPredicates = {
      idle: () => {
        return this.body.onFloor() && this.body.velocity.x === 0;
      },
      run: () => {
        return this.body.onFloor() && Math.sign(this.body.velocity.x) === (this.flipX ? -1 : 1);
      },
      pivot: () => {
        return this.body.onFloor() && Math.sign(this.body.velocity.x) === (this.flipX ? 1 : -1);
      },
      jump: () => {
        return this.body.velocity.y < 0;
      },
      flip: () => {
        return this.body.velocity.y < 0 && this.moveState.is('flipping');
      },
      fall: () => {
        return this.body.velocity.y > 0;
      },
    };
  }

  setupMovement() {
    this.moveState = new StateMachine({
      init: 'standing',
      transitions: [
        { name: 'jump', from: 'standing', to: 'jumping' },
        { name: 'flip', from: 'jumping', to: 'flipping' },
        { name: 'fall', from: 'standing', to: 'falling' },
        { name: 'touchdown', from: ['jumping', 'flipping', 'falling'], to: 'standing'},
        { name: 'die', from: ['jumping', 'flipping', 'falling', 'standing'], to: 'dead' },
      ],
      methods: {
        onJump: () => {
          this.body.setVelocityY(-400);
        },
        onFlip: () => {
          this.body.setVelocityY(-300);
        },
        onDie: () => {
          this.body.setVelocity(0, -500);
          this.body.setAcceleration(0);
        },
      },
    });

    this.movePredicates = {
      jump: () => {
        return this.input.didPressJump;
      },
      flip: () => {
        return this.input.didPressJump;
      },
      fall: () => {
        return !this.body.onFloor();
      },
      touchdown: () => {
        return this.body.onFloor();
      },
    };
  }

  kill() {
    if (this.moveState.can('die')) {
      this.moveState.die();
      this.animState.die();
      this.emit('died');
    }
  }

  isDead() {
    return this.moveState.is('dead');
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    this.input.didPressJump = !this.isDead() && Phaser.Input.Keyboard.JustDown(this.keys.up);

    if (!this.isDead() && this.keys.left.isDown) {
      this.body.setAccelerationX(-1000);
      this.setFlipX(true);
      this.body.offset.x = 8;
    } else if (!this.isDead() && this.keys.right.isDown) {
      this.body.setAccelerationX(1000);
      this.setFlipX(false);
      this.body.offset.x = 12;
    } else {
      this.body.setAccelerationX(0);
    }

    if (this.moveState.is('jumping') || this.moveState.is('flipping')) {
      if (!this.keys.up.isDown && this.body.velocity.y < -150) {
        this.body.setVelocityY(-150);
      }
    }

    for (const t of this.moveState.transitions()) {
      if (t in this.movePredicates && this.movePredicates[t]()) {
        this.moveState[t]();
        break;
      }
    }

    for (const t of this.animState.transitions()) {
      if (t in this.animPredicates && this.animPredicates[t]()) {
        this.animState[t]();
        break;
      }
    }
  }

}

export default Hero;
