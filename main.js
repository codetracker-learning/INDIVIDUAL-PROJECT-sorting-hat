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

const renderForm = (content, form) => {
    const selectedForm = document.querySelector(form);
    selectedForm.innerHTML = content;
  };

const appearForm = () => {
    const content = `<form id="infoForm">
                        <div class="form-name">
                        <label for="inputName">Please enter your name:</label>
                        <input type="name" class="form-control" id="inputName" aria-describedby="nameHelp"      placeholder="EnterName">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>`

renderForm('#infoForm', content); 
};

const handlebtnClick = (e) => {
    const btnId = e.target.id;
  
   
    if (btnId === 'getStarted') {
      document.querySelector('form').style.display;
    } else {
        console.log("Please click get started");
    }
}

const btnEvents = () => {
    document.querySelector("form").addEventListener("getStarted", renderForm);
}

const init = () => {
    btnEvents();
  }
  
  init();