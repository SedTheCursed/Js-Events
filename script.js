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

function align(alignment){
  const body = document.body
  const bodyContent = body.innerHTML
  let col = body.querySelector(".container-fluid >.row > div")

  if (!col){
  	body.classList.add("container-fluid");

  	const row = document.createElement("div");
  	col = document.createElement("div");

  	row.classList.add("row");
  	col.innerHTML = bodyContent;
    
    row.appendChild(col);
  	body.appendChild(row);
  } 
  col.classList = " "
  col.classList.add(alignment)
}

function alignLeft() {
  align("col-sm-4")
}

function alignCenter() {
  
}

function alignRight() {
  
}

function alignDefault() {

}

/* 
Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour les moussaillons pas piqués des hannetons (this sentence is brought to you by www.vieilles-expressions.fr). Voici ce qu'elle va devoir faire :

    La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
    Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
    Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
    Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
    Si l'utilisateur presse la touche "b", tout redevient normal.

*/

function changeAlign(e) {
  switch(e.key) {
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
}

logo.addEventListener("click", () => document.addEventListener("keypress", changeAlign))