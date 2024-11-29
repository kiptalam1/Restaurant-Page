export function loadMenu() {
    const contentDiv = document.getElementById('content');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "MENUS";
    const menuQuote = document.createElement('p');
    menuQuote.textContent = "Embark on a savory journey through the timeless art of cuisine. Thousands of years ago, humanity discovered the magic of flame meeting flavor. While it hasn’t solved the mysteries of the universe, it has created one undeniable truth: a great meal can make the world feel just a little more harmonious.";
    
    // add order now button
    const orderButton = document.createElement('button');
    orderButton.classList.add('order-btn');
    orderButton.setAttribute('type', 'button');
    orderButton.textContent = 'ORDER NOW';

    contentDiv.append(menuTitle, menuQuote, orderButton);
}