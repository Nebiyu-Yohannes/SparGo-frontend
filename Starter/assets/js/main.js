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
const menuToggleIcon = ElementSelector('#menu-toggle-icon');

const toggleMenu = () => {
   // creating a varaible to store the menu id
   const mobileMenu = ElementSelector('.menu');
   console.log('hi')
   // to toggle the classes under menu and under menu-toggle-icon
   mobileMenu.classList.toggle('activated');
   menuToggleIcon.classList.toggle('activated');
};
// call the function and add an event listener on the click event
menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper