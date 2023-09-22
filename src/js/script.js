                // light & dark mode handller
let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
let themeToggleBtn = document.getElementById('theme-toggle');
let themeColor;

// Change the icons inside the button based on previous settings
if (localStorage.getItem('slang-them-color') === 'dark' || (!('slang-them-color' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('slang-them-color')) {
        if (localStorage.getItem('slang-them-color') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('slang-them-color', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('slang-them-color', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('slang-them-color', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('slang-them-color', 'dark');
        }
    }
    
});

function getThemeColor(){
    return localStorage.getItem('slang-them-color')
}

function setThemeColor(){
    themeColor = getThemeColor();
    if(themeColor){
        if(themeColor === 'dark' ){
            document.documentElement.className = 'dark';
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
        }else{
            document.documentElement.className = 'light';
            themeToggleDarkIcon.classList.remove('hidden');
            themeToggleLightIcon.classList.add('hidden');
        }
    }
    return
}
window.addEventListener('load', setThemeColor)


            // navbar Handller
let NavbarElem = document.getElementById('Navbar');

function scrollHeader() {
    if (this.scrollY >= 150) NavbarElem.classList.add('nav-fixed','bg-purple-50', 'dark:bg-gray-900'); else NavbarElem.classList.remove('nav-fixed','bg-purple-50', 'dark:bg-gray-900')
}
window.addEventListener('scroll', scrollHeader);

            // submenu handller

let dropdownsElems = document.querySelectorAll('[data-dropdown-toggle="dropdown"]');

dropdownsElems.forEach(dropdownsElem => {
    dropdownsElem.addEventListener('click', event =>{
        event.target.nextElementSibling.classList.toggle('hidden');
    });
})
/*
// Get all the dropdown from document
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
    
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                // Close the clicked dropdown
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');
    
            } else {
                // Close the opend dropdown
                closeDropdown();
    
                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }

    if(dropDown.classList.contains('hover-dropdown') === true){

        dropDown.onmouseover  =  dropDown.onmouseout = dropdownHover;

        function dropdownHover(e){
            if(e.type == 'mouseover'){
                // Close the opend dropdown
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
                
            }

            // if(e.type == 'mouseout'){
            //     // close the dropdown after user leave the list
            //     e.target.nextElementSibling.onmouseleave = closeDropdown;
            // }
        }
    }

};


// Listen to the doc click
window.addEventListener('click', function (e) {

    // Close the menu if click happen outside menu
    if (e.target.closest('.dropdown-container') === null) {
        // Close the opend dropdown
        closeDropdown();
    }

});


// Close the openend Dropdowns
function closeDropdown() { 
    console.log('run');
    
    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
    document.querySelectorAll('.dropdown-container').forEach(function (container) { 
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
        menu.classList.remove('dropdown-active');
    });
}

// close the dropdown on mouse out from the dropdown list
document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) { 
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = closeDropdown;
});
*/