const newStudents = [{
    id: `${i}`,
    name: "Harry Potter",
    house: "Griffyndor",
},];

const deathEaters = [{},];

const renderToDom = (containerId, textToRender) => {
    const selectedContainer = document.querySelector (containerId);
    selectedContainer.innerHTML = textToRender;
};

const button = () => {
    document.querySelector(`body`);
}

const buttonControl = (event) => {
 if (target.event.id === "form button") {
     let domString += `<form></form>`
     renderToDom("#sortingHat", domString);
 }

 if (target.event.id === "sort button") {
    let domString += `<form></form>`
    renderToDom("#sortingHat", domString);
}
};

const init = () => {
    button();
    buttonControl();
}