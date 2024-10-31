let url = "https://pokeapi.co/api/v2/pokemon/"


apiPokemon = async (url) => {

    try {
        let respuesta = await fetch(url)
        let data = await respuesta.json()
        console.log(data);
        dataPokemon(data.results)
    } catch (error) {   
        console.log("Error en el try", error);
    } finally {
        console.log("Fin del TryCatch");
    }

    
}

apiPokemon(url)

dataPokemon = async (array) => {
    let pokemones = document.getElementById("pokemones")

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        // console.log(element);
        try {
            let respuesta = await fetch(element.url)
            let dataApi = await respuesta.json()
            console.log(dataApi);

            pokemones.innerHTML += `
            <div class="carta col-3">
            <div class="d-flex justify-content-center">
                <h2 class="text-white">${dataApi.name}</h2>
            </div>
            <div class="d-flex justify-content-center">
                <img src="${dataApi.sprites.other.dream_world.front_default}" alt="">
            </div>

            <div class="">
            <p class="text-white">${dataApi.types[0].type.name}</p>
            </div>
            <div class=""></div>
        </div>
`
  
        } catch (error) {
            console.log(error);
        } finally {
            console.log("Fin ");
        }
    }
}

renderPokemon = () => {

}
