// ********* Fonctionnalité 1 **********
function footerCounter() {
    console.log(`Number of times the footer has been clicked : ${footerClicks++}`)
}

let footerClicks = 1

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

function toRed(){
	const text = document.querySelector(".album .container .row div:first-of-type p.card-text");

	text.style.color = 'red';
}

editBtn.addEventListener("click", toRed)

// ******* F 4 ********
const editCSSBtn = document.querySelector(".album .container .row div:nth-of-type(2) .btn-group button:last-of-type");

function toggleGreen() {
  const text = document.querySelector(".album .container .row div:nth-of-type(2) p.card-text");

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

// ******* F 7 ********
const arrowRight = document.querySelector("main section.jumbotron a:last-of-type")

function switchCard() {
  const Cards = document.querySelector(".album > .container > .row")
  console.log(Cards.lastElementChild)
  CardToMove = Cards.removeChild(Cards.lastElementChild)
  Cards.prepend(CardToMove)
}

arrowRight.addEventListener("click", switchCard)

/*Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !*/

/*Petite remarque : tu vas réaliser que si tu mélanges les cards, il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi. Si tu survoles un bouton "View", c'est une autre card qui va se réduire. Si tu arrives à corriger ça, c'est cool mais la consigne est d'ignorer ce souci pour le moment.*/