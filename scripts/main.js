const hat = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const students = [];

const printToDom = (divId, printText) => {
  const selectedHat = document.querySelector(divId);
  selectedHat.innerHTML = printText;
};

const cardForm = () => {

  let form = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  printToDom('#form', form);
  document.querySelector("#studentForm").addEventListener('click', formInfo);
};

const studentCard = (hatArray) => {
  let domString = "";

  hatArray.forEach((element) => {
    domString += `<div class="card mb-3" style="width: 18rem;" id=${i}>      
      <div class="card-body">
        <p class="card-text">${element.name}</p>
        <p class="card-text">${element.house}</p>
        <button type="button" class="btn btn-danger" id="${element.id}">Expel!</button>
      </div>`;
  })
  printToDom('#hats', domString);
};

const buttonClick = (event) => {
  const studentName = document.querySelector("#studentName").value;
  const newStudent = {
    studentName,
    house: "slytherin",
  };
  students.push(newStudent);
}

const deleteCard = (e) => {
  const targetType = (e.target.type);
  const targetId = (e.target.id);

  if (targetType === "button") {
    const studentIndex = students.findIndex((student) => student.id === targetId);
    studentList.splice(studentIndex, 1);
  }
  studentCard();
};

const clickEvents = (event) => {

  document.querySelector('#sort-hat').addEventListener('click', cardForm);
  document.querySelector('#hats').addEventListener('click', buttonClick);
};

const initialize = () => {
  clickEvents();
  // cardBuilder(studentList);
};
initialize();
