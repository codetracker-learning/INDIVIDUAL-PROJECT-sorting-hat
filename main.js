let studentArray = [
  {
    firstName: "Sean",
    lastName: "Rossettie",
    school: "Hufflepuff",
  }
];

let form =`<form>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
</form>`;

const printToDom = (divId, studentString) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = studentString;
}

const studentMaker = (studentArr) => {
  let cardString = '';

  for (let [i, element] of studentArr.entries()) {
    cardString += `<div class="card" style="width: 18rem;" id="${i}">
    <div class="card-body">
      <h5 class="card-title">${element.firstName} ${element.lastName}</h5>
      <p class="card-text">${element.school}</p>
      <button type="button" class="btn btn-danger">Expel</button>
    </div>
  </div>`;
  };
  
  printToDom("#students", cardString);
}

const printForm = (divId, formToPrint) => {
  const formField = document.querySelector(divId);
  formField.innerHTML = formToPrint;
  
}


const buttonEvents = () => {
  document.querySelector('#sort').addEventListener('click', printForm);
}


const init = () => {
  printForm("#form", form);
  studentMaker(studentArray);
}

init();
