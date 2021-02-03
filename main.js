console.log("connected");

const students = [];

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

const manageButtonClick = (e) => {
  const buttonId = e.target.id;

// need to add here

}

const getFormInfo = (e) => {
  e.preventDefault(); //this tells page to not refresh

  const name = document.getElementById("#student-name").value;

  const randomHouse =  Math.floor(Math.random() * studentHouse.length);
  const house = studentHouse[randomHouse];

  // const ID = terneary operator here
  
  const obj = {
    name,
    house,
    id,  //still need to finsh id
  }

  students.push(obj);
  studentBuilder(students);

  document.querySelector('#student-name').value = "";
  
  // push obj to students array(empty), then invoke StudentBuilder and pass to students array
  // print to dom
}

const buttonEvent = () => {
  // document.querySelector("form").addEventListener("click", manageButtonClick);
  document.querySelector("#sort").addEventListener("click", manageButtonClick);
  
}

const init = () => {
  buttonEvent();
  studentBuilder(students);
};

init();
