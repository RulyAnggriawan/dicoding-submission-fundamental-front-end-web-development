class DataSource {
  static async searchFood(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.meals !== null) {
          const foods = [];
          responseJson.meals.forEach((food) => {
            const { strMeal: name, strMealThumb: imageUrl, strCategory: category } = food;
            const newFood = { name, imageUrl, category };
            foods.push(newFood);
          });

          return Promise.resolve(foods);
        }

        return Promise.reject(new Error(`No food record is found for keyword ${keyword} !`));
      });
  }

  static async searchDrink(keyword) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.drinks !== null) {
          const drinks = [];
          responseJson.drinks.forEach((drink) => {
            const { strDrink: name, strDrinkThumb: imageUrl, strCategory: category } = drink;
            const newDrink = { name, imageUrl, category };
            drinks.push(newDrink);
          });

          return Promise.resolve(drinks);
        }
        return Promise.reject(new Error(`No drink record is found for keyword ${keyword} !`));
      });
  }

  static async searchFoodDrink(keyword) {
    let food;
    let drink;
    let fetchErrorMessage = '';
    try {
      food = await this.searchFood(keyword);
    } catch (e) {
      food = [];
      fetchErrorMessage = e;
      fetchErrorMessage += '<br>';
    }

    try {
      drink = await this.searchDrink(keyword);
    } catch (e) {
      drink = [];
      fetchErrorMessage += e;
    }

    if (food.length === 0 && drink.length === 0) {
      return Promise.reject(fetchErrorMessage);
    }

    return Promise.resolve([...food, ...drink]);
  }
}

export default DataSource;
