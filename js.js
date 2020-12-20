(function(){if(document.getElementById("button")){alert("Your browser does not support JavaScript.")}})() /* Check if Javascript is compatible */

let content = false
let placebo = 0
var text1 = document.createElement("span");
body.appendChild(text1);

function maketext1content() {
  let cykablyat = ""
  switch (placebo) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      cykablyat = "Yes, you did."
      break;
    case 6:
      cykablyat = "I am telling you, you farted. and that is final."
      break;
    case 7:
      cykablyat = "You did!"
      break;
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      cykablyat = "Did!"
      break
    case 13:
      cykablyat = "Did!!"
      break
    case 14:
      cykablyat = "DID!!"
      break
    case 15:
      cykablyat = "DID!!!!!!!!!!!"
      break
    case 16:
      cykablyat = "GRRRRR!!!! You're making me angry!"
      break
    case 17:
      cykablyat = "Stop it! It hurts!"
      break
    case 18:
      cykablyat = "Fine! You didn't fart! Just stop it!"
      break
    case 19:
      cykablyat = "*cough* Go away! I have coronavirus!"
      break
    case 20:
      cykablyat = "Please! I won't make it! I'm dying! Noooooooooooooooooooooo-"
      break
    default:
      var i;
      cykablyat = "MESSAGE FROM THE CREATOR> You have somehow killed the console logger. I don't know how, since I coded him to be immortal, but he no longer exists. RIP, console logger. "
      for (i = 0; i < (placebo - 20); i = i + 1) {
        cykablyat += "*-* "
      }
  }
}

function makePage() {
  if (content) {
    location.reload()
  } else {
    document.getElementById("main").innerHTML = "You clicked the button. You found the bottom of the page. *fart noises* oh, you farted."
    document.getElementById("title").innerHTML = "ree"
    document.getElementById("button").innerHTML = "Reload"
    content = true
    // 1. Create the button
var button = document.createElement("button");
button.innerHTML = "I didn't fart!";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  placebo = placebo+1;
  text1.innerHTML = maketext1content();
});
  }
}
