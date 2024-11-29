import barbecueImage from "./Assets/barbecueImage.jpg";

//https://www.federalistpig.com/menus/
// continue from here ^ 
// add more dishes to the menu.

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

export function loadMenu() {
    const contentDiv = document.getElementById('content');
    // div for title, quote and order button
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-div';

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

    const barbecueDiv = loadBarbecue();
    contentDiv.append(menuDiv, barbecueDiv);

    return contentDiv;
}

