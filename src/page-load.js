import heroImage from "./Assets/heroImage.jpg";

export function pageLoad() {
    const homeImage = document.createElement('img');
    homeImage.src = heroImage;
    homeImage.classList.add('hero-image');
    
    const content = document.getElementById('content');
    // create a div to add text on image
    const imageText = document.createElement('div');
    imageText.innerText = "Savor the Flavors of Italy in Every Bite";
    imageText.classList.add('image-text');
    content.append(homeImage, imageText);
    return content;
}