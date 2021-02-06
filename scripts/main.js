// Array of student houses
const hat = ["GRYFFINDOR", "HUFFLEPUFF", "RAVENCLAW", "SLYTHERIN"];

// Students Array
const students = [];

// Expel Array (deleted students)
const expel = [];

// Function that prints the student card
const printToDom = (divId, printText) => {
  // Selects the first parentChild relationship for the <div id=""> element
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = printText;
};

// Gets the information of the student
const cardInfo = (event) => {
  event.preventDefault();

  const name = document.querySelector("#studentName").value;
  const house = hat[Math.floor(Math.random() * hat.length)];
  // Sorts students by Ids using the .map method
  const studentIds = students.map(student => student.id).sort((a, b) => a - b);
  const id = studentIds.length ? studentIds[(studentIds.length - 1)] + 1 : 1;
  // The student object key.value form
  const studentObj = {
    name,
    house,
    id,
  };
  // Pushes the student object into the students array
  students.push(studentObj);
  // Invokes the cardBuilder function with the (students) array as a parameter 
  cardBuilder(students);
  document.querySelector("form").reset();
};

// Student information form function and student input name is submitted when the submit button is clicked
const cardForm = (e) => {
  let formId = e.target.id;
  // The student HTML form is rendered when the Sort button is clicked
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
  // Listens for the submit button when clicked and triggers the cardInfo function
  document.querySelector("#createB").addEventListener('click', cardInfo);
};

// Prints the array of students to the DOM
const cardBuilder = (studentArray) => {
  let domString = "";
  // .forEach array method that reiterates through the students array 
  studentArray.forEach((item, i) => {
    domString += `<div class="card mb-3" style="width: 18rem;" id=${i}>      
        <div class="card-body">
          <h4 class="card-text">Name: ${item.name}</h4>
          <p class="card-text">House: ${item.house}</p>
          <button type="button" class="btn btn-danger" id="${i}">Expel!</button> 
        </div>
      </div>`;
  })
  // Invokes the printToDom function and renders the student to the Dom
  printToDom("#students", domString);
};

// Deletes a student when button is clicked
const deleteCard = (e) => {
  const targetType = (e.target.type);
  const targetId = (e.target.id);
  // if statement if the delete button is clicked it will find the student id
  if (targetType === "button") {
    const deleteStudent = students.findIndex((student) => student.id === targetId);
    students.splice(deleteStudent, 1);

    // Pushes the deleted student into the expel array
    expel.push(...students.splice(targetId, 1));
  }
  // Invokes the cardBuilder function with the (students) array as a parameter 
  // expelStudent(expel);
  cardBuilder(students);
};

// expel student array
// const expelStudent = (expelArray) => {
//   let expelDom = "";
//   expelArray.forEach((item, i) => {
//     secretDom +=
//       `<div class="card m-1" style="width: 18rem;" id=${i}>
//         <div class="card-body text-center">
//           <p class="h5 card-text text-dark">Unfortunately, <span class="text-danger">${item.name}</span> went over to the dark side</p>
//         </div>
//       </div>`
//   })
//   printToDom("#expelledStudent", expelDom);
// };

// Event Listeners when Delete || Sort button is clicked
const clickEvents = (event) => {
  // addEventListeners for the Sort && Delete buttons
  document.querySelector("#sort").addEventListener('click', cardForm);
  document.querySelector("#students").addEventListener('click', deleteCard);
};

// Initializes functions when a button is clicked
const initialize = () => {
  // Invokes the clickEvents function
  clickEvents();
};
// Invokes the initialize function
initialize();
