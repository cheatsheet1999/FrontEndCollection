

const itemBox = document.querySelectorAll('.accordion-item');
const itemHeading = document.querySelectorAll('.accordion-item-heading');

for(let i = 0; i < itemHeading.length; i++) {
    itemHeading[i].addEventListener('click', function() {
        let outerBox = this.parentNode.className;
        for(let i = 0; i < itemBox.length; i++) {
            itemBox[i].className = 'accordion-item closed'
        }
        if(outerBox === 'accordion-item closed') {
            this.parentNode.className = 'accordion-item open'
        }
    })
}



















