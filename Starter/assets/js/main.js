// Grab elements
 const ElementSelector = (selector) => {
    // passing the selector to the element_selector variable
    const element_selector = document.querySelector(selector);
    if (element_selector) return element_selector;
    throw new Error (`no such selector as ${selector} or check spelling`);
 };

 console.log(ElementSelector('.navbar'));

//Nav styles on scroll

// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper