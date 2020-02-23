document.addEventListener('DOMContentLoaded', () => {
  const newPlayerform = document.querySelector('#new-player-form')
  newPlayerform.addEventListener('submit', addNewPlayerFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const addNewPlayerFormSubmit = function (event) {
  event.preventDefault();

  const playerListItem = createPlayer(event.target);
  console.log(event.target)
  const playerList= document.querySelector('#players-list');
  playerList.appendChild(playerListItem);

  event.target.reset();
}

const createPlayer = function (form) {
  const playerListItem = document.createElement('li');
  playerListItem.classList.add('players-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  playerListItem.appendChild(name);

  const sport = document.createElement('h2');
  sport.textContent = form.sport.value;
  playerListItem.appendChild(sport);

  const continent = document.createElement('h2');
  continent.textContent = form.continent.value;
  playerListItem.appendChild(continent);

  return playerListItem;
}

const handleDeleteAllClick = function (event) {
  const playerList = document.querySelector('#players-list');
  playerList.innerHTML = '';
}
