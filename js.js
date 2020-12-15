(function(){if(document.getElementById("button")){alert("Your browser does not support JavaScript.")}})()
let content = false
function makePage() {
  if (content) {
    location.reload()
  } else {
    document.getElementById("main").innerHTML = "You clicked the button. You found the bottom of the page. *fart noises* oh, you farted."
    document.getElementById("title").innerHTML = "ree"
    document.getElementById("button").innerHTML = "Reload"
    content = true
  }
}
