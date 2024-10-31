
// let datos = []

// fetch("https://api.escuelajs.co/api/v1/categories")
// .then((res) => {
    //     return res.json()
    // })
    // .then((data) => {
        //     console.log("Respuesta api");
        //     console.log(data);
        //     datos = data
        //     for (let i = 0; i < datos.length; i++) {
            //         const element = datos[i];
            //         console.log(i);
//         console.log(element.name);
//     }
// })
// .catch((error) => {
//     console.log("error del catch");

//     console.log(error);

// })
// console.log(datos);

// renderPlatzi = async (direcionApi) => {
//   try {
//     let res = await fetch(direcionApi);
//     let dataApi = await res.json();
//     // console.log(dataApi);
//     platzi(dataApi);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Final del TryCatch");
//   }
// };

// renderPlatzi(url);

// platzi = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let tarjetas = document.getElementById("tarjetas");
//     tarjetas.innerHTML += `
//     <div>
//         <div class="d-flex justify-content-center">
//             <h1>${element.name}</h1>
//         </div>
//         <div class="d-flex justify-content-center">
//             <img src="https://i.imgur.com/QkIa5tT.jpeg" alt="${element.image}">
//         </div>
//     </div>
//         `;
//     // console.log(element);
//   }
// };
let pagina = 1
let url = `https://rickandmortyapi.com/api/character?page=`;
carga = () => {
    let hamster = document.getElementById("hamster")
    hamster.classList.toggle("d-block")
}

let rickApi = async (url, pag) => {
    try {
        carga()
        let respuesta = await fetch(`${url}${pag}`)
        let dataApi = await respuesta.json()
        renderRick(dataApi.results)
    } catch (error) {
        console.log(error);  
    } finally {
        console.log("Fin del Fetch");
        carga()
    }
}

rickApi(url, pagina)

renderRick = (array) => {
let tarjetas = document.getElementById("tarjetas")
tarjetas.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tarjetas.innerHTML += `
    <div class="carta col-4">
        <div class="tools d-flex justify-content-center">
            <div class="circle">
                <span class="${element.status} box"></span>
            </div>
        </div>
        <div class="card__content">
            <div class="d-flex justify-content-center">
                <img src="${element.image}" alt="">
            </div>
            <div class="d-flex justify-content-center">
                <p class="text-white ">Nombre: ${element.name}</p>
            </div>
            <div class="d-flex">
            <p class="text-white ">Genero: ${element.gender}</p>
            <p class="text-white ">Specie: ${element.species}</p>
            </div>
        </div>
    </div>
        `
        
    }
}

let paginacion = document.getElementsByClassName("fa-solid")

for (let index = 0; index < paginacion.length; index++) {
    const element = paginacion[index];
    element.addEventListener("click", (evento) => {
       if ( evento.target.id == "mas" ) {
        rickApi(url, ++pagina)
        console.log(pagina);
        
       } else if(evento.target.id == "menos") {
        if (pagina > 1) {
            rickApi(url, pagina--)            
        }
       }
    })
}