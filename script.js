function footerCounter() {
    console.log(`Number of times the footer has been clicked : ${footerClicks++}`)
}

let footerClicks = 1

document.querySelector("footer").addEventListener("click", footerCounter)