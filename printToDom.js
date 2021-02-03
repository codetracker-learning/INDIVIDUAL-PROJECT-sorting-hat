//Prints to DOM
const printToDom = (divId, string) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = string;
}

export default printToDom
