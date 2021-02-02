const students =[
];

const houses = [ 
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
  "Voldemort's Army",
]

//Prints to DOM
const printToDom = (divId, string) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = string;
}

// Creates the form after "Sort!" button is clicked
const createForm = (e) => {
  let formId = e.target.id;

  if (formId === "sort") {
    document.querySelector("#form").innerHTML=
    `<form id="inputForm>
      <div class="mb-3">
        <label for="exampleStudentInput" class="form-label">New Student Name</label>
        <input type="text" class="form-control" id="studentName">
        <div class="form-text">Find you school!</div>
      </div>
    </form>`
    }
  
}

// Prints student card
const studentMaker = (studentArr) => {
  let cardString = '';

  studentArr.forEach((item, i) => {
    cardString += `<div class="card" style="width: 18rem;" id="${i}">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.school}</p>
      <button type="button" class="btn btn-danger" id=${item.id}>Expel</button>
    </div>
  </div>`;
  });
  
  printToDom("#students", cardString);

}

// Creates student object to be pushed into "student" array with input from form id
const createStudentObj = (e) => {
  
  e.preventDefault();

  const name = document.querySelector("#studentName").value;
  const school = houses[Math.floor(Math.random() * houses.length)];

//                        ********* REFACTOR THIS ********** 
  const studentIds = students.map(student => student.id).sort((a, b) => a - b);
  const id = studentIds.length ? studentIds[(studentIds.length - 1)] + 1 : 0;


  const obj = {
    name,
    school,
    id,
  }

  students.push(obj);
  studentMaker(students);
  //                      ********** RESET NOT WORKING *********
  document.querySelector("#studentName").reset();
}

// Expels student when button is clicked
const expelButton = (e) => {
  targetType = e.target.type;
  targetId = e.target.id;

  if (targetType === "button") {
    students.splice(targetId, 1);
    studentMaker(students);
  } 
}


// Triggers functions to execute when mouse events occur
const buttonEvents = () => {
  document.querySelector('#sort').addEventListener('click', createForm);
  document.querySelector('#form').addEventListener('submit', createStudentObj);
  document.querySelector('#students').addEventListener('click', expelButton)
}


const init = () => {
  buttonEvents();
}

init();
