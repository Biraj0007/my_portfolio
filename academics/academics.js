// Nav Bar Section
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// for changing day night mode
let togglemode = (x) => {

  // console.log("clicked");
  mode = localStorage.getItem("day-nightmode")
  descs = document.getElementsByClassName("descrip")
  if (mode != "night" && x != true) {
    // console.log("night mode called", mode);
    localStorage.setItem("day-nightmode", "night")
    document.body.style.backgroundColor = "#243447";
    kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#03152b"
    document.getElementsByClassName("open_nav")[0].style.color = "#828284"
    document.getElementsByClassName("aboutacademy")[0].style.backgroundColor = "rgb(17 24 39)"
    for (var i = 0; i < descs.length; i++) {
      descs[i].style.color = "rgb(188, 185, 185)"
    }
  }

  if (mode == "night" && x != true) {
    // console.log("day mode called", mode);
    localStorage.setItem("day-nightmode", "day")
    document.body.style.backgroundColor = "White";
    kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#111"
    document.getElementsByClassName("open_nav")[0].style.color = "#131313"
    document.getElementsByClassName("aboutacademy")[0].style.backgroundColor = "#c5d5cb"
    for (var i = 0; i < descs.length; i++) {
      descs[i].style.color = "#111"
    }
  }

if (x == true) {
  // console.log("refresh got called");
  if (mode == "night") {
    document.body.style.backgroundColor = "#243447";
    kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#03152b"
    // document.getElementById("aboutdes").style.color = "#828284"
    document.getElementsByClassName("open_nav")[0].style.color = "#828284"
    document.getElementsByClassName("aboutacademy")[0].style.color = "#c5d5cb"
    document.getElementsByClassName("descrip")[0, 1, 2].style.color = "rgb(188, 185, 185)"
    for (var i = 0; i < descs.length; i++) {
      descs[i].style.color = "rgb(188, 185, 185)"
    }
  }
  else {
    document.getElementsByClassName("aboutacademy")[0].style.backgroundColor = "#c5d5cb"
    document.body.style.backgroundColor = "White";
    kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#111"
    document.getElementsByClassName("open_nav")[0].style.color = "#131313";
    document.getElementsByClassName("descrip")[0, 1, 2].style.color = "111"
    // console.log(document.getElementsByClassName("descrip"));
    for (var i = 0; i < descs.length; i++) {
      descs[i].style.color = "#111"
    }
  }
}
}
window.onload = () => {

  togglemode(true)
}