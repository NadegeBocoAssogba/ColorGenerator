
let body = document.querySelector(".body")
let h2 = document.querySelector(".h2")

function couleuraleatoire () {
    let r = Math.floor(Math.random() *256)
    let g = Math.floor(Math.random() *256)
    let b = Math.floor(Math.random() *256)
    let couleur = `rgb(${r}, ${g}, ${b})`

    h2.textContent = couleur
    body.style.backgroundColor = couleur  
}

let changementdelarriereplan
let couleursacives = false
let bouton = document.querySelector(".bouton")
function interrupteur() {
    if (couleursacives) {
        bouton.textContent="START"
        clearInterval(changementdelarriereplan)
    } else {
        bouton.textContent="STOP"
        changementdelarriereplan = setInterval(couleuraleatoire, 1000)
    }
    couleursacives = !couleursacives;
}
bouton.addEventListener("click", interrupteur)



// const code = [1, 2, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F]
// color = #123456
// let 1 = 