// Student Arrays

const newStudents = [
  //     {
  //     name: "Harry Potter",
  //     house: "Gryffindor",
  // },
];

const deathEaters = [
  // {
  // name: "Peter Pettigrew",
  // },
];

// Render to Dom

const renderToDom = (containerId, textToRender) => {
  const selectedContainer = document.querySelector(containerId);
  selectedContainer.innerHTML = textToRender;
};

// Renders Sorting Hat Card to Page

const sortingHat = () => {
  let domString = `<div class="card" style="width: 18rem;">
    <img src="https://w7w5t4b3.rocketcdn.me/wp-content/uploads/2018/07/sorting-hat-quiz.jpg" class="card-img-top" alt="hat">
    <div class="card-body">
      <h5 class="card-title">Welcome to Hogwarts</h5>
      <p class="card-text">Never tickle a sleeping dragon.</p>
      <a href="#" id="startButton" class="btn btn-primary">Get sorted</a>
    </div>
  </div>`;

  renderToDom("#sortingHat", domString);
};

// Button Controls

const button = () => {
  document.querySelector(`body`).addEventListener("click", buttonControl);
  document
    .querySelector(`#hogwartsStudents`)
    .addEventListener("click", expelStudents);
};

const buttonControl = (event) => {
//   console.log("The button works?");
  if (event.target.id === "startButton") {
    console.log("Sorted!");
    let domString = `
     <form>
     <div class="mb-3">
       <label for="studentName" class="form-label">Student Name</label>
       <input type="text" class="form-control" id="studentName" required>
     </div>
     <button type="submit" class="btn btn-primary">Submit</button>
     </form>
     `;

    renderToDom("#studentForm", domString);
  }

  if (event.target.type === "submit") {
    event.preventDefault();
    console.log(newStudents);
    sortStudents();
  }
};

// Renders student cards to page

const placeStudents = (array) => {
  console.log(array, "Inside placeStudents function");

  let domString = " ";

  array.forEach((student, i) => {
    domString += `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text">${student.house}</p>
                <a href="#" type= "button" id= "${i}" class="btn btn-primary">Expel!!</a>
            </div>
        </div>
`;


  });

  renderToDom("#hogwartsStudents", domString);
};

// Expels a student and sends them to Death Eaters

const expelStudents = (event) => {
  const targetType = event.target.type;
  const targetId = event.target.id;

  if (targetType === "button") {
    event.preventDefault();
    console.log("Expelled!");

    const expelledStudent = newStudents.splice(targetId, 1);


    deathEaters.push(expelledStudent[0]);

    console.log(deathEaters);
    console.log(newStudents);

    sortDeathEaters(deathEaters);
    placeStudents(newStudents);
  }

};

// Prints Death Eaters

const sortDeathEaters = (array) => {
  let domString = " ";

  array.forEach((student) => {
    domString += `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text">This student is now a Death Eater!</p>
            </div>
        </div>
`;

    renderToDom("#expelledStudents", domString);
  });
};

// Sorts students into houses and adds to the array.

const sortStudents = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 4) + 1;
  };

  console.log(randomNumber());

  const studentHouse = randomNumber();

  if (studentHouse === 1) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Gryffindor",
    };
    console.log(student);
    newStudents.push(student);
  }
  if (studentHouse === 2) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Hufflepuff",
    };
    console.log(student);
    newStudents.push(student);
  }
  if (studentHouse === 3) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Ravenclaw",
    };
    console.log(student);
    newStudents.push(student);
  }
  if (studentHouse === 4) {
    const student = {
      name: document.querySelector("#studentName").value,
      house: "Slytherin",
    };
    console.log(student);
    newStudents.push(student);
  }

  placeStudents(newStudents);
};

// Initializes App

const init = () => {
  console.log("Init function running");
  sortingHat();
  button();
  placeStudents(newStudents);
  sortDeathEaters(deathEaters);
//   buttonControl();
//   sortStudents();
};

init();
