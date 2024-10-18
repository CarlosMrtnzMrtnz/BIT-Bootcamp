

let getUl = document.getElementsByTagName("ul")
let getLi = document.getElementsByTagName("li")

// console.log(getUl);
// console.log(getLi);

let getAll = document.querySelectorAll(".lista1 ul li")
 getAll = document.querySelectorAll('a[href=""]')

// console.log(getAll);

let getSelect = document.querySelector(".lista1")

// console.log(getSelect);

let getClass = document.getElementsByClassName("titulito")

// console.log(getClass);

let getId = document.getElementById("lista")

// console.log(getId);

// ------------- modificar elementos -----------------

let lix = document.getElementById("x")
// console.log(lix);
lix.innerText = "22"
lix.style.color = "red"
lix.setAttribute("class", "x")

let h1 = document.getElementById("h1")
h1.innerHTML = `<h1 class=""></h1>`

// ------------------- eventos ---------------------

let btnAlert = document.getElementById("alerta")

btnAlert.addEventListener("click", (evento)=>{
    lix.innerText = 23
//     let img = document.getElementById("imagen")
//     img.innerHTML = `<div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
    let ocultar = document.getElementById("buscarid")
    ocultar.style.display ="block"
    // derecho()
    let imagen =  document.getElementById(evento.target.dataset.id)
    imagen.style.color = "blue"
} )

// console.log("hola ");

function izquierdo (num1, num2) {
    let suma = num1 + num2
    console.log(suma);
}
// izquierdo(2, 4)

 derecho = ()=>{
    alert("peligro!")
 } 

 let botonesNew = document.querySelectorAll("div .lista1 li")

 for (let index = 0; index < botonesNew.length; index++) {
    const element = botonesNew[index];

    element.addEventListener("click", (e)=>{

        btnAlert.style.backgroundColor = "blue"
        console.log(e.target.innerText);
        img = document.getElementById(e.target.dataset.id)
        console.log(img);
        img.style.color = "red"
        
     })
    
 }

