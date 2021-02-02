const students = [
    {
        name: 'Ryan',
        groupHouse: 'Hufflepuff',
        Age: 18,
        imgurl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    },
    {
        name: 'Andrew',
        groupHouse: 'Gryffindor',
        Age: 20,
        imgurl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    },
    {
        name: 'Kaily',
        groupHouse: 'Ravenclaw',
        Age: 21,
        imgurl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    },
    {
        name: 'Nathan',
        groupHouse: 'Slytherin',
        Age: 20,
        imgurl: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'
    } 
];

const groupHouses = [
    {
        name: 'Hufflepuff',
        imgurl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    },
    {
        name: 'Gryffindor',
        imgurl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    },
    {
        name: 'Ravenclaw',
        imgurl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
    },
    {
        name: 'Slytherin',
        imgurl: 'https://wizardingwonders.com/wp-content/uploads/harry-potter-hogwarts-house-flag-banner.jpg'
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
  
    if (btnId === "getStarted") {
        document.querySelector("#infoform").innerHTML = 
               `<div class="form-name" id=infoForm>
                    <label for="inputName">Please enter your name:</label>
                    <input type="name" class="form-control" id="inputName" aria-describedby="nameHelp"      placeholder="EnterName">
                    <button type="submit" class="btn btn-primary" id="submitBtn">Submit</button>
               </div>`
        
        document.querySelector("#submitBtn").addEventListener("click", pullForm); 
      }  
}; 
            // selecting btn id adding click event listener 

const pullForm = (e) => {
    e.preventDefault();
};
// troubleshoot

const btnEvents = () => {
    document.querySelector("#getStarted").addEventListener("click", handleBtnClick);
};

// create a function to handle all btn events 

const init = () => {
    btnEvents();
  };
  
  init();