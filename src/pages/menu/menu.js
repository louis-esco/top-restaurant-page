import './menu.css'

export default function displayMenu() {

    const menuList = [
        { dishName: 'Pizza', dishDescription: "Delicious napolitan pizza", dishPrice: '12€' },
        { dishName: 'Falafel pita', dishDescription: "Falafel, humus and veggies in a fresh baked pita", dishPrice: '8€' },
        { dishName: 'Mussaka', dishDescription: "Travel to Greece with this eggplant classic", dishPrice: '11€' },
        { dishName: 'Tajin', dishDescription: "The power of moroccan spices", dishPrice: '10€' }
    ]

    const container = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    for (let i = 0; i < 4; i++) {
        const dish = document.createElement('div');
        dish.classList.add('dish');

        const dishName = document.createElement('div');
        dishName.textContent = menuList[i].dishName;
        const dishDescription = document.createElement('div');
        dishDescription.textContent = menuList[i].dishDescription;
        const dishPrice = document.createElement('div');
        dishPrice.textContent = menuList[i].dishPrice;

        dish.appendChild(dishName);
        dish.appendChild(dishDescription);
        dish.appendChild(dishPrice);
        menu.appendChild(dish);
    }

    container.appendChild(menu);
}
