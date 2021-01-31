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
    house: 'Griffindor'
  },
  {
    id: 2,
    name: 'Hermione Granger',
    house: 'Griffindor'
  },
  {
    id: 3,
    name: 'Nymphadora Tonks',
    house: 'Hufflepuff'
  },
  {
    id: 4,
    name: 'Luna Lovegood',
    house: 'Ravenclaw'
  },
  {
    id: 5,
    name: 'Grahm Pitchard',
    house: 'Slytherin'
  },

]


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const studentBuilder = (taco) => {
  let showOnDom = '';
  taco.forEach((item, i) => {
    showOnDom += `<div class="card ${item.house}" style="width: 18rem;" id=${i}>
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
  studentBuilder(students);
  document.querySelector('form').reset();
  // reset method restores a form element's default value.
}


// Expelling student and push it into a different array.
const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  const expelledStudent = [];
  if (targetType === 'button') {
    expelledStudent.push(students.splice(targetId, 1));
  }
  // console.log(expelledStudent); confirmed it is giving me back the array.
  studentBuilder(students);
}


const handleButtonClick = (e) => {
  const buttonId = e.target.id;
  //If I console log buttonId, it gives me the object in the array
  
  if (buttonId === 'showForm') {
    document.querySelector('#hideForm').style.display = 'block';
  }
}

const buttonEvents = () => {
  document.querySelector('#showForm').addEventListener('click', handleButtonClick);
  document.querySelector('form').addEventListener('submit', getStudentInfo);
  document.querySelector('#studentCard').addEventListener('click', expelStudent)
}

const init = () => {
  buttonEvents();
  studentBuilder(students);
}


init();
