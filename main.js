const randomHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
const studentInTheHouse = [];
const expelledArmy = [];


//Render to DOM function
const renderToDom = (divId, textToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToRender;
};

const introCard = () => {
    const domString = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">Welcome to Hoggy Warts</h2>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary" id="startbtn">Lets Go Sort</a>
    </div>
  </div>`;

    renderToDom("#card", domString)
};


const studentForm = () => {
    const allForm = document.querySelector('#form');
    allForm.innerHTML = `
      <form>
  <label for="name" class="form-label">Student Name</label>
  <input type="name" class="form-control" id="name" placeholder="Enter here the student name">
    </div>
       <button id="sortbutton" type="submit">Sumbit</button>
    </form>`;
    document.querySelector("form").addEventListener("submit", sortButton);
};

const enterStudent = (event) => {
    event.preventDefault();
    const targetType = event.target.type;
    const targetId = event.target.id;
    if (targetId === "startbtn") {
        studentForm();
    };
};
const studentHouseBuilder = (studentArray) => {
    let domString = ""
    studentArray.forEach((student) => {
        domString += `
            <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text">${student.house}</p>
                <button id = "Submit" type="submit">Expel</button>
            </div>
            </div>
            `;
    });
    renderToDom("#studentHouse", domString)
};


const sortButton = (event) => {

    const randomHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    const availabeHouse = randomHouses[Math.floor(Math.random() * randomHouses.length)]
    const object = {
        name: document.querySelector('#name').value,
        house: availabeHouse
    }
    studentInTheHouse.push(object);
    studentHouseBuilder(studentInTheHouse);
};



const buttonEvent = () => {
    document.querySelector("#card").addEventListener("click", enterStudent);
    
};


const init = () => {
    introCard();
    //studentForm();
    buttonEvent();

};

init();