import "../styles/style.css";
import "./skewed-box.js"

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
        li.innerHTML = `${meal.strMeal}`;
        ul.appendChild(li);
        console.log(meal);
    });
    mealList.appendChild(ul);
}
