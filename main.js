const houses = [{
        houseName: 'Gryffindor',
        houseColors: ['#7F0909', '#FFC500'],
    },
    {
        houseName: 'Hufflepuff',
        houseColors: ['#EEE117', '#000000'],
    },
    {
        houseName: 'Ravenclaw',
        houseColors: ['#000A90', '#946B2D'],
    },
    {
        houseName: 'Slytherin',
        houseColors: ['#0D6217', '#AAAAAA'],
    },
    {
        houseName: 'Voldemort',
        houseColors: ['#4D5C3C', '#294234'],
    },
];

const studentArray = [];
const lordVodemortArmy = [];
let studentIDCount = 1000;
const sortedNamesID = '#sortedNames';
const expelledNamesID = '#expelledNames';
let sortStudentsBy = '';


// Print output to DOM = Document Object Model
// divID = targeted ID to print to 
// textToPrint = the text we want to output to the specified ID
const PrintToDom = (divID, textToPrint) => {
    const selectedDiv = document.querySelector(divID);
    selectedDiv.innerHTML = textToPrint;
}

const ClearStudentName = () => {
    document.querySelector('#new-student-name').value = '';
}

const PrintStudentForm = () => {
    let studentForm = `<div class="row mt-3 text-center">
                                <legend>Enter First Year's Name</legend>           
                                <div class="col-auto">
                                    <label for="lblStudent" class="col-form-label">Student</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="new-student-name" class="form-control" placeholder="Please enter name" required>
                                </div>
                                <div class="col-auto" >
                                    <button type="submit" class="btn btn-primary btn-lg" id="btnSort">Sort Student into a House</button>
                                </div>
                            </div> `;
    PrintToDom('#studentForm', studentForm);
}

const FirstYearStudent = (student) => {

    return `<div class="card my-2" style="width: 20rem;" id=${student.studentID}> 
            <div class="row g-0">
              <div class="col-md-2" style="background-color:${student.houseColors[0]};"  >
              </div>
              <div class="col-md-2" style="background-color:${student.houseColors[1]};" >
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${student.studentName}</h5>
                  <p class="card-text">${student.houseName}</p>
                  <button type="button" class="btn btn-danger" id="${student.studentID}">Expel</button>
                </div>
              </div>
            </div>
        </div> `;
}

const VoldemortStudent = (student) => {

    return `<div class="card my-2" style="width: 20rem;" id=${student.studentID}> 
            <div class="row g-0">
              <div class="col-md-2" style="background-color:${student.houseColors[0]};"  >
              </div>
              <div class="col-md-2" style="background-color:${student.houseColors[1]};" >
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text">Sadly, ${student.studentName} went over to the dark side!</p>
                </div>
              </div>
            </div>
        </div> `;
}

const BuildStudentCard = (studentsArr, divID) => {
    let domString = '';

    studentsArr.forEach((student) => {

        if (divID === sortedNamesID) {
            domString += `${FirstYearStudent(student)}`;
        } else if (divID === expelledNamesID) {
            domString += `${VoldemortStudent(student)}`;
        }
    })

    PrintToDom(divID, domString);
}

const GetFirstYearsInfo = (e) => {
    e.preventDefault();
    const studentName = document.querySelector('#new-student-name').value.trim();
    let studentID = 0;
    const houseName = houses[Math.floor(Math.random() * (houses.length - 1))].houseName;
    const houseColors = [];

    if (studentName !== "") {
        studentID = studentIDCount++;

        switch (houseName) {
            case houses[0].houseName:
                houseColors.push(houses[0].houseColors[0]);
                houseColors.push(houses[0].houseColors[1]);
                break;
            case houses[1].houseName:
                houseColors.push(houses[1].houseColors[0]);
                houseColors.push(houses[1].houseColors[1]);
                break;
            case houses[2].houseName:
                houseColors.push(houses[2].houseColors[0]);
                houseColors.push(houses[2].houseColors[1]);
                break;
            case houses[3].houseName:
                houseColors.push(houses[3].houseColors[0]);
                houseColors.push(houses[3].houseColors[1]);
                break;
            default:
                houseColors.push('#DE3163');
                houseColors.push('#CCCCFF');
                break;
        }

        const obj = {
            studentID,
            studentName,
            houseName,
            houseColors,
        }

        studentArray.push(obj);
    }

    FilterStudentsBy();
    BuildStudentCard(studentArray, sortedNamesID);
    ClearStudentName();
}

const expelStudent = (e) => {
    const tartgetType = e.target.type;
    const targetIDNum = parseInt(e.target.id, 10);
    let expelStudentID = 0;

    //JID OJO this is targetting the item selected byt the ID 
    if (tartgetType === 'button') {
        expelStudentID = studentArray.findIndex((student) => student.studentID === targetIDNum);
        let tempStudent = studentArray.splice(expelStudentID, 1);
        lordVodemortArmy.push(...tempStudent);
        lordVodemortArmy[lordVodemortArmy.length - 1].houseName = houses[4].houseName;
        lordVodemortArmy[lordVodemortArmy.length - 1].houseColors[0] = houses[4].houseColors[0];
        lordVodemortArmy[lordVodemortArmy.length - 1].houseColors[1] = houses[4].houseColors[1];
    }

    if (lordVodemortArmy.length > 0) {
        PrintToDom('#no-death-eaters', "");
    }

    BuildStudentCard(studentArray, sortedNamesID);
    BuildStudentCard(lordVodemortArmy, expelledNamesID);
}

const FilterStudentsBy = () => {
    let sortStudentBy = document.querySelector('#studentSortedBy').value;
    let studentAscendDecend = document.querySelector('#studentAscendDecend').value;

    if (sortStudentBy === "srtByID") {
        if (studentAscendDecend === "srtAscending") {
            studentArray.sort((a, b) => (a.studentID < b.studentID ? -1 : 1));
        } else {
            studentArray.sort((a, b) => (a.studentID > b.studentID ? -1 : 1));
        }
    } else if (sortStudentBy === "srtByStudentName") {
        if (studentAscendDecend === "srtAscending") {
            studentArray.sort((a, b) => (a.studentName.toUpperCase() < b.studentName.toUpperCase() ? -1 : 1));
        } else {
            studentArray.sort((a, b) => (a.studentName.toUpperCase() > b.studentName.toUpperCase() ? -1 : 1));
        }
    } else if (sortStudentBy === "srtByHouse") {
        if (studentAscendDecend === "srtAscending") {
            studentArray.sort((a, b) => (a.houseName.toUpperCase() < b.houseName.toUpperCase() ? -1 : 1));
        } else {
            studentArray.sort((a, b) => (a.houseName.toUpperCase() > b.houseName.toUpperCase() ? -1 : 1));
        }
    }
}

const ButtonEvents = () => {
    document.querySelector('#btnStartSorting').addEventListener('click', PrintStudentForm);
    document.querySelector(sortedNamesID).addEventListener('click', expelStudent);
    document.querySelector('form').addEventListener('submit', GetFirstYearsInfo);
    document.querySelector('#btnSortStudentBy').addEventListener('click', GetFirstYearsInfo);
    document.querySelector('#btnAscendingDescending').addEventListener('click', GetFirstYearsInfo);
}

const init = () => {
    ButtonEvents();
}

init();

// END