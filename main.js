// console.log("Ravenclaw or GTFO")

// Create Array that will nest the names of students that we type in on the dom // 
const studentsArr = [];

const houseArray = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = textToPrint;
}


function toggleHide() {
  const hidesBtn = document.querySelector("#toggle");
  if (hidesBtn.style.display === "none") {
    hidesBtn.style.display = "block";
  } else {
    hidesBtn.style.display = "none";
  }
  console.log("hello")
}



const createStudentsCards = (taco) => {
  let domString = '';
  studentsArr.forEach((item, i) => {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.studentName}</h5>
    <p class="card-text">${item.house}</p>
    <a href="#" class="btn btn-primary">Expel!</a>
  </div>
</div>`
  })
  printToDom('#studentCards', domString);

}

const handleButtonClick = (e) => {
  e.preventDefault();
  const studentName = document.querySelector
  ('#studentName').value;
  const studentHouse = Math.floor(Math.random() * houseArray.length);
  const newStudent = {
    studentName,
    studentHouse,
  }

  studentsArr.push(newStudent);
  createStudentsCards();
}


const buttonEvents = () => {
  document.querySelector('#sortBtn').addEventListener('click', handleButtonClick);
  document.querySelector('#pleaseToggle').addEventListener('click', toggleHide);

}

const init = () => {
  buttonEvents();
  // toggleHide();
};


init();
