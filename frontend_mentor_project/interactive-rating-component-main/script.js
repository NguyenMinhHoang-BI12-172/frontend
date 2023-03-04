const submitButton = document.querySelector(".submit__button");
const btns= document.querySelectorAll('[role="button"]');
const ratingDisplay = document.querySelector(".rating__display");
btns.forEach((btn)=>{
  btn.addEventListener('click', (e) => {
    let selectedBtn = e.currentTarget;
    for(let i = 0; i<btns.length; i++){
      if(btns[i].getAttribute('aria-selected')=='true'){
        btns[i].setAttribute('aria-selected', false);
        console.log(btns[i]);
        selectedBtn.setAttribute('aria-selected', true);
        ratingDisplay.textContent=selectedBtn.id;

      }
      else {
        selectedBtn.setAttribute('aria-selected', true);
        ratingDisplay.textContent=selectedBtn.id;
      }
    }
  })
})

submitButton.onclick = function() {thankState()};

function thankState(){
  document.querySelector(".state__1").style.display = "none";
  document.querySelector(".state__2").style.display = "grid";

}

