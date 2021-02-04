// Array of student houses
const hat = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

// Students Array
const students = [];

// function that prints the student card
const printToDom = (divId, printText) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = printText;
};

// Gets the information of the student
const cardInfo = (event) => {
  event.preventDefault();

  const name = document.querySelector("#studentName").value;
  const house = hat[Math.floor(Math.random() * hat.length)];
  // sorts students by Ids
  const studentIds = students.map(student => student.id).sort((a, b) => a - b);
  const id = studentIds.length ? studentIds[(studentIds.length - 1)] + 1 : 1;

  const studentObj = {
    name,
    house,
    id,
  };

  students.push(studentObj);
  cardBuilder(students);
  document.querySelector("form").reset();
};

// Student information form
const cardForm = (e) => {
  let formId = e.target.id;

  if (formId === "sort") {
    document.querySelector("#form").innerHTML = `<form id="inputForm">
    <div class="card-body">
      <h5 class="card-title">New Student</h5>
      <input type="text" class="form-control" id="studentName">
      <div class="form-text">Find Your House</div>
      <button id="createB" type="button" class="btn btn-primary">Submit</button>
    </div>
  </form>`
  }
  document.querySelector("#createB").addEventListener('click', cardInfo);
};

const cardBuilder = (studentArray) => {
  let domString = "";

  studentArray.forEach((item, i) => {
    domString += `<div class="card mb-3" style="width: 18rem;" id=${i}>      
        <div class="card-body">
          <h4 class="card-text">${item.name}</h4>
          <p class="card-text">${item.house}</p>
          <button type="button" class="btn btn-danger" id="${i}">Expel!</button>
        </div>
      </div>`;
  })
  printToDom("#students", domString);
};

// Deletes a student when button is clicked
const deleteCard = (e) => {
  const targetType = (e.target.type);
  const targetId = (e.target.id);

  if (targetType === "button") {
    const studentIndex = students.findIndex((student) => student.id === targetId);
    students.splice(studentIndex, 1);
  }
  cardBuilder(students);
};

// Event Listeners when delete button is clicked or student info is submitted
const clickEvents = (event) => {

  document.querySelector("#sort").addEventListener('click', cardForm);
  document.querySelector("#students").addEventListener('click', deleteCard);
};

// Initializes functions when a button is clicked
const initialize = () => {
  clickEvents();
};

initialize();
