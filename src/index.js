import './style.css';
import displayHome from './pages/home/home.js';

function clearContainer() {
    const container = document.querySelector('#content');
    container.textContent = "";
}

function eventListeners() {
    const navBtns = document.querySelectorAll('nav button');
    navBtns[0].addEventListener('click', () => {
        clearContainer();
        displayHome();
    });
}

eventListeners();
displayHome();
