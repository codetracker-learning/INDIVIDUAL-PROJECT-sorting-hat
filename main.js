console.log("CONNECTED");

const students = [
  {
    name: "Mitchell",
    schoolHouse: "Gryffindoor",
  }
];

const voldermortsArmy = [];
const houseColors = {
  Gryffindoor: "#7F0909",
  Snakes: "#0D6217",
  Hufflepuffle: "#EEE117",
  Ravenclaw: "#000A90"
};
const houseCrest = {
  Gryffindoor: "https://img.fruugo.com/product/7/49/46790497_max.jpg",
  Snakes: "https://i.ebayimg.com/images/g/IgMAAOSw0exaGEr~/s-l500.jpg",
  Hufflepuffle: "https://i.ebayimg.com/images/g/T-oAAOSw~Lpcm-e4/s-l400.jpg",
  Ravenclaw: "https://s4.thcdn.com//productimg/1600/1600/12024630-1024653879759849.jpg"
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

function showForm() {
  document.getElementById("myForm").style.display = "block";
}; // sets the myForm div display type to block upon clicking the Get Started button.

//DOESNT WORK
// const showForm = () => {
//   const content = `<div class="mb-3 justify-content-center">
//         <div class="form-body text-center">
//           <!-- Need to place the elements of the form within it's own card container so they can manipulated within the form itself. -->
//           <h3>
//             Speak Thy First and Last Name
//           </h3>

//           <div class="d-flex col-md-6 offset-md-3">
//             <label for="studentName" class="form-label">Student's Name:</label>
//             <input type="text" class="form-control mx-3 mb-2" id="studentName" placeholder="David Copperfield" required>
//             <button type="submit" class="btn btn-primary mb-2" id="sort">SORT ME</button>
//           </div>
//           <div id="error-message"> </div>
//         </div>
//       </div>`;
//     printToDom("#myForm", content);
// };

const sortingHat = () => {
  const houses = ["Gryffindoor", "Snakes", "Hufflepuffle", "Ravenclaw"]; //define the houses to sort between
  let sortingHat = houses[Math.floor(Math.random() * houses.length)]; //define what we will return. Example: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array 
  return sortingHat;
};


//C in CRUD: Create New Students
// Takes the name put into the student submission form and pushes it into the array.
const addStudentToHouse = (e) => {
  e.preventDefault();
  let domString = '';
  if (e.target.id === "sort") { //If the target of an event is the button id 'sort' set the constant student = to the query on studentName
    const student = document.querySelector("#studentName");
    errorMessage(student.value);

    if (student.value) { //If the value of student returns true then push the name and schoolHouse into the array.
      students.push({
        name: student.value,
        schoolHouse: sortingHat()
      });
      student.value = ""; //student.value must = a string value. 
    }
    let sortedArray = sortStudentsByHouse(students);
    studentBuilder(sortedArray); //run studentBuilder function to generate the card for the newly added student in the array. AKA - Rebiuld the DOM.
  }

  document.querySelector('form').reset();
  //Reset the form after the button is clicked
};

//Return the sorted results of an array. First look at a and b to compare and sort based on schoolHouse property. I believe because it is comparing string values it returns them alphabetically. Next, if the schoolHouse properties are the same, sort by the name property. More Info: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/ 
const sortStudentsByHouse = (array) => {
  return array.sort((a, b) => (a.schoolHouse > b.schoolHouse) ? 1 : (a.schoolHouse === b.schoolHouse) ? ((a.name > b.name) ? 1 : -1) : -1 )
}

// //Creates a pie container card on the DOM
const studentBuilder = (taco) => {
  let domString = '';
  // FOR OF LOOP - This works!
  for (const [i, item] of taco.entries()) {
    const { name, schoolHouse } = item;
    domString += `<div class="card" style="width: 15rem; " id=${i}>
        <div class="col" style="min-height: 60px; background-color: ${houseColors[schoolHouse]}">
    </div>
    <img class="card-img-top";  src=${houseCrest[schoolHouse]} >
    <div class="card-body">
      <p class="card-text" id="studentName">${name}</p>
      <p class="card-text"id="schoolHouse">${schoolHouse}</p>
      <button type="button" id="${i}" class="btn btn-danger">EXPEL</button>
    </div>
  </div>`;
  }
  printToDom("#first-years-card-display", domString);
};

const evilBuilder = (taco) => {
  let domString = '';
  // FOR OF LOOP - This works!
  for (const [i, item] of taco.entries()) {
    const { name } = item;
    if (divId = "voldermorts-army") {
      domString += `<div class="card m-3" style="width: 15rem; background-color: #000000;" id=${i}>
      <img class="card-img-top" src="https://cdn.images.express.co.uk/img/dynamic/36/590x/harry-potter-theory-voldemort-horcrux-1200870.jpg?r=1573053077046">
            <p style="color:white" class="card-text">Sadly, <b>${name}</b> went over to the dark side!</p>
        </div>
    </div>`;
    };
    printToDom("#voldermorts-army", domString);
  };
};

//OTHER OPTIONS!!

// FOR EACH LOOP - This works!
// taco.forEach((item, i) => {
//   domString += `<div class="card" style="width: 18rem;" id=${i}>
//   <div class="card-body">
//     <p class="card-text" id="studentName">${taco[i].name}</p>
//     <p class="card-text"id="schoolHouse">${taco[i].schoolHouse}</p>
//     <button type="button" id="${i}" class="btn btn-danger">EXPEL</button>
//   </div>
// </div>`;
// });
// printToDom('#first-years-card-display', domString);
// };

//FOR LOOP ISNT ALLOWED IN THIS ASSIGNMENT. This Generates
//   for (let i = 0; i < taco.length; i++) {
//     domString += `<div class="card" style="width: 18rem;" id=${i}>
//                     <div class="card-body">
//                       <p class="card-text" id="studentName">${taco[i].name}</p>
//                       <p class="card-text"id="schoolHouse">${taco[i].schoolHouse}</p>
//                       <button type="button" id="${i}" class="btn btn-danger">EXPEL</button>
//                     </div>
//                   </div>`;
//   };
//   printToDom('#first-years-card-display', domString);
// };

const errorMessage = (student) => {
  if (student) {  //If student has a value when passed to the function set the div's innerHTML to nothing.
    document.querySelector("#error-message").innerHTML = "";
  } else { //If student returns false when passed set div's innerHTML = to the syled div we setup on the HTML page.
    document.querySelector("#error-message").innerHTML =
      `<div style="color: red;margin-bottom: 10px;">
        <b>Don't be shy! Say your name.</b>
      </div>`;
  }
};



const buttonEvents = () => {
  document.querySelector("#get-started").addEventListener("click", showForm);
  document.querySelector("#sort").addEventListener("click", addStudentToHouse);
  document.querySelector('#first-years-card-display').addEventListener("click", expelStudent);


};

const expelStudent = (e) => {
  if (e.target.type === 'button') {
    voldermortsArmy.push(students[e.target.id])
    students.splice(e.target.id, 1)
    studentBuilder(students);
    evilBuilder(voldermortsArmy);
  }
}


const init = () => {
  studentBuilder(students);
  buttonEvents();
  console.log(students);
  console.log(voldermortsArmy);
};

init();
