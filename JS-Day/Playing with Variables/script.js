


//select all inputs which are in .controls class
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    //dataset will push everything that has data 'dash' (data-xxx) on
    //that element and put into object for you.
    //if we don't put the fallback '', when we reach the attribute
    //that has no data-sizing, we will push undefined!
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    // this line will print HTML name attribute for that specific element
    // console.log(this.name)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)


}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
