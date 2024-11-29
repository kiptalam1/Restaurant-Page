import heroImage from "./Assets/heroImage.jpg";
import burgerImage from "./Assets/burgerImage.jpg";
import specialImage from "./Assets/specialImage.jpg";

export function pageLoad() {
    const homeImage = document.createElement('img');
    homeImage.src = heroImage;
    homeImage.classList.add('hero-image');
    
    const content = document.getElementById('content');
    // create a div to add text on hero image
    const imageText = document.createElement('div');
    imageText.innerText = "Savor the Flavors of Italy in Every Bite";
    imageText.classList.add('image-text');

    // add div for featured dishes
    const dishes = document.createElement('div');
    dishes.classList.add('dishes');
    // add div and children for burger
    const burgerDiv = document.createElement('div');
    burgerDiv.classList.add('burger-div');
    const burger = document.createElement('img');
    burger.src = burgerImage;
    burger.classList.add('burger');
    // Add text below the burger image
    const burgerTitle = document.createElement('h2');
    burgerTitle.classList.add('burger-title');
    burgerTitle.textContent = "SPECIALS";
    const burgerText = document.createElement('p');
    burgerText.textContent = "Master Rob is always up to something! Check out our rotating specialty sandwiches and limited drops, including a Limited Time Only Monthly Chef's Special that will leave you craving for more!";

    burgerDiv.append(burger, burgerTitle, burgerText);

    const specialDiv = document.createElement('div');
    specialDiv.classList.add('special-div');
    const special = document.createElement('img');
    special.src = specialImage;
    special.classList.add('special');

    // Add text below the special text
    const specialTitle = document.createElement('h2');
    specialTitle.classList.add('special-title');
    specialTitle.textContent = "SUPER CLUB";
    const specialText = document.createElement('p');
    specialText.textContent = "Once a month, Chef & Master Rob presents a new 4-course dine-in experience that goes beyond our regular offerings and puts a smoky spin on gourmet cuisine.";
    specialDiv.append(special, specialTitle, specialText);

    dishes.append(burgerDiv, specialDiv);

    content.append(homeImage, imageText, dishes);
    return content;
}