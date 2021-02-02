console.log("CONNECTED");

const students = [
];

const voldermortsArmy = [];
const houseColors = {
  Gryffindoor: "rgba(127, 9, 9, 0.42);",
  Snakes: "rgba(13, 98, 23, .42)",
  Hufflepuffle: "rgba(238, 225, 23, .42)",
  Ravenclaw: "rgba(0, 10, 144, .42)",
};
const houseCrest = {
  Gryffindoor: "https://media2.giphy.com/media/GvMo19TyWuMiQ/giphy.gif",
  Snakes: "https://media0.giphy.com/media/KzvN3LrGoLtPG/giphy.gif",
  Hufflepuffle: "https://media2.giphy.com/media/PMp40oEvNfKve/giphy.gif",
  Ravenclaw: "https://media1.tenor.com/images/e868ee9543921490391f917a3d70604f/tenor.gif?itemid=5254360"
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

function showForm() {
  document.getElementById("myForm").style.display = "block";
}; // sets the myForm div display type to block upon clicking the Get Started button.

// DOESNT WORK
// const showForm = () => {
//   const content = `<div class="mb-3 justify-content-center">
//         <div class="form-body text-center">
//           <h3>
//             Speak Thy First and Last Name
//           </h3>

//           <div class="d-flex col-md-6 offset-md-3">
//             <label for="studentName" class="form-label">Student's Name:</label>
//             <input type="text" class="form-control mx-3 mb-2" id="studentName" placeholder="David Copperfield" required>
//             <button type="submit" class="btn btn-primary mb-2" id="sort">SORT ME</button>
//           </div>
//           <div id="error-message"> </div>
//         </div>
//       </div>`;
//     printToDom("#myForm", content);
// };

const sortingHat = () => {
  const houses = ["Gryffindoor", "Snakes", "Hufflepuffle", "Ravenclaw"]; //define the houses to sort between
  let sortingHat = houses[Math.floor(Math.random() * houses.length)]; //define what we will return. Example: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array 
  if (sortingHat === "Hufflepuffle") {
    document.querySelector('#excellent').src += "?autoplay=1";
    return sortingHat;
  } else {
    document.querySelector('#excellent').src= "https://www.youtube.com/embed/7mi4h00fedY";
    return sortingHat;
  };

};


//C in CRUD: Create New Students
// Takes the name put into the student submission form and pushes it into the array.
const addStudentToHouse = (e) => {
  e.preventDefault();
  let domString = '';
  if (e.target.id === "sort") { //If the target of an event is the button id 'sort' set the constant student = to the query on studentName
    const student = document.querySelector("#studentName");
    errorMessage(student.value);

    if (student.value) { //If the value of student returns true then push the name and schoolHouse into the array.
      students.push({
        name: student.value,
        schoolHouse: sortingHat()
      });
      student.value = ""; //student.value must = a string value. 
    }
    let sortedArray = sortStudentsByHouse(students);
    studentBuilder(sortedArray); //run studentBuilder function to generate the card for the newly added student in the array. AKA - Rebiuld the DOM.
  }

  document.querySelector('form').reset();
  //Reset the form after the button is clicked
};

//Return the sorted results of an array. First look at a and b to compare and sort based on schoolHouse property. I believe because it is comparing string values it returns them alphabetically. Next, if the schoolHouse properties are the same, sort by the name property. More Info: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/ 
const sortStudentsByHouse = (array) => {
  return array.sort((a, b) => (a.schoolHouse > b.schoolHouse) ? 1 : (a.schoolHouse === b.schoolHouse) ? ((a.name > b.name) ? 1 : -1) : -1)
}

// //Creates a pie container card on the DOM
const studentBuilder = (taco) => {
  let domString = '';
  // FOR OF LOOP - This works!
  for (const [i, item] of taco.entries()) {
    const { name, schoolHouse } = item;
    domString += `<div class="card m-1" style="width: 18rem; background-color:rgba(26, 21, 2, 0.357); border: 4px groove; border-color: rgb(240, 223, 154); pb-4" id=${i}>
        <div class="col" style=" border-bottom: 4px groove; border-color: rgb(240, 223, 154); min-height: 60px; background-color: ${houseColors[schoolHouse]}">
    </div>
    <img class="card-img-top" ;  src=${houseCrest[schoolHouse]} >
    <div class="card-body">
      <p style ="color:  rgb(240, 223, 154)" class="card-text" id="studentName">${name}</p>
      <p style ="color:  rgb(240, 223, 154)" class="card-text"id="schoolHouse">${schoolHouse}</p>
      <button type="button" id="${i}" class="btn btn-danger">EXPEL</button>
    </div>
  </div>`;
  }
  printToDom("#first-years-card-display", domString);
};

const evilBuilder = (taco) => {
  let domString = '';
  // FOR OF LOOP - This works!
  for (const [i, item] of taco.entries()) {
    const { name } = item;
    if (divId = "voldermorts-army") {
      domString += `<div class="card" style="width: 15rem; background-color: rgba(26, 21, 2, 0.357); border: 4px groove; border-color: rgb(240, 223, 154);" id=${i}>
      <img class="card-img-top" src="https://cdn.images.express.co.uk/img/dynamic/36/590x/harry-potter-theory-voldemort-horcrux-1200870.jpg?r=1573053077046">
            <p style="color: rgb(240, 223, 154)" class="card-text">Oh No!, I always knew <b>${name}</b> had some evil in their veins!</p>
        </div>
    </div>`;
    };
    printToDom("#voldermorts-army", domString);
  };
};

//OTHER OPTIONS!!

// FOR EACH LOOP - This works!
// taco.forEach((item, i) => {
//   domString += `<div class="card" style="width: 18rem;" id=${i}>
//   <div class="card-body">
//     <p class="card-text" id="studentName">${taco[i].name}</p>
//     <p class="card-text"id="schoolHouse">${taco[i].schoolHouse}</p>
//     <button type="button" id="${i}" class="btn btn-danger">EXPEL</button>
//   </div>
// </div>`;
// });
// printToDom('#first-years-card-display', domString);
// };

//FOR LOOP ISNT ALLOWED IN THIS ASSIGNMENT. This Generates
//   for (let i = 0; i < taco.length; i++) {
//     domString += `<div class="card" style="width: 18rem;" id=${i}>
//                     <div class="card-body">
//                       <p class="card-text" id="studentName">${taco[i].name}</p>
//                       <p class="card-text"id="schoolHouse">${taco[i].schoolHouse}</p>
//                       <button type="button" id="${i}" class="btn btn-danger">EXPEL</button>
//                     </div>
//                   </div>`;
//   };
//   printToDom('#first-years-card-display', domString);
// };

const errorMessage = (student) => {
  if (student) {  //If student has a value when passed to the function set the div's innerHTML to nothing.
    document.querySelector("#error-message").innerHTML = "";
  } else { //If student returns false when passed set div's innerHTML = to the syled div we setup on the HTML page.
    document.querySelector("#error-message").innerHTML =
      `<div style="color: red;margin-bottom: 10px;">
        <b>Don't be shy! Say your name.</b>
      </div>`;
  }
};



const buttonEvents = () => {
  document.querySelector("#get-started").addEventListener("click", showForm);
  document.querySelector("#sort").addEventListener("click", addStudentToHouse);
  document.querySelector('#first-years-card-display').addEventListener("click", expelStudent);
  document.querySelector('#get-started').addEventListener('click', startMusic)
  document.querySelector('#first-years-card-display').addEventListener("click", startDramatic);
  document.querySelector("#sort").addEventListener("click", resetDramatic);
  // document.querySelector("#sort").addEventListener("click", excellentSound);

};


const startMusic = (e) => {
  document.querySelector("#background-music").src += "?autoplay=1";

  var player = new Dailymotion.Player('#background-music', {
    videoId: 'x3ulbtq',
    events: {
      'onReady': function (event) {
        event.target.setVolume(.05);
        event.target.playVideo();
      }
    }
  });
}

function startDramatic() {
  document.querySelector('#dramatic').src += "?autoplay=1";
};

function resetDramatic() {
  document.querySelector('#dramatic').src = "https://www.dailymotion.com/embed/video/xovk9r";
};

// function excellentSound () {
//   if (sortingHat() == "Hufflepuffle") {
//     document.querySelector('#excellent').src += "?autoplay=1";
//   } else {
//     document.querySelector('#excellent').src += "https://www.youtube.com/embed/7mi4h00fedY";
//   };
// };

// // document.querySelector("#dramatic").src += "?autoplay=1";

// // var player = new Dailymotion.Player('#dramatic', {
// //     videoId: 'xovk9r',
// //     events: {
// //       'onReady': function (event) {
// //         event.target.setVolume(.05);
// //         event.target.playVideo();
//       }
//     }
//   });
// }



const expelStudent = (e) => {
  if (e.target.type === 'button') {
    voldermortsArmy.push(students[e.target.id])
    students.splice(e.target.id, 1)
    studentBuilder(students);
    evilBuilder(voldermortsArmy);
  }
}



const init = () => {
  studentBuilder(students);
  buttonEvents();
  console.log(students);
  console.log(voldermortsArmy);
};

init();
