const students = [
  {
    name: 'Ellie',
    house: 'Hufflepuff',
  },
  {
    name: 'Holly',
    house: 'Hufflepuff',
  },
  {
    name: 'Sara',
    house: 'Hufflepuff',
  },
  {
    name: 'Dani',
    house: 'Hufflepuff',
  },
  {
    name: 'Taylor',
    house: 'Hufflepuff',
  },
]

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const cardBuilder = (e) => {
  let domString = ' ';

  e.forEach((item, i) => {
    domString += `<div class="card" style="width: 18rem;" id=${i}>
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.house}</p>
      <a href="#" class="btn btn-danger>Expel</a>
    </div>
  </div>`
  });


  printToDom('#students', domString);
}

const formContent = (e) => {
  e.preventDefault ();

  const name = document.querySelector('#name').Value;

  const obj = {
    name,
  }

  students.push(obj);

  cardBuilder(students);

  document.querySelector('form').reset();
}

const expelStudent = (e) => {
  // write a formula to remove student card from student record
}

const buttonClick = () => {
  document.querySelector('#start-btn').addEventListener('click', 'function');
  document.querySelector('#sort-btn').addEventListener('click', 'function');
}

const init = () => {
  buttonClick();
  cardBuilder(students);
}

init();
