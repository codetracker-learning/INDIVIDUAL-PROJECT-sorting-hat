
const introCard = () => {
    const cardOne = document.querySelector('#card');
    cardOne.innerHTML =`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">Welcome to Hoggy Warts</h2>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary" id = "startbtn">Lets Go Sort</a>
    </div>
  </div>`;
};
/*
const buttonClick = (event) => {
if (event.target.id === "startbtn");
//call the form function 
}
*/
const studentForm = () => {
    const allForm = document.querySelector('#form');
    allForm.innerHTML=`

    <div id="inputform"> 
      <form>
  <label for="exampleFormControlInput1" class="form-label">Student Name</label>
  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter here the student name">
    </div>
       <button id = "sortbutton" type="submit">Sort</button>
    </form>`;
};
/*

const buttonEvents = () => {
    cardOne.addEventlistener('click' , buttonClick)
}
*/

const init = () => {
    introCard();
    studentForm();
};

init();