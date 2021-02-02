console.log('Connected Sorting Hats');
debugger;

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
        houseColors: ['#0D6217', 'AAAAAA'],
    }
];

// const StudentArray = [{
//     studentID: 0,
//     studentName: 'J',
//     houseName: 'I',
// }];


const StudentArray = [];

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
                                    <input type="text" id="new-student-name" class="form-control">
                                </div>
                                <div class="col-auto">
                                    <a type="submit" class="btn btn-primary btn-lg" id="btnSort">Sort</a>
                                </div>
                            </div> `;

    PrintToDom('#studentForm', studentForm);
}

const BuildStudentCard = (StudentsArr) => {
    let domString = '';
    let leftCardColor = '';
    let rightCardColor = '';
    // StudentsArr.forEach(item => {


    StudentsArr.forEach((item, i) => {

        switch (item.houseName) {
            case houses[0].houseName:
                leftCardColor = houses[0].houseColors[0];
                rightCardColor = houses[0].houseColors[1];
                break;
            case houses[1].houseName:
                leftCardColor = houses[1].houseColors[0];
                rightCardColor = houses[1].houseColors[1];
                break;
            case houses[2].houseName:
                leftCardColor = houses[2].houseColors[0];
                rightCardColor = houses[2].houseColors[1];
                break;
            case houses[3].houseName:
                leftCardColor = houses[3].houseColors[0];
                rightCardColor = houses[3].houseColors[1];
                break;
        }

        domString += `<div class="card my-2" style="width: 18rem;" id=${item.studentID}  >
                       
                        <div class="card-body"   >
                          <p class="card-text">${item.studentName}</p>
                          <p class="card-text">${item.houseName}</p>
                          <button type="button" class="btn btn-danger" id="${item.studentID}">Expel</button>
                        </div>
                      </div>`;
    })

    PrintToDom('#sortedNames', domString);

}

const GetFirstYearsInfo = (e) => {
    e.preventDefault();
    const studentID = studentIDCount++;
    const studentName = document.querySelector('#new-student-name').value;
    const houseName = houses[Math.floor(Math.random() * houses.length)].houseName;
    const obj = {
        studentID,
        studentName,
        houseName,
    }
    StudentArray.push(obj);
    BuildStudentCard(StudentArray);

    ClearStudentName();
    document.querySelector('form').reset();

}

const HandleButtonClick = (e) => {
    const buttonID = e.target.id;

}


const expelStudent = (e) => {

    const tartgetType = e.target.type;
    const targetID = e.target.id;
    const targetIDNum = parseInt(e.target.id, 10);
    let expelStudentID = 0;

    if (tartgetType === 'button') {
        expelStudentID = StudentArray.findIndex((student) => student.studentID === targetIDNum);
        StudentArray.splice(expelStudentID, 1);
    }
    BuildStudentCard(StudentArray);

}

const ButtonEvents = () => {
    document.querySelector('#btnStartSorting').addEventListener('click', PrintStudentForm);
    document.querySelector('#sortedNames').addEventListener('click', expelStudent);
    document.querySelector('form').addEventListener('submit', GetFirstYearsInfo);
    // document.querySelector('form').addEventListener('submit', GetFirstYearsInfo);
}

const init = () => {
    ButtonEvents();
    // BuildStudentCard(StudentArray);
}

init();

// END