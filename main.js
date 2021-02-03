console.log("connected");

const students = [];
// figure out how to build student card

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
  let domString = "";
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

const manageButtonClick = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "sort") {
    document.querySelector.

    printToDom(studentBuilder);

  }
}

const getFormInfo = (e) => {
  
  e.preventDefault();
  //this tells page to not refresh

  const name = document.getElementById("#student-name").value;


  const obj = {
    name,
    house,
    id

  }
}

const buttonEvents = () => {
  document.querySelector("form").addEventListener("click", manageButtonClick)
  
}


const init = () => {
  buttonEvents();
  // studentbuilder here
};

init();
