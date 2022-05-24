function HiveCheckbox(domSelector) {
    this.domSelector = domSelector;
    this.root = document.querySelector(domSelector)
    this.init();
}

HiveCheckbox.prototype.init = function () {
    let that = this;
    this.root.style.display = "none";
    this.main = document.createElement("div");
    this.root.parentNode.insertBefore(this.main, this.root.nextSibling);
    this.main.classList.add("main_checkbox");

    this.button = document.createElement("button");
    this.main.appendChild(this.button);

    // `currentOption` is the text of user selected checkbox
    // The reason we chose 'span' is because span is an inline-element, so those element will be
    // arranged in the same line
    this.currentOption = document.createElement("span");
    this.button.appendChild(this.currentOption);
    this.currentOption.classList.add("title");


    this.dropdown = document.createElement("div");
    this.main.appendChild(this.dropdown);
    this.dropdown.classList.add("dropdown-menu");

    // By default, the display is none, later we can use this feature to toggle the dropdown menu
    this.dropdown.style.display = "none";
    let ul = document.createElement("ul");
    this.dropdown.appendChild(ul);
    ul.classList.add("multi");

    this.options = document.querySelectorAll(this.domSelector + " option");

    Array.prototype.slice.call(this.options).forEach(function (e) {
        let text = e.textContent;
        let li = document.createElement("li");

        // we put each options in to an unordered list
        ul.appendChild(li);

        // If Delete this, when select all, it will only print null, null, null....
        li.setAttribute("checkboxText", text);
        li.appendChild(document.createTextNode(text));
    });

    this.main.addEventListener("click", function (e) {
        document.addEventListener("click", docListener);

        // Toggle the dropdown menu
        if (that.dropdown.style.display === "none") {
            that.dropdown.style.display = "block";
        } else {
            that.dropdown.style.display = "none";
        }
        e.stopPropagation();
    });

    // Select All and Deselect all will not work if remove this line of code
    this.listElements = this.dropdown.querySelectorAll("li");

    this.dropdown.addEventListener("click", function (e) {
        let choiceText = e.target.getAttribute("checkboxText");
        let className = e.target.getAttribute("class");
        let hidden = false;

        if (className === 'active') {
            //if current classname is active, turn hidden to true
            hidden = true;
        }

        // if users current select this option, and they still clicked the checkbox, we want to remove the active class
        if (hidden) {
            e.target.classList.remove("active");
        } else {
            // if this is the first time clicking option, add an active
            e.target.classList.add("active");
        }

        let selectedTexts = ""
        let separator = "";

        for (let i = 0; i < that.options.length; i++) {
            if (that.options[i].value === choiceText) {
                that.options[i].selected = !hidden;
            }
            if (that.options[i].selected) {
                selectedTexts += separator + that.options[i].textContent;
                separator = ", ";
            }
        }
        that.currentOption.textContent = selectedTexts;
        e.stopPropagation();
    });

    function docListener() {
        document.removeEventListener("click", docListener);
        that.dropdown.style.display = "none";
    }
}


HiveCheckbox.prototype.selectAll = function (values) {
    values = [];
    Array.prototype.slice.call(this.options).forEach(function (e) {
        values.push(e.value);
    });
    Array.prototype.slice.call(this.options).forEach(function (e) {
        e.selected = values.indexOf(e.value) !== -1;
    });

    let selectedTexts = ""
    let separator = "";
    Array.prototype.slice.call(this.listElements).forEach(function (e) {
        e.classList.add("active");
        selectedTexts += separator + e.getAttribute("checkboxText");
        separator = ", ";
    });
    this.currentOption.textContent = selectedTexts;
}


HiveCheckbox.prototype.deselectAll = function () {
    Array.prototype.slice.call(this.listElements).forEach(function (e) {
        e.classList.remove("active");
    });
    Array.prototype.slice.call(this.options).forEach(function (e) {
        e.selected = false;
    });
    this.currentOption.textContent = "";
}


