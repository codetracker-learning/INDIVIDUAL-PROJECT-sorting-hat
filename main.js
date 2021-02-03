const students = [
    {
        name: 'Ryan',
        groupHouse: 'Hufflepuff',
        Age: 18,
        imgUrl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    },
    {
        name: 'Andrew',
        groupHouse: 'Gryffindor',
        Age: 20,
        imgUrl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    },
    {
        name: 'Kaily',
        groupHouse: 'Ravenclaw',
        Age: 21,
        imgUrl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    },
    {
        name: 'Nathan',
        groupHouse: 'Slytherin',
        Age: 20,
        imgUrl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    } 
];

const groupHouses = [
    {
        name: 'Hufflepuff',
        imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    },
    {
        name: 'Gryffindor',
        imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    },
    {
        name: 'Ravenclaw',
        imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    },
    {
        name: 'Slytherin',
        imgUrl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    } 
];
// A function to select the inerr html (form, id)
const renderForm = (divId, textToDom) => {
    const selectedForm = document.querySelector(divId);
    selectedForm.innerHTML = textToDom;
};
// A function to handle the "get started" btn click to target the form html
const handleBtnClick = (e) => {
    const btnId = e.target.id;
    if(btnId === "getStarted") {
        document.getElementById("infoForm").style.visibility = "visible"
    }

  
          // selecting btn id adding click event listener 
};
const pullForm = (e) => {
    e.preventDefault();
};
// troubleshoot

const btnEvents = () => {
    document.querySelector("#getStarted").addEventListener("click", handleBtnClick);
    // document.querySelector("#submitBtn").addEventListener("click", pullForm);
};

// create a function to handle all btn events 

const init = () => {
    btnEvents();
  };
  
  init();