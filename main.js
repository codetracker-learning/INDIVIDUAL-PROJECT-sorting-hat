import printToDom  from './printToDom.js';

const students = [];

const houses = [ 
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
]

// Prints student card
const studentMaker = (studentArr) => {
  let cardString = '';

  studentArr.forEach((item, i) => {
    cardString += `<div class="card" style="width: 18rem;" id="${i}">
                    <div class="card-body ${item.style}">
                      <h5 class="card-title text-light">${item.name}</h5>
                      <p class="card-text text-light">${item.school}</p>
                      <button type="button" class="btn btn-danger" id=${item.id}>Expel</button>
                    </div>
                  </div>`;
  });

  printToDom("#students", cardString);
}

// Creates student object to be pushed into "student" array with input from form id
const createStudentObj = (e) => {
  
  e.preventDefault();
  let style = '';
  const name = document.querySelector("#studentName").value;
  const school = houses[Math.floor(Math.random() * houses.length)];

//                        ********* REFACTOR THIS ********** 
  const studentIds = students.map(student => student.id).sort((a, b) => a - b);
  const id = studentIds.length ? studentIds[(studentIds.length - 1)] + 1 : 0;

  const obj = {
    name,
    school,
    id,
    style,
  }

  if (obj.school === "Gryffindor") {
    obj.style = 'bg-primary bg-gradient';
  } else if (obj.school === "Hufflepuff") {
    obj.style = 'bg-success bg-gradient';
  } else if (obj.school === "Ravenclaw") {
    obj.style = 'bg-warning bg-primary';
  } else if (obj.school === "Ravenclaw") {
    obj.style = 'bg-secondary bg-gradient';
  } else if (obj.school === "Slytherin") {
    obj.style = 'bg-warning bg-primary';
  }

  students.push(obj); 
  studentMaker(students);
}

// Expels student when button is clicked
const expelButton = (e) => {
  let targetType = e.target.type;
  let targetId = e.target.id;
  
  if (targetType === "button") {
    if (students.length > 1) {
      students.splice(targetId, 1);
    } else if (students.length === 1) {
      students.shift();
    }
    studentMaker(students);
  } 
}

// Triggers functions to execute when mouse events occur
const buttonEvents = () => {
  document.querySelector('#sort').addEventListener('click', createForm);
  document.querySelector('#students').addEventListener('click', expelButton)
}

const createForm = (e) => {
  let formId = e.target.id;

  if (formId === "sort") {
    document.querySelector("#form").innerHTML = `<form id="inputForm>
                                                  <div class="mb-3">
                                                    <label for="exampleStudentInput" class="form-label">New Student Name</label>
                                                    <input type="text" class="form-control" id="studentName">
                                                    <div class="form-text">Find your school!</div>
                                                    <button id="create" type="button" class="btn btn-primary">Submit</button>
                                                  </div>
                                                </form>`
  }
  document.querySelector('#create').addEventListener('click', createStudentObj);
}

//Initializes all functions
const init = () => {
  buttonEvents();
}

init();
