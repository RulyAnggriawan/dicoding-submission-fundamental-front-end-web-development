// import $ from 'jquery';
import SavedNourishment from './data/saved-nourishment';
import NourishmentList from './component/nourishment-list';
import './misc/additional';
import { showInfo, hideInfo } from './misc/utility';
import DataSource from './data/data-source';
import { saveLocalStorage, loadLocalStorage } from './misc/local-storage';

const main = () => {
  const searchButtonElement = document.querySelector('#search-button-element');
  const searchElement = document.querySelector('#search-element');
  const searchContainer = document.querySelector('#search-container');
  const mealList = document.querySelector('#meal-list');

  const savedMealList = document.querySelector('#saved-meal-list');
  const savedNourishment = new SavedNourishment();
  const findResultNourishment = new SavedNourishment();

  const savedLink = document.querySelector('#saved');
  const finderLink = document.querySelector('#finder');
  const infoCard = document.querySelector('#info-card');

  const renderSearchResult = (meals) => {
    const nourishmentList = new NourishmentList(savedNourishment);
    nourishmentList.nourishList = meals;
    mealList.appendChild(nourishmentList);
  };

  const renderSavedResult = (meals) => {
    savedMealList.innerHTML = '';
    if (meals.length !== 0) {
        const nourishmentList = new NourishmentList(savedNourishment);
        nourishmentList.nourishList = meals;
        savedMealList.appendChild(nourishmentList);
    } else {
      showInfo('No Saved Food or Drink Yet !');
    }
  };

  savedLink.addEventListener('click', () => {
    renderSavedResult(savedNourishment.nourishment);
    saveLocalStorage('saved', savedNourishment.nourishment);
    mealList.style.display = 'none';
    savedMealList.style.display = 'block';
    savedLink.parentElement.classList.add('active');
    finderLink.parentElement.classList.remove('active');

    searchContainer.style.display = 'none';
  });

  finderLink.addEventListener('click', () => {
    savedMealList.style.display = 'none';
    mealList.style.display = 'block';
    finderLink.parentElement.classList.add('active');
    savedLink.parentElement.classList.remove('active');
    infoCard.style.display = 'none';
    searchContainer.style.display = 'block';
  });

  const onButtonSearchClicked = () => {
    searchElement.disabled = true;
    searchButtonElement.disabled = true;
    hideInfo();
    mealList.innerHTML = '';

    DataSource.searchFoodDrink(searchElement.value).then((json) => {
      findResultNourishment.nourishment = json;
      renderSearchResult(findResultNourishment.nourishment);
    }).catch((rejectedReason) => {
      showInfo(rejectedReason);
    }).finally(() => {
      searchElement.disabled = false;
      searchButtonElement.disabled = false;
    });
  };

  searchButtonElement.addEventListener('click', onButtonSearchClicked);

  const init = () => {
    hideInfo();
    const savedLocal = loadLocalStorage('saved');
    if(savedLocal !== false){
      savedNourishment.nourishment = savedLocal;
    }
    
  };

  init();
};

export default main;
