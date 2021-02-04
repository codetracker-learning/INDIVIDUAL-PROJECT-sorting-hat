const students = [];
let expelledArray = [];

const showForm = () => {
  document.getElementById("formElement").style.display ="block";
}

const studentHouse = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin"
];

const printToDom = (divID, texToPrint) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = texToPrint;
}

const studentBuilder = (arr) => {
  let domString = " ";

  arr.forEach((item, i) => {
   domString += `<div id=${i} class="card">
            <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.house}</p>
            <button type="button" id=${i} class="btn btn-primary">EXPEL</button>
            </div>
          </div>`
  });
    printToDom("#studentContainer", domString);
}

const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType === "button") {
    let deleteStudent = students.splice(targetId, 1);
    expelledArray.push(...deleteStudent);
  }
  console.log()
  studentBuilder(students)
}


const manageButtonClick = (e) => {
  const buttonId = e.target.id;

}

const getFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector("#student-name").value;

  const randomHouse =  Math.floor(Math.random() * studentHouse.length);
  const house = studentHouse[randomHouse];git st
  
  const obj = {
    name,
    house,
    // id,  //still need to finsh id
  }

  students.push(obj);
  studentBuilder(students);

  document.querySelector('#student-name').value = "";
}

const buttonEvent = () => {
  document.querySelector("form").addEventListener("click", manageButtonClick);
  document.querySelector("#sort").addEventListener("click", getFormInfo);

  document.querySelector("#studentContainer").addEventListener("click", expelStudent);
  
}

const init = () => {
  buttonEvent();
  studentBuilder(students);
};

init();
