window.addEventListener('keydown', e => {
    if (e.key == " " ){
        plusOne.innerText++;
    }
})
var button = document.querySelector("button");
  button.addEventListener("click", function() {
    plusOne.innerText++;
  });