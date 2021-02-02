const students =[
];

const houses = [ 
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
]

const printToDom = (divId, string) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = string;
}

// const studentMaker = (studentArr) => {
//   let cardString = '';

//   studentArr.forEach((item, i)) {
//     cardString += `<div class="card" style="width: 18rem;" id="${i}">
//     <div class="card-body">
//       <h5 class="card-title">${studentArr[i].name}</h5>
//       <p class="card-text">${studentArr[i].school}</p>
//       <button type="button" class="btn btn-danger" id=${studentArr[i].id}>Expel</button>
//     </div>
//   </div>`;
//   };
  
//   printToDom("#students", cardString);

//   students.push()
// }

const createForm = (e) => {
  let formId = e.target.id;

  if (formId === "sort") {
    document.querySelector("#form").innerHTML=
    `<form>
      <div class="mb-3">
        <label for="exampleStudentInput" class="form-label">New Student Name</label>
        <input type="name" class="form-control" id="studentName" aria-describedby="nameInput">
        <div id="nameInput" class="form-text">Find you school!.</div>
      </div>
    </form>`
    }
  document.querySelector("#studentName").
}



const buttonEvents = () => {
  document.querySelector('#sort').addEventListener('click', createForm);
}


const init = () => {
  buttonEvents();
  // studentMaker(students);
}

init();
