const NEXT = document.getElementsByClassName('characters__button-btn')[0];
const SEARCH = document.getElementsByClassName('searchbox__button-btn')[0];
const FILTER = document.getElementsByClassName('filter__button-btn')[0];
const INPUT = document.getElementsByClassName('searchbox__input-field')[0];
const SELECTOR = document.getElementsByClassName('select__options-gender')[0];

import Loader from './modules/loader.js';
const creatures = new Loader();

function onWindowLoad() {
  creatures.loadCharacters();
}

function onLoad() {
  creatures.loadNextPage();
}

function onFilter() {
  creatures.filterCharacter(SELECTOR.value);
}

function onSearch() {
  creatures.searchCharacter(INPUT.value);
  INPUT.value = '';
}

window.addEventListener('load', onWindowLoad)
NEXT.addEventListener('click', onLoad)
SEARCH.addEventListener('click', onSearch)
FILTER.addEventListener('click', onFilter)