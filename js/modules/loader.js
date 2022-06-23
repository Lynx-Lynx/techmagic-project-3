import createCharacterCard from './card.js';
import State from './state.js';
const DIV = document.getElementsByClassName('characters')[0];
const ERROR_MESSAGE = document.getElementsByClassName('error-message')[0];
const NEXT = document.getElementsByClassName('characters__button-btn')[0];

class DataLoader extends State {

  async getCharacters(url) {
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        ERROR_MESSAGE.style.display='block';
        throw new Error('page not found');
      }  
    }
    catch(e) {
      throw new Error(e);
    }
  }

  emptyResultsContent() {
    DIV.innerHTML = '';
    ERROR_MESSAGE.style.display='none';
    NEXT.style.display='none';
  }

  loadCharacters() {
    this.getCharacters(`https://rickandmortyapi.com/api/character`).then(character => {
      this.nextPage = character.info.next;
      createCharacterCard(character.results);
      NEXT.style.display='block';
    });
  }
  
  loadNextPage() {
    if (this.nextPage) {
      this.getCharacters(this.nextPage).then(character => {
        this.nextPage = character.info.next;
        if (!this.nextPage) {
          NEXT.style.display='none';
        }
        createCharacterCard(character.results)
      });
    }
  }

  searchCharacter(value) {
    this.emptyResultsContent();
    this.getCharacters(`https://rickandmortyapi.com/api/character/?name=${value}`).then(character => {
      this.nextPage = character.info.next;
      NEXT.style.display='block';
      if (!this.nextPage) {
        NEXT.style.display='none';
      }
      createCharacterCard(character.results);
    });
  }
  
  filterCharacter(value) {
    this.emptyResultsContent();
    this.getCharacters(`https://rickandmortyapi.com/api/character/?gender=${value}`).then(character => {
      this.nextPage = character.info.next;
      NEXT.style.display='block';
      if (!this.nextPage) {
        NEXT.style.display='none';
      }
      createCharacterCard(character.results)
    });
  }

};

export default DataLoader;