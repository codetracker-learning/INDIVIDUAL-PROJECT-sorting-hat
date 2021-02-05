// console.log("Ravenclaw or GTFO")

// Create Array that will nest the names of students that we type in on the dom // 
// Create an array that contains the name of the houses // 

const studentsArr = [];
const houseArray = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

``

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = textToPrint;
}


const toggleHide = () => {
  const hidesBtn = document.querySelector("#toggle");
  if (hidesBtn.style.display === "none") {
    hidesBtn.style.display = "block";
  } else {
    hidesBtn.style.display = "none";
  }

}

// const studentIds = studentsArr.map((student) => student.id).sort((a, b) => a - b);
// const id = studentIds.length ? studentIds[(studentIds.length - 1)] + 1 : 1;
// const studentHouse = houseArray[Math.floor(Math.random() * houseArray.length)];

// console.log(item.id);
const createStudentsCards = (taco) => {
  let domString = '';
  studentsArr.forEach((item, i) => {
    domString += `<div class="card" style="width: 18rem" id=${item.id}>
  <div class="card-body" id=${item.studentHouse}>
    <h5 class="card-title">${item.studentName}</h5>
    <p class="card-text">${item.studentHouse}</p>
    <a href="#" class="btn btn-primary" id=${item.id}>Expel!</a>
  </div>
</div>`
  })
  
  printToDom('#studentCards', domString);

}

// const studentHouse = houseArray[Math.floor(Math.random() * houseArray.length)];

const handleButtonClick = (e) => {
  e.preventDefault();
  const studentName = document.querySelector
    ('#studentName').value;
    const studentIds = studentsArr.map((student) => student.id).sort((a, b) => a - b);
    const id = studentIds.length ? studentIds[(studentIds.length - 1)] + 1 : 1;
    const studentHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
  
  const newStudent = {
    studentName,
    studentHouse,
    id, 
  }
  console.log(studentName);
  console.log(id);
  console.log(studentHouse);
  studentsArr.push(newStudent);
  houseArray.push(newStudent);
  createStudentsCards();
}


const buttonEvents = () => {
  document.querySelector('#sortBtn').addEventListener('click', handleButtonClick);
  document.querySelector('#pleaseToggle').addEventListener('click', toggleHide);
  // document.querySelector('#toggle').addEventListener('click', handleButtonClick);

}

const init = () => {
  buttonEvents();
  // toggleHide();
  // handleButtonClick();
};


init();
