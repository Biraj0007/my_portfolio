
// Nav Bar Section
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Adding  project
var projects = {
  project1: {
    images: ["../images/project_1.png", "../images/project_2.png", "../images/project_3.png"],
    title: "yourThoughts",
    description: "It is based on MERN stack (Mongodb Express.js Reactjs Node.js) We will be able to see everyone's posts that they have shared. We can post our thoughts also we can update, delete later if we want. Basically there is a login and signup end points present after password verification you will be able to do all activities",
    color: "#FECD45"
  },
  project2: {
    images: ["../images/project_01.png", "../images/project_02.png", "../images/project_03.png"],
    title: "Vibration Analysis of Spur Gear",
    description: "[It was my project in B-tech final year]  An unexpected failure of the gear may cause significant economic losses. For that reason, fault diagnosis in gears has been the subject of intensive research. Vibration signal analysis has been widely used in the fault detection of rotation machinery ",
    color: "rgb(127, 202, 230)"
  }
}

 //function for day night mode
let togglemode = (x) => {
  cont_color=localStorage.getItem("cont_color")
  mode = localStorage.getItem("day-nightmode")
  if (mode != "night" && x != true) {
    localStorage.setItem("day-nightmode", "night")
    document.body.style.backgroundColor = "#243447";
    kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#03152b"
    document.getElementsByClassName("open_nav")[0].style.color = "#828284"
    bg_color = document.getElementsByClassName("container")[0]
    bg_color.style.backgroundColor="#4d637e";
    document.getElementById("description").style.color="#c6c4c4"
  }
  if (mode == "night" && x != true) {
    bg_color = document.getElementsByClassName("container")[0]
    bg_color.style.backgroundColor=cont_color;
    document.getElementById("description").style.color="#111"
    localStorage.setItem("day-nightmode", "day")
    document.body.style.backgroundColor = "White";
    kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#111"
    document.getElementsByClassName("open_nav")[0].style.color = "#131313"
  }
  if (x == true) {
    if (mode == "night") {
      document.body.style.backgroundColor = "#243447";
      kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#03152b"
      document.getElementsByClassName("open_nav")[0].style.color = "#828284"
      bg_color = document.getElementsByClassName("container")[0]
      bg_color.style.backgroundColor="#4d637e";
      document.getElementById("description").style.color="#c6c4c4"
    }
    else {
      bg_color = document.getElementsByClassName("container")[0]
      bg_color.style.backgroundColor=cont_color;
      document.getElementById("description").style.color="#111"
      document.body.style.backgroundColor = "#White";
      kp = document.getElementsByClassName("sidenav")[0].style.backgroundColor = "#111"
      document.getElementsByClassName("open_nav")[0].style.color = "#131313"
    }
  }
}



// For auto typing
function typeWriter(x,id2) {
  arr_title = projects[x]['title']
  arr_desc = projects[x]['description'].split(" ")
  if (i < arr_desc.length) {
    document.getElementById("description").innerHTML += arr_desc[i] + " ";
    if (i < arr_title.length) {
      document.getElementById("title").innerHTML += arr_title[i];
    }
    i++;
  if(i==arr_desc.length){
    clearInterval(id2)
  }
  }
}

  number = 0
  let imageChanger = () => {
    number++
    if (number >= array_images.length) {
      number = 0
    }
    op.src = array_images[number]
  }
  let op = document.querySelector('#img')
  op.src = "../images/project_1.png"

  image_arr = projects['project1']['description']
  window.onload = () => {
    array_key1 = Object.keys(projects)
    setInterval(imageChanger, 2500)
    togglemode(true)
    onClick(false)
  }
  let project_number = 0
  let image_number = 0
  clicked = false
  // again_clicked=0

// On clicking button for next project
  onClick = (clicking) => {
    // again_clicked++
    i = 0
    project_number++
    if (clicking === false) {
      project_number = 0
    }
    array_key1 = Object.keys(projects)
    document.getElementById("description").innerHTML = " ";
    document.getElementById("title").innerHTML = ""
    bg_color = document.getElementsByClassName("container")[0]
    mode = localStorage.getItem("day-nightmode")
    if(mode!="night"){
      bg_color.style.backgroundColor = projects[array_key1[project_number % array_key1.length]]['color'];
      document.getElementById("description").style.color="#111"
    } 
    else{
      bg_color.style.backgroundColor="#4d637e";
      document.getElementById("description").style.color="#c6c4c4"
    }
    localStorage.setItem("cont_color",projects[array_key1[project_number % array_key1.length]]['color'])
    array_images = projects[array_key1[project_number % array_key1.length]]['images']
    op.src = array_images[image_number]
     id2 = setInterval(
      () => {
        typeWriter(array_key1[project_number % array_key1.length],id2)
      }, 70);

  }




