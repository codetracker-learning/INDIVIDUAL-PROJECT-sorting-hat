import printToDom from './printToDom.js'

// Prints student card
const studentMaker = (studentArr) => {
  let cardString = '';

  studentArr.forEach((item, i) => {
    cardString += `<div class="card" style="width: 18rem;" id="${i}">
                    <div class="card-body ${item.style}">
                      <h5 class="card-title text-light">${item.name}</h5>
                      <p class="card-text text-light">${item.school}</p>
                      <button type="button" class="btn btn-danger" id=${item.id}>Expel</button>
                    </div>
                  </div>`;
  });

  printToDom("#students", cardString);
}

export default studentMaker
