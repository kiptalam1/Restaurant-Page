function addAboutContent () {
    // Create About Section
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-section');
    // Subheading
    const aboutSubheading = document.createElement('h2');
    aboutSubheading.textContent = "All the flavors. All in one place. All made with love.".toUpperCase();
    aboutSubheading.classList.add('about-subheading');
    // Description
    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.innerHTML = `
        At The Adams' Kitchen, we're driven by a simple yet profound mission: 
        to bring together the most delightful tastes from every corner of the culinary world.
        <br><br>
        Our menu is a journey — one that pays tribute to the rich traditions of Southern soul food 
        while embracing global inspirations that spark our creativity. From smoked ribs and tender brisket 
        to our signature fried chicken and scratch-made sides, every dish tells a story. 
        Whether it's a twist on a classic or a brand-new creation, you'll find something on our menu 
        that feels like home — or like an adventure.
        <br><br>
        But The Adams' Kitchen is more than just a restaurant. It’s a community. 
        We’re a small team of passionate chefs and food lovers who pour our hearts into every plate 
        we serve. Whether you're dropping in for the first time or you're a familiar face at our tables, 
        we aim to make you feel like family.
        <br><br>
        <strong>So pull up a chair, grab a fork, and join us.</strong><br>
        Let The Adams' Kitchen be where your own food traditions begin.
    `;
    // Append all elements to the section
    aboutSection.append(aboutSubheading, aboutText);
    return aboutSection;
}

export function loadAbout() {
    const contentDiv = document.getElementById('content');
    // Empty existing content before adding anything
    contentDiv.innerHTML = "";
    const aboutContent = addAboutContent();
    contentDiv.append(aboutContent);
    return contentDiv;
}