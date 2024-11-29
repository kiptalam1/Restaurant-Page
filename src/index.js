import { pageLoad } from "./page-load.js";
import { loadMenu } from "./menu.js";
import "./styles.css";
import "./menu.css";

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