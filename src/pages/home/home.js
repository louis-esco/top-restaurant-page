import restaurantPhoto from './restaurant.jpg';
import './home.css'

export default function displayHome() {
    const container = document.querySelector('#content');
    container.textContent = "";

    const home = document.createElement('div');
    home.classList.add('home');

    const pictureDiv = document.createElement('div');
    pictureDiv.classList.add('restaurantPic');
    const restaurantPic = new Image();
    restaurantPic.src = restaurantPhoto;

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('homeDiv');
    const homeHeader = document.createElement('h2');
    homeHeader.textContent = "Welcome to Louis' kitchen !";
    const homeDescription = document.createElement('p');
    homeDescription.textContent = "We cook healthy and seasonal food everyday ! Newcomers get a 10% discount on their first order, you'd better try this out ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    homeDiv.appendChild(homeHeader);
    homeDiv.appendChild(homeDescription);

    pictureDiv.appendChild(restaurantPic);

    home.appendChild(pictureDiv);
    home.appendChild(homeDiv);

    container.appendChild(home);
}
