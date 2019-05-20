// ********* Fonctionnalité 1 **********
function footerCounter() {
    console.log(`Number of times the footer has been clicked : ${footerClicks++}`)
}

let footerClicks = 0

document.querySelector("footer").addEventListener("click", footerCounter)

// ********* Fonctionnalité 2 **********
const hamburgerBtn = document.querySelector("button.navbar-toggler");


function toggleCollapse() {
  const navBar = document.getElementById("navbarHeader");
  
  navBar.classList.toggle("collapse")
}

hamburgerBtn.addEventListener("click", toggleCollapse)


// ******* F 3 ********
const editBtn = document.querySelector(".album .container .row div:first-of-type .btn-group button:last-of-type");

function toRed(e){
  const text = e.target.parentNode.parentNode.parentNode.querySelector(".card-text");
  
	text.style.color = 'red';
}

editBtn.addEventListener("click", toRed)

// ******* F 4 ********
const editCSSBtn = document.querySelector(".album .container .row div:nth-of-type(2) .btn-group button:last-of-type");

function toggleGreen(e) {
  const text = e.target.parentNode.parentNode.parentNode.querySelector(".card-text");

  text.style.color =  (text.style.color === "green") ? "rgb(33, 37, 41)" : "green";
}

editCSSBtn.addEventListener("click", toggleGreen);

// ******* F 5 ********
const navbar = document.querySelector("header")

function toggleBootstrap() {
  const boostrapLink = document.head.querySelector("link")

  boostrapLink.disabled = (boostrapLink.disabled) ? false : true
}

navbar.addEventListener("dblclick", toggleBootstrap)

// ******* F 6 ********
const viewBtns = document.querySelectorAll(".album .container .row div .btn-group button:first-of-type")

function reduceCard(elt) {
  elt.querySelector(".card-text").style.display = "none"
  elt.querySelector("img").style.width = "20%"
  elt.classList.add("reduced")
}

function expendCard(elt) {
  elt.querySelector(".card-text").style = ""
  elt.querySelector("img").style = ""
  elt.classList.remove("reduced")
}

function toggleCard(e) {
  const card = e.target.parentNode.parentNode.parentNode.parentNode

  if (card.classList.contains("reduced")) {
    expendCard(card)
  } else {
    reduceCard(card)
  } 
}

viewBtns.forEach(card => card.addEventListener("mouseover", toggleCard))

// ******* F 7 & 8 ********
const arrowLeft = document.querySelector("main section.jumbotron a:first-of-type")
const arrowRight = document.querySelector("main section.jumbotron a:last-of-type")

function forwardCard() {
  const Cards = document.querySelector(".album > .container > .row")

  CardToMove = Cards.removeChild(Cards.lastElementChild)
  Cards.prepend(CardToMove)
}

function backwardCard(e) {
  const Cards = document.querySelector(".album > .container > .row")

  e.preventDefault()
  CardToMove = Cards.removeChild(Cards.firstElementChild)
  Cards.appendChild(CardToMove)
}

arrowRight.addEventListener("click", forwardCard)
arrowLeft.addEventListener("click", backwardCard)

// ******* F 9 ********
const logo = document.querySelector("header>.navbar>.container>a>strong")

function align(alignment, reset=false){
  const body = document.body
  const bodyContent =
  (body.querySelector(".container-fluid > .row > .col-sm-4")) ?
    body.querySelector(".container-fluid > .row > .col-sm-4").innerHTML :
    body.innerHTML

  body.innerHTML = ""

  if (!reset) {
    body.classList.add("container-fluid");

    const row = document.createElement("div");
    const col = document.createElement("div");

    row.classList.add("row");
    col.innerHTML = bodyContent;

    alignment.split(" ").forEach(className => col.classList.add(className))

    row.appendChild(col);
    body.appendChild(row);
  } else {
    body.classList.remove("container-fluid");
    body.innerHTML = bodyContent
  }
}

function alignLeft() {
  align("col-sm-4")
}

function alignCenter() {
  align("col-sm-4 offset-sm-4")
}

function alignRight() {
  align("col-sm-4 offset-sm-8")
}

function alignDefault() {
  align("", true)
}

function changeAlign(e) {
  switch(e.key.toLowerCase()) {
    case "a":
      alignLeft();
      break;
    case "y":
      alignCenter();
      break;
    case "p":
      alignRight();
      break;
    case "b":
      alignDefault();
      break;
  }

  let footerClicks = 0
  const hamburgerBtn = document.querySelector("button.navbar-toggler");
  const editBtn = document.querySelector(".album .container .row div:first-of-type .btn-group button:last-of-type");
  const editCSSBtn = document.querySelector(".album .container .row div:nth-of-type(2) .btn-group button:last-of-type");
  const navbar = document.querySelector("header")
  const viewBtns = document.querySelectorAll(".album .container .row div .btn-group button:first-of-type")
  const arrowLeft = document.querySelector("main section.jumbotron a:first-of-type")
  const arrowRight = document.querySelector("main section.jumbotron a:last-of-type")

  document.querySelector("footer").addEventListener("click", footerCounter);
  hamburgerBtn.addEventListener("click", toggleCollapse);
  editBtn.addEventListener("click", toRed);
  editCSSBtn.addEventListener("click", toggleGreen);
  navbar.addEventListener("dblclick", toggleBootstrap);
  viewBtns.forEach(card => card.addEventListener("mouseover", toggleCard));
  arrowRight.addEventListener("click", forwardCard);
  arrowLeft.addEventListener("click", backwardCard);
}

logo.addEventListener("click", (e) => {
  e.preventDefault();
  document.addEventListener("keypress", changeAlign)
});