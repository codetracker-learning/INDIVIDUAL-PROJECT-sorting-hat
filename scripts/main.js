const studentList = [
  {
    studentName: 'Martin',
    house: "Gryffindor",
  },
  {
    studentName: "Sara",
    house: "Ravenclaw",
  },
  {
    studentName: "Nick",
    house: "Slytherin",
  }
];

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const printToDom = (divId, printText) => {
  const selectedHat = document.querySelector(divId);
  selectedHat.innerHTML = printText;
};

const cardForm = (obj) => {
  const buttonId = e.target.id;

  document.querySelector("studentForm").innerHTML =
    `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
};

const cardBuilder = (hatArray) => {
  let domString = "";

  hatArray.forEach((element, i) => {
    domString += `<div class="card mb-3" style="width: 18rem;" id=${i}>      
      <div class="card-body">
        <p class="card-text">${element.name}</p>
        <p class="card-text">${element.house}</p>
        <button type="button" class="btn btn-danger" id="${element.id}">Expel!</button>
      </div>`;
  })
  printToDom('#students', domString);
};

const buttonClick = (event) => {

};

const deleteCard = (e) => {
  const targetType = (e.target.type);
  const targetId = (e.target.id);

  if (targetType === "button") {
    const studentIndex = students.findIndex((hat) => hat.id === targetId);
    let deleteCard = studentList.splice(studentIndex, 1);
  }
  cardBuilder(studentList);

};

const clickEvents = (event) => {
  const buttonId = event.target.id;

  document.querySelector('#form').addEventListener('click', buttonClick);
  document.querySelector('#students').addEventListener('click', buttonClick);
  document.querySelector('#delete').addEventListener('click', deleteCard);
};

const initialize = () => {
  clickEvents();
  cardBuilder(hats);
};
initialize();
