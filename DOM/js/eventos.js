// let tarea = document.getElementById("add")
// let id = 0
// tarea.addEventListener('click', (e) => {

//     id += 1 
//     let tareas = document.getElementById("tareas")
//     let input = document.getElementById("input")
//     // let noHay = document.getElementById("noHay")
//     // if (noHay) {
//     //     noHay.remove()        
//     // }
//     tareas.innerHTML += `    
//     <div id="${id}" class="d-flex mt-3">
//         <li class="me-5">${input.value}</li>
//     </div>`

// })

// let contador = document.getElementsByClassName("py-0")

// for (let index = 0; index < contador.length; index++) {
//     const element = contador[index];
//     element.addEventListener("click", (evento)=> {
//         let contador = document.getElementById("contador")
        
//         let mas = contador.innerText 
//         if (evento.target.id == "incrementar") {
//             mas = parseInt(mas)
//             contador.innerText = ++mas
            
//         } else {
//             if (parseInt(mas) > 0) {
//                 alert("mayor")
//             }
            
//         }

//     })
// }

// let refram = []

// let submit = document.getElementById("submit")
// submit.addEventListener("click", (evento) => {
//     evento.preventDefault()

//     let titulo = document.getElementById("titulo")
//     let contenido = document.getElementById("contenido")
//     let fecha = document.getElementById("fecha")

//     let refranes = {
//         titulo: titulo.value ,
//         contenido: contenido.value,
//         fecha: fecha.value
//     }

//     refram.push(refranes)

//     console.log(refram);
    
// })

// const refranes = [
//     {
//       fecha: "2024-10-01",
//       titulo: "A quien madruga",
//       refran: "A quien madruga, Dios le ayuda."
//     },
//     {
//       fecha: "2024-10-02",
//       titulo: "Más vale prevenir",
//       refran: "Más vale prevenir que lamentar."
//     },
//     {
//       fecha: "2024-10-03",
//       titulo: "No por mucho madrugar",
//       refran: "No por mucho madrugar amanece más temprano."
//     },
//     {
//       fecha: "2024-10-04",
//       titulo: "El que persevera",
//       refran: "El que persevera, alcanza."
//     },
//     {
//       fecha: "2024-10-05",
//       titulo: "Camarón que se duerme",
//       refran: "Camarón que se duerme, se lo lleva la corriente."
//     },
//     {
//       fecha: "2024-10-06",
//       titulo: "No hay mal que por bien no venga",
//       refran: "No hay mal que por bien no venga."
//     },
//     {
//       fecha: "2024-10-07",
//       titulo: "A caballo regalado",
//       refran: "A caballo regalado no se le mira el diente."
//     },
//     {
//       fecha: "2024-10-08",
//       titulo: "Ojos que no ven",
//       refran: "Ojos que no ven, corazón que no siente."
//     },
//     {
//       fecha: "2024-10-09",
//       titulo: "En boca cerrada",
//       refran: "En boca cerrada no entran moscas."
//     },
//     {
//       fecha: "2024-10-10",
//       titulo: "Haz bien y no mires a quién",
//       refran: "Haz bien y no mires a quién."
//     }
//   ];

let agregar = document.getElementById("add")
agregar.addEventListener("click", (evento) => {
    let input = document.getElementById("input")
    let listaTareas = document.getElementById("tareas")

    if (input.value != "") {
        listaTareas.innerHTML += `<li>${input.value}</li>`
        input.value =""
    }
})

// ------------- Incremento --------------------

// let botones = document.getElementsByClassName("botones")

// for (let i = 0; i < botones.length; i++) {
//     const element = botones[i];
//     let contador = document.getElementById("contador")

//     element.addEventListener("click", (evento) =>{

//         // if (evento.target.id == "incrementar") {
//         //     contador.innerText = parseInt(contador.innerText) + 1  
//         // } else {
//         //     contador.innerText = parseInt(contador.innerText) - 1  
//         // }
//     })
// }
//  let mas = document.getElementById("incrementar")
//  let contar = 0
//  mas.addEventListener("click", (evento) => {
//     contar++
//     let contador = document.getElementById("contador").innerText = contar
//  })

//  let menos = document.getElementById("decrementar")
//  menos.addEventListener("click", (evento) => {
//      if (contar > 0) { 
//         contar--
//         let contador = document.getElementById("contador").textContent = contar
//     }
//  })


//------------------------ Refranes aleatorios -----------------

const refranes = [
    {
        id: 1,
        titulo: "A quien madruga",
        contenido: "A quien madruga, Dios lo ayuda.",
        fecha: "2024-10-20"
    },
    {
        id: 2,
        titulo: "No por mucho madrugar",
        contenido: "No por mucho madrugar, amanece más temprano.",
        fecha: "2024-10-21"
    },
    {
        id: 3,
        titulo: "Más vale tarde",
        contenido: "Más vale tarde que nunca.",
        fecha: "2024-10-22"
    },
    {
        id: 4,
        titulo: "Al mal tiempo",
        contenido: "Al mal tiempo, buena cara.",
        fecha: "2024-10-23"
    },
    {
        id: 5,
        titulo: "Camarón que se duerme",
        contenido: "Camarón que se duerme, se lo lleva la corriente.",
        fecha: "2024-10-24"
    }
]

let random = document.getElementById("random")

random.addEventListener("click", (evento) => {
    let tittle = document.getElementById("tittle")
    let content = document.getElementById("content")
    let date = document.getElementById("date")

    for (let index = 0; index < crearRefranes.length; index++) {
        const element = crearRefranes[Math.floor(Math.random() * crearRefranes.length)];
        
        tittle.innerText = element.titulo
        content.innerText = element.contenido
        date.innerText = element.fecha 
    }
})


let crearRefranes = []

let submit = document.getElementById("submit")
submit.addEventListener("click", (evento) =>{
    evento.preventDefault()
    let titulo = document.getElementById("titulo") 
    let contenido = document.getElementById("contenido")
    let fecha = document.getElementById("fecha")

    if (titulo.value != "" &&  contenido.value != "" && fecha.value != "") {
        let refran = {
            titulo: titulo.value,
            contenido: contenido.value,
            fecha: fecha.value
        }
        crearRefranes.push(refran)
        titulo.value = ""
        contenido.value = ""
        fecha.value = ""
        console.log(crearRefranes);
    }
    console.log(crearRefranes);
})


    let storage = document.getElementById("storage")
    storage.addEventListener("click", (evento) => {
        sessionStorage.setItem("Nombre", "carlos")
        sessionStorage.removeItem("Nombre")
        sessionStorage.getItem("Nombre")
        sessionStorage.key(0)
        sessionStorage.clear()
    })


