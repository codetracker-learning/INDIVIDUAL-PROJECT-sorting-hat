console.log("CONNECTED");

const students = [
  {
    name: "Mitchell",
    schoolHouse: "Ravenclaw",
  },

];

const expelledStudents = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

function showForm () {
  document.getElementById("myForm").style.display = "block";
}


// const studentBuilder = (taco) => {
//   let domString = '';
//   for (const [i, item] of taco.entries()) {
//     const { name, schoolHouse } = item;
//     domString += `<div class="cards d-flex p-4">
//     <div class="new-student-cards">${name}
//       <h4>First Year's</h4>
//       <div id="first-years-card-display" class="d-flex flex-wrap justify-content-center">
//       </div>
//       <p class="card-text>${schoolHouse}</p>
//     </div>
//   </div>`;
//   }
//   printToDom('#student', domString);
// };

// //C in CRUD: Create new students
// const getFormInfo = (e) => {
//   e.preventDefault(); //Stops page from refreshing

//   //Grabbing all the values of the input form fields
//   const name = document.querySelector('#name').value;
//   const schoolHouse = document.querySelector('#schoolHouse').value;

//   //shorthand object notation to add values to objects
//   const obj = {
//     name,
//     schoolHouse,
//   }

//   //pushing new object up the pies array.
//   students.push(obj);

//   //Rebuilding the DOM
//   studentBuilder(students);

//   //Reset the form after the submit button is click
//   document.querySelector('form').reset();

//   console.log(obj);
// };

const buttonEvents = () => {
  document.querySelector("#get-started").addEventListener("click", showForm);
  // document.querySelector("#sort").addEventListener("click", studentBuilder);
};

const init = () => {
  buttonEvents();
  // studentBuilder(students);
};

init();
