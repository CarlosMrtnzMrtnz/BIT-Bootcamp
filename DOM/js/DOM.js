

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
        // console.log(img);
        img.style.color = "red"
        
     })
    
 }


let botonesX = document.querySelectorAll(".botonesX")

for (let index = 0; index < botonesX.length; index++) {
    const element = botonesX[index];
    
    element.addEventListener('click', (evento)=>{
        let deleteCard = document.getElementById(evento.target.dataset.id)
        // console.log(deleteCard);
        deleteCard.style.display = "none"
    })
}
// ---------------- CAmbio de bg random ------------

let btnBg = document.getElementById("bg")
btnBg.addEventListener("click", (evento)=> {
    color1 = Math.floor(Math.random()*255)
    color2 = Math.floor(Math.random()*255)
    color3 = Math.floor(Math.random()*255)

    color = `rgb(${color1}, ${color2}, ${color3})`
    

    document.body.style.backgroundColor = color
    
})
        // console.log(Math.floor(Math.random()*255));

        // exa= [0,1,2,4,5,6,7,8,9,0,"a","b","c","d","f"]


    // ------------- elemtos ------------------
    const prendas = [
        {
          nombre: "Camiseta",
          precio: 15.99,
          detalle: "Camiseta de algodón de manga corta",
          tipo: "Top",
          cantidad: 50,
          marca: "Nike"
        },
        {
          nombre: "Pantalón",
          precio: 39.99,
          detalle: "Pantalón de mezclilla ajustado",
          tipo: "Bottom",
          cantidad: 30,
          marca: "Levi's"
        },
        {
          nombre: "Chaqueta",
          precio: 79.99,
          detalle: "Chaqueta de cuero sintético",
          tipo: "Abrigo",
          cantidad: 20,
          marca: "Zara"
        },
        {
          nombre: "Vestido",
          precio: 45.50,
          detalle: "Vestido de verano con estampado floral",
          tipo: "Ropa formal",
          cantidad: 15,
          marca: "H&M"
        },
        {
          nombre: "Sudadera",
          precio: 29.99,
          detalle: "Sudadera con capucha de felpa",
          tipo: "Top",
          cantidad: 25,
          marca: "Adidas"
        },
        {
          nombre: "Falda",
          precio: 22.99,
          detalle: "Falda plisada de seda",
          tipo: "Bottom",
          cantidad: 10,
          marca: "Mango"
        }
      ];
      
      let listar = document.getElementById("listar")

      listar.addEventListener("click", (evento)=>{

        for (let i = 0; i < prendas.length; i++) {
            const element = prendas[i];
                 
            let tarjeta = document.getElementById("grilla")
            tarjeta.innerHTML += `
        <div class="card col-3" id="${i}"  style="width: 18rem;">
            <div class="position-absolute top-0 end-0 me-3">
                <button  data-id="${i}"  class="btn botonesX p-0 text-danger fw-bold" >X</button>
            </div>

            <div class="card-body">
              <h5 id="cardTittle" class="card-title">${element.nombre}</h5>
              <p id="descripcion" class="card-text">${element.detalle}</p>
              <p id="cantidad" class="card-text"> ${element.cantidad}</p>
              <div class="d-flex justify-content-center">
                <a id="precio" href="#" class="btn btn-primary">${element.precio}</a>
              </div>
            </div>
        </div>`

        }
      })
            //       girlla = document.getElementById("f")
            // girlla.innerHTML = `<button class="btn btn-prymari" id="bg">${element.precio}</button>`

let eliminar = document.getElementsByClassName("botonesX")
console.log(eliminar);


for (let index = 0; index < eliminar.length; index++) {
    const element = eliminar[index];

    element.addEventListener("click", (evento)=>{
        
        let borrar = document.getElementById(evento.target.dataset.id)
        
        console.log(borrar);

        borrar.innerHTML.style.display = "none"
    
    })
}


