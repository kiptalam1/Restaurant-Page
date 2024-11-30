import { pageLoad } from "./page-load.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import "./styles.css";
import "./menu.css";
import "./about.css";

const homeButton = document.querySelector('.home-btn');
const menuButton = document.querySelector('.menu-btn');
const aboutButton = document.querySelector('.about-btn');

pageLoad();
const content = document.getElementById('content');

homeButton.addEventListener('click', () => {
    content.textContent = "";
    pageLoad();
});

menuButton.addEventListener('click', () => {
    content.textContent = "";
    loadMenu();
});

aboutButton.addEventListener('click', () => {
    content.textContent = "";
    loadAbout();
})