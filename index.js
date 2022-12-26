// Nav Bar Section
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



//  function for day night mode
let togglemode = (x) => {
  // console.log("clicked");
  mode = localStorage.getItem("day-nightmode")
  if (mode != "night" && x != true) {
    // console.log("night mode called", mode);
    localStorage.setItem("day-nightmode", "night")
    document.body.style.backgroundColor = "#243447";
    kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#03152b"
    document.getElementById("aboutdes").style.color = "#828284"
    document.getElementsByClassName("open_nav")[0].style.color = "#828284"
  }
  if (mode == "night" && x != true) {
    // console.log("day mode called", mode);
    localStorage.setItem("day-nightmode", "day")
    document.body.style.backgroundColor = "#e5e5e5";
    kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#111"
    document.getElementById("aboutdes").style.color = "#232a2f"
    document.getElementsByClassName("open_nav")[0].style.color = "#131313"
  }
  if (x == true) {
    // console.log("refresh got called");
    if (mode == "night") {
      document.body.style.backgroundColor = "#243447";
      kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#03152b"
      document.getElementById("aboutdes").style.color = "#828284"
      document.getElementsByClassName("open_nav")[0].style.color = "#828284"
    }
    else {
      document.body.style.backgroundColor = "#e5e5e5";
      kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#111"
      document.getElementById("aboutdes").style.color = "#232a2f"
      document.getElementsByClassName("open_nav")[0].style.color = "#131313"
    }
  }
}

// About Section
var i = 0;
var l = 0;
var txt = 'Hey, I am Biraj';
var speed = 70;
var arr = [`console.log(0%)`, `system.out.println(18%)`, `print(28%)`, `println(39%)`, `std::cout << 48%;`, `disp(62%);`, `puts 78%`, `&ltp&gt100% &lt/p&gt`, ``]
function typeWriter() {
  if (l < arr.length) {
    speed1 = 400
    document.getElementById("print").innerHTML = arr[l]
    l++
    m = setTimeout(typeWriter, speed1);
  }

  if (i < txt.length - 6 && l >= arr.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    var j = setTimeout(typeWriter, speed);
  }
  if (i >= txt.length - 6 && i < txt.length && l >= arr.length) {
    clearTimeout(j)
    speed = 10
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Window onload we are calling the function
window.onload = () => {
  typeWriter()
  togglemode(true)
}

