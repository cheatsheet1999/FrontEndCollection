const itemBoxes = document.querySelectorAll('.accordion-item');
const itemHeadings = document.querySelectorAll('.accordion-item-heading');


itemHeadings.forEach((itemHeading) => {
    itemHeading.addEventListener('click', function() {
        let outerBox = this.parentNode.className;
        itemBoxes.forEach((itemBox) => {
            itemBox.className = 'accordion-item closed'
        })
        if(outerBox === 'accordion-item closed') {
            this.parentNode.className = 'accordion-item open'
        }
    })
})



