// Nav Bar Section
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
// For day and night button
  let togglemode = (x) => {
    // console.log("clicked");
    mode = localStorage.getItem("day-nightmode")
    if (mode != "night" && x != true) {
      // console.log("night mode called", mode);
      localStorage.setItem("day-nightmode", "night")
      document.body.style.backgroundColor = "#243447";
      kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#03152b"
      document.getElementsByClassName("open_nav")[0].style.color = "#828284"
      document.getElementsByClassName("check")[0].style.color = "#c4c4c4"
    }
    if (mode == "night" && x != true) {
      // console.log("day mode called", mode);
      localStorage.setItem("day-nightmode", "day")
      document.body.style.backgroundColor = "#e5e5e5";
      kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#111"
      document.getElementsByClassName("open_nav")[0].style.color = "#131313"
      document.getElementsByClassName("check")[0].style.color = "#111"
    }
    if (x == true) {
      if (mode == "night") {
        document.body.style.backgroundColor = "#243447";
        kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#03152b"
        document.getElementsByClassName("open_nav")[0].style.color = "#828284"
        document.getElementsByClassName("check")[0].style.color = "#c4c4c4"
      }
      else {
        document.getElementsByClassName("check")[0].style.color = "#111"
        document.body.style.backgroundColor = "#e5e5e5";
        kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#111"
        document.getElementsByClassName("open_nav")[0].style.color = "#131313"
      }
    }
  }
  


  window.onload=()=>{
    togglemode(true)
  }