/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

// Get ul container for li elements
const navBarList = document.querySelector('#navbar__list');
// Get all sections related to the menu on the page
const sections = document.querySelectorAll('section');

/**A variable to store the text for each navbar menu item
 * this will be concatenated with the number of the section
Just initialized as empty to store it later through the section 
data-nav attribute */

let menuItemText = "";


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
// Build menu
let i = 0;
sections.forEach(function (section) {

    i += 1;
    // Create li element for the menu
    const menuItem = document.createElement('li');
    // Create link for the menu
    const menuLinkTag = document.createElement('a');
    // Add class for styling the menu item
    menuItem.classList.add('menu__link');
    // Add class for linking each menu item with its corresponding section
    menuItem.classList.add(section.id);
    // Add Id to menu item to link it with its corresponding section
    menuItem.id = `${i}`;
    // Add data-link attribute to menu item
    menuItem.dataset.link = section.id;
    // Append menu item to the navbar list container
    navBarList.append(menuItem);
    // Append link as a child to the menu item
    menuItem.appendChild(menuLinkTag);
    // storing text for the menu item
    menuItemText = section.dataset.nav;
    menuLinkTag.innerHTML = menuItemText;

})

// Add class 'active' to section when near top of viewport
let navLi = document.querySelectorAll('.menu__link');

window.addEventListener('scroll', (e) => {

    let currentSectionId = "";

    sections.forEach((section) => {

        // Scroll to section on link click
        // Set sections as active or not

        if (section.getBoundingClientRect().top + window.innerHeight <= window.innerHeight) {
            currentSectionId = section.getAttribute("id");
            let current = document.getElementsByClassName("your-active-class");

            if (current.length > 0) {
                current[0].className = current[0].className.replace("your-active-class", "");
            }
            section.classList.add('your-active-class');
        }

    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(currentSectionId)) {
            li.classList.add("active");
        }
    });
});


// Scroll to anchor ID using scrollTO event

navLi.forEach((li) => {
    let itemToClick = document.getElementById(li.id);
    let sectionToScroll = document.getElementById(`section${li.id}`)
    itemToClick.addEventListener('click', (e) => {
        e.preventDefault();
        //smooth scrolling
        sectionToScroll.scrollIntoView({ behavior: "smooth" });
    })
});

//scroll to top
let floatingButton = document.getElementById("floating-button");

floatingButton.addEventListener('click', (e) => {

    e.preventDefault();
    let element = document.getElementById("section1");
    element.scrollIntoView();

});

/**
 * End Main Functions
 * Begin Events
 *
*/