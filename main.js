const studentList =[];
const studentName = document.querySelector('#studentName');
const houses = [
  'Gryffindor', 
  'Hufflepuff', 
  'Ravenclaw', 
  'Slytherin'
];
const startBtn = document.querySelector('#startBtn');
const sortBtn = document.querySelector('#sortBtn');


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const hideForm = () => {
  document.querySelector('#studentForm').style.display = 'none';
};

const showForm = () => {
  document.getElementById('#studentForm').style.display = 'block';
};

const cardBuilder = (arr) => {
  let domString = ' ';

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${arr[i].name}</h5>
      <p class="card-text">${arr[i].house}</p>
      <a href="#" class="btn btn-danger" id=${arr[i].id}>Expel</a>
    </div>
  </div>`
  };

  printToDom('#studentList', domString);
};


const formContent = (e) => {
  e.preventDefault();
  const nameInput = studentName.value;
  const studentIds = studentList
    .map((student) => student.id)
    .sort((a, b) => a - b);

  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

  if (nameInput === ``) {
    // formAlert(); add when function is created
  } else {
    const newStudent = {
      name: nameInput,
      house: houses[Math.floor(Math.random()*houses.length)],
      id
      // id: `student${studentCounter}`, Do I want to add studentCounter???
    };

    studentList.push(newStudent);
    // studentCounter++; Do I want to add studentCounter???
    cardBuilder(studentList);
    // addDeleteEvents(); add back in when you create function
    studentName.value = '';
  };
};

const buttonClick = () => {
  document.querySelector('#startBtn').addEventListener('click', showForm);
  document.querySelector('#sortBtn').addEventListener('click', formContent);
}

const init = () => {
  buttonClick();
  cardBuilder(studentList);
}

init();
