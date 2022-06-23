const DIV = document.getElementsByClassName('characters')[0];

function createCharacterCard(characters) {
  characters.forEach(character => {
    DIV.innerHTML = DIV.innerHTML +
    `<div class="characters__card">
      <div class="characters__card-img">
        <img class="card__img" src="${character.image}" alt="${character.name}"/>
      </div>
      <div class="card__row">
        <div class="card__header">
          <h2 class="card__header-text">#${character.id} ${character.name}</h2>
        </div>
        <div class="card__text">
          <p>Gender: ${character.gender}</p>
          <p>Species: ${character.species}</p>
          <p>Location: ${character.location.name}</p>
          <p>Status: ${character.status}</p>
        </div>
      </div>
    </div>`
  });
}

export default createCharacterCard;