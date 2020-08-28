import "../styles/style.css";
import "../styles/searchbar.css";
import "./skewed-box.js";

import '@fortawesome/fontawesome-free/js/all';

const searchButtonElement = document.querySelector("#search-button-element");
const searchElement = document.querySelector("#search-element");
const mealList = document.querySelector("#meal-list");

const onButtonSearchClicked = () => {
    console.log(searchElement.value);
    getMeal(searchElement.value);
}

searchButtonElement.addEventListener("click", onButtonSearchClicked);

const getMeal = async (name) => {
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const responseJson = await response.json();
        // console.log(responseJson.meals)
        render(responseJson.meals);
    }catch(error){
        console.log(error);
    }
}

const render = (meals) => {
    mealList.innerHTML = '';
    const ul = document.createElement("ul");
    meals.forEach( meal => {
        const li = document.createElement("li");
        // li.innerHTML = `${meal.strMeal}`;

        const div = document.createElement("div");
        div.innerHTML = `
        <div class="polaroid">
            <section>
                <h6>${meal.strMeal}</h6>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100%" >
                <p class="caption">${meal.strCategory}</p>
            </section>
        </div>
        `;
        li.appendChild(div);

        ul.appendChild(li);
        console.log(meal);
    });
    mealList.appendChild(ul);
}
