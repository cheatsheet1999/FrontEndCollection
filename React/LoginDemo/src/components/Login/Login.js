import React, {useState, useEffect, useReducer, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer((state, action) => {
    if(action.type === 'USER_INPUT') {
      return {value: action.val, isValid: action.val.includes('@')};
    }
    if(action.type === 'INPUT_BLUR') {
      //React确保 state这个值永远可以取到上一个存储的值
      return {value: state.value, isValid: state.value.includes('@')};
    }
  },{
    value: '',
    isValid: null
  })

  const [passState, dispatchPass] = useReducer((state, action) => {
    if(action.type === 'USER_PASS') {
      return {value: action.val, isValid: action.val.trim().length > 6};
    }
    if(action.type === 'PASS_BLUR') {
      return {value: state.value, isValid: state.value.trim().length > 6};
    }
  }, {
    value: '',
    isValid: null
  })

  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  //把isValid提取出来，只要超过了valid的线就不再检查了
  const {isValid: emailIsValid} = emailState;
  const {isValid: passIsValid} = passState;
  //clear the last timer before setting a new one，用clearTimeOut就可以
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('check')
      setFormIsValid(
          emailIsValid && passIsValid
      );
    }, 500)

    return () => {
      console.log('clean')
      clearTimeout(identifier);
    }
  }, [emailIsValid, passIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type: 'USER_PASS', val: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPass({type: 'PASS_BLUR'})
  };

  //提示到底是哪里不合格
  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid) {
      authCtx.onLogin(emailState.value, passState.value);

    } else if(!emailIsValid) {
      emailInputRef.current.focus();
      //如果不是email不合格，就是password不合格
    } else {
      passwordInputRef.current.focus();
    }

  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
            ref={emailInputRef}
            id={'email'}
            label={'E-Mail'}
            type={'email'}
            isValid={emailIsValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
        />
        <Input
            ref={passwordInputRef}
            id={'password'}
            label={'Password'}
            type={'password'}
            isValid={passIsValid}
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
