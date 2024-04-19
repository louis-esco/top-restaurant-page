import './style.css';
import displayHome from './pages/home/home.js';

function eventListeners() {
    const navBtns = document.querySelectorAll('nav button');
    navBtns[0].addEventListener('click', displayHome);
}

eventListeners();
displayHome();
