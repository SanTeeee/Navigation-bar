const hamburger= document.querySelector("nav");
const ul= document.querySelector("ul");
const showPopUp = document.querySelector("#clickForLogin");

showPopUp.addEventListener("click", function(){
    document.querySelector(".centerLogin").classList.toggle("pop");
});
function toggler(){
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");
   
}

hamburger.addEventListener("click", toggler);
ul.addEventListener("click", toggler);

