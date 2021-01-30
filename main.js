
const students = [
  {
    name: 'Neville',
    id: 23,
    house: ''
  },
  {
    name: 'Harry',
    id: 19,
    house: ''
  },
  {
    name: 'Ron',
    id: 35,
    house: ''
  },
];

const printToDom = (divId, printedString) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerhtml = printedString;
};
// Function to choose a random house
const ranHouse = () => {
  const ranNum = (Math.floor(Math.random() * 4) + 1);
  let house = '';

  switch(ranNum) {
    case 1:
      house = 'Slytherin';
      break;
    case 2:
      house = 'Gryffindor';
      break;
    case 3:
      house = 'Hufflepuff';
      break;
    case 4:
      house = 'Ravenclaw';
      break;
  }
  return house;
};
