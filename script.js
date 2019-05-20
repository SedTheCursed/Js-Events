// ********* Fonctionnalité 1 **********
// fonction qui écrit dans la console et qui rajoute 1 à chaque nouveau click.
function footerCounter() {
    console.log(`Number of times the footer has been clicked : ${footerClicks++}`)
}

let footerClicks = 0

// séléction du footer comme cible du "click" et action à effectuer.
document.querySelector("footer").addEventListener("click", footerCounter)


// ********* Fonctionnalité 2 **********
// séléction du bouton "hamburger"
const hamburgerBtn = document.querySelector("button.navbar-toggler");

// fonction qui va déterminer l'action a effectuer lorsque le bouton est cliqué. ici, on "toggle" la classe collapse ce qui va l'afficher lorsqu'elle ne l'est pas et vise versa. 
function toggleCollapse() {
  const navBar = document.getElementById("navbarHeader");
  
  navBar.classList.toggle("collapse")
}

//appel de la fonction lorsque l'user clique sur le bouton. 
hamburgerBtn.addEventListener("click", toggleCollapse)


// ******* F 3 ********
// selection de la partie du code qui est concernée, ici le bouton "edit" de la première card. 
const editBtn = document.querySelector(".album .container .row div:first-of-type .btn-group button:last-of-type");

//fonction qui va changer la couleur du texte en rouge
function toRed(e){
  const text = e.target.parentNode.parentNode.parentNode.querySelector(".card-text");
  
	text.style.color = 'red';
}

//appel de la fonction qui change la couleur du texte lorsque l'user clique sur le bouton "edit"
editBtn.addEventListener("click", toRed)

// ******* F 4 ********
// selection du bouton edit de la deuxième card
const editCSSBtn = document.querySelector(".album .container .row div:nth-of-type(2) .btn-group button:last-of-type");

//foction qui va changer la couleur du texte, soit en vert si le texte etait noir, soit en noir si le texte etait en vert. 
function toggleGreen(e) {
  const text = e.target.parentNode.parentNode.parentNode.querySelector(".card-text");
  //partie du code qui vérifie de quelle couleur était le text pour le changer en vert ou noir. 
  text.style.color =  (text.style.color === "green") ? "rgb(33, 37, 41)" : "green";
}

//appel de la fonction qui change la couleur du texte quand l'user clique sur le bouton "edit" de la deuxième card. 
editCSSBtn.addEventListener("click", toggleGreen);

// ******* F 5 ********
// définition de la partie du code qui nous intéresse, ici il s'agit de la header.
const navbar = document.querySelector("header")

//fonction qui permet d'enlevé le lien à bootstrap.
function toggleBootstrap() {
  const boostrapLink = document.head.querySelector("link")

  //ligne qui vérifie si le bootstrap est désactivé et qui le réactive quand l'user reclique sur le header.
  boostrapLink.disabled = (boostrapLink.disabled) ? false : true
}

//ligne qui appel la fonction lorsque l'user clique au bon endroit
navbar.addEventListener("dblclick", toggleBootstrap)

// ******* F 6 ********
const viewBtns = document.querySelectorAll(".album .container .row div .btn-group button:first-of-type")

//fonction pour réduit la carte. 
function reduceCard(elt) {
  elt.querySelector(".card-text").style.display = "none"
  elt.querySelector("img").style.width = "20%"
  elt.classList.add("reduced")
}

//fonction qui permet de remettre les cards à leur taille originale
function expendCard(elt) {
  elt.querySelector(".card-text").style = ""
  elt.querySelector("img").style = ""
  elt.classList.remove("reduced")
}

//fonction qui permet de determiner la taille des cards afin de déterminer si au passage de la souris il faut la réduire ou l'agrandir.
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
// séléction des deux liens <== et ==>
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
// selection du logo a selectionner pour declencher les differentes actions
const logo = document.querySelector("header>.navbar>.container>a>strong")

function align(alignment, reset=false){
  const body = document.body
  const bodyContent =
  (body.querySelector(".container-fluid > .row > .col-sm-4")) ?
    body.querySelector(".container-fluid > .row > .col-sm-4").innerHTML :
    body.innerHTML
  
  //ligne qui efface tout dans le body
  body.innerHTML = ""
  
  //
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

//fonctions qui mettent la page sur 4 colonnes et qui les disposent sur la page comme demandé dans le project.
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

//fonction qui définit l'action à effectuer en fonction de la touche que l'user tape. 
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

  //lignes de code qui font en sorte que les exercices précédents marche quelque soit la disposition des colonnes. 
  let footerClicks = 0
  const hamburgerBtn = document.querySelector("button.navbar-toggler");
  const editBtn = document.querySelector(".album .container .row div:first-of-type .btn-group button:last-of-type");
  const editCSSBtn = document.querySelector(".album .container .row div:nth-of-type(2) .btn-group button:last-of-type");
  const navbar = document.querySelector("header")
  const viewBtns = document.querySelectorAll(".album .container .row div .btn-group button:first-of-type")
  const arrowLeft = document.querySelector("main section.jumbotron a:first-of-type")
  const arrowRight = document.querySelector("main section.jumbotron a:last-of-type")
  
  //appel des fonctions pour que les bonnes actions soient effectuées en fonction de l'action de l'user. 
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