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