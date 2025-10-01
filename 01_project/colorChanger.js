const bt = document.querySelectorAll(".button");
const bd = document.querySelector("body");
bt.forEach(function (buttonElement) {
    //console.log(buttonElement);
    buttonElement.addEventListener("click",function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
            bd.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            bd.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            bd.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            bd.style.backgroundColor = e.target.id;
        }
    });
});
/*
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
    }
  });
});
*/
