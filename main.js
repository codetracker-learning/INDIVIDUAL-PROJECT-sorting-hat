const students = [
  {
    name: "Brandon Woods",
    house: "Ravenclaw",
  },
  {
    name: "Troy Kee",
    house: "Griffindor",
  },
  {
    name: "Nelson Velez",
    house: "Hufflepuff",
  },
  {
    name: "Lily Hanson",
    house: "Gryffindor",
  },
  {
    name: "Becky Dickovitch",
    house: "Ravenclaw",
  },
  {
    name: "Bridgette Beatty",
    house: "Gryffindor",
  },
  {
    name: "Whittney Steinhart",
    house: "Slytherin",
  }
];


const printToDom = (students, textToPrint) => {
  const selectedDiv = document.querySelector(students);
  selectedDiv.innerHTML = textToPrint;
}



const handleStartButtonClick = (e) => {
  hogwartsForm(students);

}

const hogwartsForm = (students) => {
  let domString = '';
  domString = `<form action="/action_page.php">
                  <div class="form-group">
                    <label for="email">Enter First Year's Name</label>
                    <input type="email" class="form-control" id="email">
                  </div>
                  <button type="submit" class="btn btn-light">Your House</button>
                </form>`
                let i = 0
              while ( i < students.length ) {
    domString += `<div class="card my-2" style="width: 25rem;" id=${i}>
                    <div class="card-body">
                      <p class="card-text">${students[i].name}</p>
                      <p class="card-text">${students[i].house}</p>
                    </div>
                  </div>`;
                  i++
}


  printToDom('#students', domString);
}


const startButtonEvents = () => {
  document.querySelector('#start').addEventListener('click', handleStartButtonClick);
}


const init = () => {
  startButtonEvents();// establishes what happens when the start button is clicked
 
}

init();
