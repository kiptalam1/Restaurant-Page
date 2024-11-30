import { pageLoad } from "./page-load.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import "./styles.css";
import "./menu.css";
import "./about.css";
import "./footer.css";
import { loadFooter } from "./footer.js";

const homeButton = document.querySelector('.home-btn');
const menuButton = document.querySelector('.menu-btn');
const aboutButton = document.querySelector('.about-btn');

// Default page.
pageLoad();

homeButton.addEventListener('click', () => {
    pageLoad();
});

menuButton.addEventListener('click', () => {
    loadMenu();
});

aboutButton.addEventListener('click', () => {
    loadAbout();
})

loadFooter();