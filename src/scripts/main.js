import SavedNourishment from './data/saved-nourishment';
import NourishmentList from './nourishment-list';

const main = () => {
  const searchButtonElement = document.querySelector('#search-button-element');
  const searchElement = document.querySelector('#search-element');
  const mealList = document.querySelector('#meal-list');

  const savedMealList = document.querySelector('#saved-meal-list');
  const savedNourishment = new SavedNourishment();

  const savedLink = document.querySelector('#saved');
  const finderLink = document.querySelector('#finder');

  const backToTop = document.querySelector('#back-to-top');

  const getMeal = async (name) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
      const responseJson = await response.json();
      return responseJson.meals;
    } catch (error) {
      return error;
    }
  };

  const renderSearchResult = (meals) => {
    const nourishmentList = new NourishmentList(savedNourishment);
    nourishmentList.nourishList = meals;
    mealList.innerHTML = '';
    mealList.appendChild(nourishmentList);
  };

  const renderSavedResult = (meals) => {
    const nourishmentList = new NourishmentList(savedNourishment);
    nourishmentList.nourishList = meals;
    savedMealList.innerHTML = '';
    savedMealList.appendChild(nourishmentList);
  };

  savedLink.addEventListener('click', () => {
    renderSavedResult(savedNourishment.nourishment, savedMealList);

    mealList.style.display = 'none';
    savedMealList.style.display = 'block';
    savedLink.parentElement.classList.add('active');
    finderLink.parentElement.classList.remove('active');
  });

  finderLink.addEventListener('click', () => {
    savedMealList.style.display = 'none';
    mealList.style.display = 'block';
    finderLink.parentElement.classList.add('active');
    savedLink.parentElement.classList.remove('active');
  });

  const onButtonSearchClicked = () => {
    getMeal(searchElement.value).then((json) => {
      renderSearchResult(json);
      savedMealList.style.display = 'none';
      mealList.style.display = 'block';
    });
  };

  searchButtonElement.addEventListener('click', onButtonSearchClicked);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 500) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
  });
};

export default main;
