console.log('hello');

const randomHouse = ['griffindor', 'Hufflepuff', 'Ravenclaw', 'Sletherin'];

const students = [
  {
    id: 0,
    name: 'Winky Abbott',
    house: 'Hufflepuff'
  },
  {
    id: 1,
    name: 'Harry Potter',
    house: 'Gryffindor'
  },
]


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const studentBuilder = (taco) => {
  let showOnDom = '';
  taco.forEach((item, i) => {
    showOnDom += `<div class="card" style="width: 18rem;" id=${i}>
                    <div class="card-body text-center">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.house}</p>
                      <button type="button" class="btn btn-danger" id=${i}>Expel</button>
                    </div>
                  </div>`
  })
  printToDom('#studentCard', showOnDom);
}

const getStudentInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#studentName').value;
  const house = randomHouse[Math.floor(Math.random() * randomHouse.length)];
  const id = Math.floor(Math.random() * 1000);
  const obj = {
    name,
    house,
    id,
  }
  students.push(obj);
  console.log(students);
  studentBuilder(students);
  document.querySelector('form').reset();
  
}



const handleButtonClick = (e) => {
  const buttonId = e.target.id;
  
  if (buttonId === 'showForm') {
    document.querySelector('#hideForm').style.display = 'block';
  }
}

const buttonEvents = () => {
  document.querySelector('#showForm').addEventListener('click', handleButtonClick);
  document.querySelector('form').addEventListener('submit', getStudentInfo);
}

const init = () => {
  buttonEvents();
  studentBuilder(students);
}

init();
