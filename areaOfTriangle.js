const input = document.querySelectorAll(".input");
const calBtn= document.querySelector("#calBtn");
const output = document.querySelector("#output");\

function calArea(){
   
    
    const areaOfTriangle = (Number(input[0].value) * Number(input[1].value)) / 2;
    output.innerText = "Area of Triangle from Given Input: " + areaOfTriangle;
}

calBtn.addEventListener("click", calArea)