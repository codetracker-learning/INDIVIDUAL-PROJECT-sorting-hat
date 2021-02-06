// console.log("Ravenclaw or GTFO")

// Create Array that will nest the names of students that we type in on the dom //
// Create an array that contains the name of the houses //

const studentsArr = [];
const houseArray = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const toggleHide = () => {
  const hidesBtn = document.querySelector("#toggle");
  if (hidesBtn.style.display === "none") {
    hidesBtn.style.display = "block";
  } else {
    hidesBtn.style.display = "none";
  }
};

const createStudentsCards = (taco) => {
  let domString = "";
  studentsArr.forEach((item, i) => {
    domString += `
    <div class="row">
        <div class="card m-2 text-center btn-outline-dark ${item.studentHouse}" style="width: 15rem" id=${i}>
        <div class="card-body border font-weight-bolder">
        <h5 class="card-title">${item.studentName}</h5>
        <p class="card-text">${item.studentHouse}</p>
        <button class="btn btn-primary btn-lg rounded-lg btn-outline-info form-text alert-info" id=${i}>Expel!</button>
        </div>
        </div>
        </div>`;
});

  printToDom("#studentCards", domString);
};

// const nameRequiredAlert = () => {
//   let nameRequired = document.querySelector("#sortBtn").addEventListener("click", nameRequiredAlert)
//   printToDom("#requiredAlert", nameRequired);
// }

const deleted = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  if (targetType === "submit") {
    studentsArr.splice(targetId);
    createStudentsCards(studentsArr);
  }
};

const handleButtonClick = (e) => {
  e.preventDefault();
  const studentName = document.querySelector("#studentName").value;
  const studentIds = studentsArr.map((student) => student.id).sort((a, b) => a - b);
  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;
  const studentHouse =houseArray[Math.floor(Math.random() * houseArray.length)];
  // if (studentName.lenth === 0) {
  //   nameRequiredAlert();
  // }

  const newStudent = {
    studentName,
    studentHouse,
    id,
  };

  studentsArr.push(newStudent);
  document.querySelector("form").reset();
  createStudentsCards();
};

const buttonEvents = () => {
  document.querySelector("#sortBtn").addEventListener("click", handleButtonClick);
  document.querySelector("#pleaseToggle").addEventListener("click", toggleHide);
  document.querySelector("#studentCards").addEventListener("click", deleted);
  // document.querySelector("#sortBtn"),addEventListener("click", nameRequiredAlert);
};

const init = () => {
  buttonEvents();
  createStudentsCards(studentsArr);
  // nameRequiredAlert();
};

init();
