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
                                <div class="col-auto alert" >
                                    <button type="submit" class="btn btn-primary btn-lg" id="btnSort">Sort</button>
                                </div>
                            </div> `;

    PrintToDom('#studentForm', studentForm);
}

const BuildStudentCard = (studentsArr, divID) => {
    let domString = '';

    studentsArr.forEach((item) => {
        domString += `<div class="card my-2" style="width: 20rem;" id=${item.studentID}> 
                          <div class="row g-0">
                            <div class="col-md-2" style="background-color:${item.houseColors[0]};"  >
                            </div>
                            <div class="col-md-2" style="background-color:${item.houseColors[1]};" >
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">${item.studentName}</h5>
                                <p class="card-text">${item.houseName}</p>
                                <button type="button" class="btn btn-danger" id="${item.studentID}">Expel</button>
                              </div>
                            </div>
                          </div>
                      </div>`;
    })

    PrintToDom(divID, domString);
}

const GetFirstYearsInfo = (e) => {
    e.preventDefault();
    const studentID = studentIDCount++;
    const studentName = document.querySelector('#new-student-name').value;
    const houseName = houses[Math.floor(Math.random() * (houses.length - 1))].houseName;
    const houseColors = [];

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
    BuildStudentCard(studentArray, '#sortedNames');
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
        console.log(lordVodemortArmy[lordVodemortArmy.length - 1]);
    }
    BuildStudentCard(studentArray, '#sortedNames');
    BuildStudentCard(lordVodemortArmy, '#expelledNames');
}

const ButtonEvents = () => {
    document.querySelector('#btnStartSorting').addEventListener('click', PrintStudentForm);
    document.querySelector('#sortedNames').addEventListener('click', expelStudent);
    document.querySelector('form').addEventListener('submit', GetFirstYearsInfo);
}

const init = () => {
    ButtonEvents();
}

init();

// END