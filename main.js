console.log("connected");

// const students = [];
// figure out how to build student card

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
  arr.forEach(element => {
   domString += `<div class="card-container d-flex p-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment </h5>
              <a href="#" class="btn btn-primary">EXPEL</a>
            </div>
          </div>
    </div>`
  });
  
}

const showForm = () => {
  document.getElementById("formElement").style.display ="block";
}

const getFormInfo = (e) => {
  
  e.preventDefault();
  //this tells page to not refresh


  const name = document.getElementById("#student-name").value;
  //check that student-name is correct

  const obj = {
    name,
    house,
    id

  }
}

const buttonEvents = () => {
  document.getElementById("form").type
  
}


const init = () => {
  buttonEvents();
  // studentbuilder here
};

init();
