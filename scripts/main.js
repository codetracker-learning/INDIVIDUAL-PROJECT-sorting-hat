
const hats = [
  {
    name: "Dusty",
    color: "Green",
  },
];

const printToDom = (divId, printText) => {
  const selectedHat = document.querySelector(divId);
  selectedHat.innerHTML = printText;
};

const hatForm = (obj) => {
  `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
};
printToDom(domString);

const cardBuilder = (hatArray) => {
  let domString = "";

  hatArray.forEach((element, i) => {
    domString += `<div class="card mb-3" style="width: 18rem;" id=${i}>      
      <div class="card-body">
        <p class="card-text">${element[i].name}</p>
        <p class="card-text">${element[i].color}</p>
        <button type="button" class="btn btn-danger" id="${element[i].id}">Expel!</button>
      </div>`;
  })
  printToDom('#hats', domString);
};

const buttonClick = (event) => {

};

const deleteCard = (e) = {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if(targetType === "button") {
    const hatIndex = hats.findIndex((hat) => hat.id === targetId);
hats.splice(hatIndex, 1)
  }
};

const clickEvents = (event) => {
  const buttonId = event.target.id;

  document.querySelector('#').addEventListener('click', buttonClick);
  document.querySelector('#').addEventListener('click', buttonClick);
  document.querySelector('#').addEventListener('click', deleteCard);
};

const initialize = () => {
  clickEvents();
  hatBuilder(hats);
};
initialize();
