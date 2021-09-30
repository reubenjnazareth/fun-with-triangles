const sides = document.querySelectorAll(".input-side");
const hypBtn = document.querySelector("#calculate-Btn");
const output = document.querySelector("#output");

function calSumOfSquares(a,b) {
    const sumOfSquares= a*a + b*b;
    return sumOfSquares
}

function calHypoteneuse() {
    const sumOfSquares = calSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHyp = Math.sqrt(sumOfSquares);
    output.innerText = "Length of Hypoteneuse: " + lengthOfHyp
}



hypBtn.addEventListener("click", calHypoteneuse)