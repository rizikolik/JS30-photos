const panels=document.querySelectorAll(".panel");

function opener(){
  this.classList.toggle('open');
  }




function activator(e){
  console.log(e.propertyName);
  if(e.propertyName.includes("flex")){  //we have to put these here. else, transitionend doesnt trigger the next event.
this.classList.toggle('open-active')};
}



panels.forEach(panel=>panel.addEventListener("click",opener));
panels.forEach(panel=>panel.addEventListener("transitionend",activator))
