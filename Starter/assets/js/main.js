// Grab elements
 const ElementSelector = (selector) => {
    // passing the selector to the element_selector variable
    const element_selector = document.querySelector(selector);
    if (element_selector) return element_selector;
    console.log()
    throw new Error (`no such selector as ${selector} or check spelling`);

 };

 // console.log(ElementSelector('.navbar'));

//Nav styles on scroll
const scrollHeader = () => {
   // creating a variable that holds the element
   const headerElement = ElementSelector('#header');
   // based on a condition add and remove classes
   if (this.scrollY >= 15){
      headerElement.classList.add('activated');
   }else{
      headerElement.classList.remove('activated');
       }
};
// we need to call the function for it work
// by attaching and event listener to the window object for a scroll event
window.addEventListener('scroll', scrollHeader);



// Open menu & search pop-up

const menuToggleIcon = ElementSelector('.menu-toggle-icon');
// creating a function that toggles the selectors activated for the menu class 
const toggleMenu = () => {
   // creating a variable to store the menu id
   const mobileMenu = ElementSelector('.menu');
   // to toggle the selectors activated under menu and under menu-toggle-icon
   mobileMenu.classList.toggle('activated');
   menuToggleIcon.classList.toggle('activated');
};
// call the function and add an event listener on the click event
menuToggleIcon.addEventListener('click', toggleMenu);



// Open/Close search form popup

//creating a variable that holds the search button element
const searchToggleIcon = ElementSelector('#search-icon');
// create a variable that holds the whole search form element in-order to activate it
const searchForm = ElementSelector('#search-form-container');
// create a variable that holds the form-close-button button 
const formCloseButton = ElementSelector('#form-close-button');

// create a function that toggles the selector activated under the search-form-container class
const openSearch = () => {
   searchForm.classList.add('activated');
};
// create a function that removes the selector activated under the search-form-container class
const closeSearch = () => {
   searchForm.classList.remove('activated');
};

// call the function for a click event on to the search button AND also on to the form close button
searchToggleIcon.addEventListener('click', openSearch);
formCloseButton.addEventListener('click', closeSearch);


// -- Close the search form popup on ESC keypress

// an event function that reacts to the escape button
// calling the close search function based on a keyup event

window.addEventListener('keyup', event_key => { 
   if (event_key.key === 'Escape') closeSearch();
});


// Switch theme/add to local storage

// create a variable that gets the current theme from local storage
const currentTheme = localStorage.getItem('currentTheme');
// create a variable for the body element and theme-toggle-button element
const bodyElement = document.body;
const themeToggleButton = ElementSelector('#theme-toggle-button');
// if currentTheme is not null / empty then add the class light-theme to the body  
if (currentTheme){
   bodyElement.classList.add('light-theme');
}//else {bodyElement.classList.remove('light-theme');};
// creating a shorthand function that toggles the light-theme selectors AND saves the current theme
const ThemeChanger = () => {
   bodyElement.classList.toggle('light-theme');
   //  if the body is on light-theme then set the currentTheme variable to themeActive
   // else remove it (so the currentTheme variable becomes empty)
   if (bodyElement.classList.contains('light-theme')) {
      localStorage.setItem('currentTheme', 'themeActive');
   }else {
      localStorage.removeItem('currentTheme')
   };
};
// adding an event listener to the theme button so it changes theme when clicked; by calling the ThemeChanger function
themeToggleButton.addEventListener('click', ThemeChanger);



// Swiper

// We are going to create a new variable object 
   // that is an instance off the Swiper class 
   // and we are going to define a key-value pair properties to our choice of swiper element
const swiper = new Swiper('.swiper', {
   slidePerView: 1,
   spaceBetween: 20,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination'
   },
   breakpoints: {
      700: {
         slidePerView: 2
      },
      1200: {
         slidePerView: 3
      }
   }
});