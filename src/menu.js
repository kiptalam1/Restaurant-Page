import barbecueImage from "./Assets/barbecueImage.jpg";
import sandwichImage from "./Assets/sandwich.jpg";
import chickenImage from "./Assets/chicken.jpg";

// Create chicken dish for the menus 
function loadChicken () {
    const chickenDiv = document.createElement('div');
    chickenDiv.className = "chicken-div";
    const chickenTitle = document.createElement('h1');
    chickenTitle.textContent = "CHICKEN";
    const chickenText = document.createElement('p');
    chickenText.textContent = "1/4 chicken & 2 small sides";
    const chickenPhoto = document.createElement('img');
    chickenPhoto.src = chickenImage;
    chickenDiv.append(chickenTitle, chickenText, chickenPhoto);
    return chickenDiv;
}

// Create a sandwich dish for the menus
function loadSandwich () {
    const sandwichDiv = document.createElement('div');
    sandwichDiv.className = 'sandwich-div';
    const sandwichTitle = document.createElement('h1');
    sandwichTitle.textContent = "SIGNATURE SANDWICHES";
    const sandwichText = document.createElement('p');
    sandwichText.textContent = "When bread meets what could go between bread, there’s no end to the possibilities."
    const sandwichPhoto = document.createElement('img');
    sandwichPhoto.src = sandwichImage;
    sandwichDiv.append(sandwichTitle, sandwichText, sandwichPhoto);
    return sandwichDiv;    
}

//Create a barbecue dish for the menus
function loadBarbecue () {
    const barbecueDiv = document.createElement('div');
    barbecueDiv.className = 'barbecue-div';
    const barbecueTitle = document.createElement('h1');
    barbecueTitle.textContent = "BARBEQUE";
    const barbecueText = document.createElement('p');
    barbecueText.textContent = "Smoked daily, all served with Texas toast & pickles. Sold by the 1/2 lb.";
    const barbecuePhoto = document.createElement('img');
    barbecuePhoto.src = barbecueImage;
    barbecueDiv.append(barbecueTitle, barbecueText, barbecuePhoto);
    return barbecueDiv;
}
// Create a div that holds all the menus to be added
function menusContainerDiv() {
    const menuCont = document.createElement('div');
    menuCont.className = 'menu-cont';
    // add the different menus to the container
    const barbecueDiv = loadBarbecue();
    const sandwichDiv = loadSandwich();
    const chickenDiv = loadChicken();
    menuCont.append(barbecueDiv, sandwichDiv, chickenDiv);
    return menuCont;
}

// Create a function to hold the call to action and message
function orderMenuDiv() {
    // div for title, quote and order button
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-div';
    // call to action header and text
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = "MENUS";
    const menuQuote = document.createElement('p');
    menuQuote.className = 'menu-quote';
    menuQuote.textContent = "Embark on a savory journey through the timeless art of cuisine. Thousands of years ago, humanity discovered the magic of flame meeting flavor. While it hasn’t solved the mysteries of the universe, it has created one undeniable truth: a great meal can make the world feel just a little more harmonious.";
    // add order now button
    const orderButton = document.createElement('button');
    orderButton.classList.add('order-btn');
    orderButton.setAttribute('type', 'button');
    orderButton.textContent = 'ORDER NOW';

    menuDiv.append(menuTitle, menuQuote, orderButton);
    return menuDiv;
}

// Main function that loads the menus page
export function loadMenu() {
    const contentDiv = document.getElementById('content');
    const menuDiv = orderMenuDiv() 
    const menusHolder = menusContainerDiv();
    contentDiv.append(menuDiv, menusHolder);
    return contentDiv;
}

