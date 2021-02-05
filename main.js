console.log(document.querySelector("#sortingDiv").attributes);
// Start arrays section
const students = [
  // { 
    // name: ,
    // house: ,
    // color: ,
    // text:,
    // },
  ];
  
const trueBelievers = [
  // {
    // name:
    // house: "It's Marvel Baby!",
    // color: "red";
    // text:,
  // }
];
// End arrays section

// Start SPA interactivity functions section
// Create function to display Bootstrap Form once Jumbotron button clicked
function showForm() {
  document.querySelector("#sortingDiv").style.display = "block";
};
// End SPA interactivity functions sections

// Start print to DOM section
// Create function to print to DOM
const printToDom = (divId, textAsHtml) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML =textAsHtml;
};

// Create function to create DOM string and .innerHTML
// for student cards
const studentRosterBuilder = (arrayOfObjects) => {
  let domString = "";

  arrayOfObjects.forEach((object, i) => {
    domString += `<div class="card my-2" style="width: 20rem;" id=${i}>
                    <div class="card-body ${object.color} ${object.text}">
                      <h.card-title>${object.name}</h.card-title>
                      <p class="card-text">${object.house}</p>
                      <button type="button" class="btn bg-danger bg-gradient border border-dark border-3 rounded-pill" id="${i}">Expulsion! </button>
                    </div>
                  </div>
    `
    printToDom("#studentCards","Students" + domString);

  })
};

// for expelled cards
const expelledRosterBuilder = (arrayOfObjects) => {
  let domString = "";

  arrayOfObjects.forEach((object, i) => {
    domString += `<div class="card my-2" style="width: 20rem;" id=${i}>
                    <div class="card-body">
                      <h.card-title>${object.name}</h.card-title>
                      <p class="card-text">It's MAHVELL, BABY!!!</p>
                      <img src="Marvel.jpg" class="img-fluid" alt="pic of Marvel superheros">
                      <p class="card-text">${object.name} became a True Believer and is now a fan of the Marvel Universe instead :)</p>
                      <p class="card-text">Not even Voldemort wanted them.</p>
                    </div>
                  </div>
    `
    printToDom("#expelledCards","Expelled!" + domString);

  })
};
// End print to DOM section

// Start anonymous functions
// C in CRUD
// Create function to enroll student into students array and print array to DOM as cards
const enrollStudent = (e) => {
  // Stops page from refreshing
  e.preventDefault();

  // Grab values from the form
  const name = document.querySelector("#name").value;
        // note this is placeholder, will build a randomizer function
  const houses = [
    {
      house:"Gryffindor",
      color:"bg-danger",
      text:"text-white"
    },
    {
      house:"Hufflepuff",
      color:"bg-warning",
      text:"text-dark",
    },
    {
      house:"Ravenclaw",
      color:"bg-primary",
      text:"text-white",
    },
    {
      house:"Slytherin",
      color:"bg-success",
      text:"text-white",
    },
  ];
  const random = Math.floor(Math.random()*houses.length);
  const sort = houses[random];
  const house = sort.house;
  const color = sort.color;
  const text = sort.text;

  // Shorthand object notation to add form detail to students array
  const obj = {
    name,
    house,
    color,
    text,
  };

  // Push new entry into students array
  students.push(obj);

  // Rebuild the DOM
  studentRosterBuilder(students);

  // Reset the form fields
  document.querySelector("form").reset();

};

// Create function to expel student and enlist them in trueBelievers instead
const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType==="button") {
    trueBelievers.push(students[targetId]);
    students.splice(targetId,1);
  }; 
  // Print student cards
  if (students.length != 0) {
    studentRosterBuilder(students);
  } else {
    printToDom("#studentCards","");
  };

  // Print expelled cards
  if (trueBelievers.length != 0) {
    expelledRosterBuilder(trueBelievers);
  } else {
    printToDom("#expelledCards","");
  };

};
// End anonymous functions



// Start Event recording
// Capture button clicks and say what they do
const buttonEvents = () => {
  // listen for submit button
  document.querySelector("form").addEventListener("submit", enrollStudent);
  // listen for delete button
  document.querySelector("#studentCards").addEventListener("click",expelStudent);
};
// End Event recording


// Create init() function
const init = () => {
  buttonEvents();
};

init();
