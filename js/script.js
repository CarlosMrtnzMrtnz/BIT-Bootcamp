// -------- Tipoas de datos ---------
let letras = "carlos"
let num2 = 20
let boleano = true
let objeto = {
    nombre: "david",
    apellido: "perez",
    edad: 29
}
let undefi


console.log(letras);
console.log(typeof num2);
console.log(objeto);
console.log(boleano);
console.log(undefi);

// -------------- operacion aritmeticas ------------
let a = 4
let b = 7

let suma = a + b
console.log(suma);

let rest = 10 - 11

console.log(rest);

let multi = a * b
console.log(multi);

let divi = b / a
console.log(divi);
// ------------------- 

console.log(suma);
console.log(--suma);

console.log(multi *= 2);
// -------------------------

let names = "Carlos, alberto, martinez, martinez"
let apellido = "MARTINEZ"

console.log(`mi nombre es: ${names} y mi apellido es ${apellido}`);
console.log("mi nombre es: " + names);
// ---------------------- metodos de string -----------------------

console.log(apellido.length);
console.log(names.length);

console.log(names.toUpperCase());
console.log(apellido.toLowerCase());

console.log(names.split("."));

console.log(names.indexOf("l"));

// ----------------- Arrays y metodos ----------------------------------------

let arr = [3, true, "carlos", [1, 2, 3,], { "nombre": "carlos", apellido: "martinez", amigos: ["1", "2", "3"] }]
// añade elemento al dinal del array
console.log("**********************************************************************");
i = 4
console.log(arr[4]["nombre"]);
console.log(arr[3][1]);
console.log(`Hola este mi amigo ${arr[i].amigos[1]}`);





arr.push(1000)

console.log(arr);
// añade elemento al inicio del array
arr.unshift(2000)

console.log(arr);

// remueve el primer elemento del array
arr.shift()
console.log(arr);

// remueve el ultimo

arr.pop()
console.log(arr);

// remueve elemento de la array especificando posicion

arr.splice(3, 1)

console.log(arr);

arr.splice(2, 0, "new element")

console.log(arr);

arr.splice(2, 1, "new element")

// -------------------- funciones -----------------------------------

function mensaje(nameOne, nameTwo) {
    return `hola ${nameOne}, mi nombre es ${nameTwo}`
}
nameOne = "julian"
nameTwo = "juancho Roy"
console.log(mensaje(nameOne, nameTwo));

console.log(mensaje("seferino", "bianchi"));

console.log("--------------------------------------------------------------------");
console.log("--------------------------------------------------------------------");


// ----- Operadores de comparacion 
console.log("parra" == "Parra");
console.log(10 == "10");
console.log(10 + "10");
console.log(10 + 10);

console.log(10 === 10);

console.log(8 != "8");
console.log(8 != "7");
console.log(8 != 7);

console.log(100 !== 100);
console.log(100 !== "100");

console.log("Diego" != "diego");
console.log("Diego" != "Diego");
console.log("Diego" != 10);

// mayor que

console.log( 2 > 3);
console.log( 3 > 2);
console.log(10 > 10);

console.log("ab" > "a") ;
console.log("abC" > "Abcd");
console.log("abC" > "Abcd");
console.log("bz" > "ad");
console.log("bh" > "bz");

// Menor que 
let diez = 10
console.log(100 < 100);
console.log(100 < 101);
console.log("pz" < "hb");
console.log(`prueba ${"pz" > 130}`);
console.log(diez.toString());
console.log(parseInt("a"));

// Mayor o igual

console.log( 22 >= 23);
console.log( 22 >= 22);
console.log( 22 >= 22);

// Menor o igual


console.log(99 <= 98);
console.log(99 <= 100);
console.log(99 <= 99);

console.log(" -------------------------------------- ------------------------------------");

// Operadores Logicos

// &&
console.log((5 < 4) && (false));
console.log((5 < 6) && (5 !== 5));
console.log((5 <= 100) && (5 != "5"));
console.log((5 <= 100) && (5 != "5"));

// ||

console.log((false) || (false) );
console.log((true) || (true) );
console.log(10 == "10" || "hola" != "hola" || false);


// NOT !

console.log(!(5 === "5"));
console.log(!(10> 9));



 for (let i=1; i<10;i++){
    console.log(i)
 }
let contar= 1



do { console.log(contar)
contar++
} while (contar <=6 && false);



let ioo=11
while (ioo<=10) {
    console.log(ioo)
    ioo++    
}

let nombres=["nombres","Santiago","Juan"]
for (let i=0 ; i< nombres.length ; i++) {
    console.log(nombres[i]);
}
let nombre1 = " maria"
//const nombre = prompt(" ingresa un nombre: ")
switch(nombres){
    case"mike":
        console.log(" es mike")
        break;
    case"carlos":
    console.log(" es carlos")
    break;
    default:
            console.log("no es ninguno");
            break;
}

let nombre2 = " maria"
//const num = prompt(" ingresa un numero: ")
//const num1 = prompt(" ingresa un numero: ")



//nombres=["nombres","Santiago","Juan"]

for (i of nombres) {
    console.log(i);
} 
for (i in nombres) {
    console.log(nombres[i]);
} 


let v=3; v2=3
if (v<v2) {
    console.log("VERDADERO");
    }
else if(v==v2){
    console.log("iguales");
    

}
else{
    console.log("FALSE");
    
}

if(true){

    if (false) {
        console.log("Segundo if");
        
    }else {
        console.log("Segundo if etrando en else");
    }
       
}else{
    console.log("Error!");
}
altura= 0
// altura = parseInt(prompt("introduce estatura"))
if (altura < 140) {
    console.log("Gnomo");
} else if (altura <= 160) {
    console.log("Normal");
} else if (altura <= 180) {
    console.log("Alto");
} else {
    console.log("Gigante");
}
ingresa = 0
// ingresa = prompt("ingresa un numero de 1 a 2")
switch (ingresa) {
    case "hamburguesa":
        result = "Hambuerguesa";
        break; // termina la ejecucion 
    case "2":
        result = "dos";
        break;

    default: // define un valor por defecto si no coincide ninguno
        result = "tres";
        break; 
    }
console.log(result);
// estudien













console.log("--------------------------------------------------------------------");
console.log("--------------------------------------------------------------------"); 
console.log("--------------------------------------------------------------------");
console.log("--------------------------------------------------------------------"); 
console.log("--------------------------------------------------------------------");
console.log("--------------------------------------------------------------------"); 
console.log("--------------------------------------------------------------------");
console.log("--------------------------------------------------------------------"); 
console.log("--------------------------------------------------------------------");
// for (const key in order) {
//     if (Object.prototype.hasOwnProperty.call(order, key)) {
//         const element = order[key];
//         console.log(element);
        
//     }
// }


let order= [
    {
        name: "Quinto",
        apellido: "picapiedra",
        genero: "M",
        estatura: 180,
        edad: 21,
        peso: 81,
        idiomas:[
            "ingles",
            "español",
            "italiano",
            "holandes"
        ]
    },
    {
        name: "Marta",
        apellido: "Perez",
        genero: "F",
        estatura: 170,
        edad: 29,
        peso: 70,
        idiomas:[
            "ingles",
            "español",
            "aleman"
        ],
        vivo : true
    }
]

//-- Acceder a valores de objetos

// for (let i = 0; i < order.length; i++) {
//     const element = order[i];
//     idiom = element.idiomas

//     console.log(idiom);
    

//     for (let index = 0; index < idiom.length; index++) {
//         const elemento = idiom[index];
//         if(elemento == "italiano"){
//             console.log(`usuario ${order[i].name} habla ${elemento}`);
            
//         }
        
//     }

//     console.log(`el elemnto ${i} de la array tiene nombre ${element.name}, tiene una edad de 
//         ${element.edad} y un peso de ${element.peso}`);
    
    
    
// }

// let numeros = [ [1, 2, 3, 5], [55, 6, 7], [8, 9 , 10], [11, 12, 14]]

// let total = 0
// for (let i = 0; i < numeros.length; i++) {
//     const element = numeros[i];
//     console.log(element);

//     for(let x = 0; x < element.length; x++){
//         const numero = element[x]
//         console.log(numero);
//          total += numero
//         }
//     }
//     console.log(total);




//-- Saber si un apropiedad existe object.hasOwnProperty("property")


console.log(order.hasOwnProperty("vivo"));
// order[0].vivo = true

// console.log(order);

for (let index = 0; index < order.length; index++) {
    const element = order[index];

    if (!element.hasOwnProperty("vivo")) {
        element.vivo = true
    }
    
    if (element.hasOwnProperty("vivo")) {
        element.vivo = false
    }

    if (element.hasOwnProperty("hijos")) {
        delete element.peso
    }
    


}
console.log(order);

2< 3 && 5>2

//-- Añadir propiedad al objeto


//-- Modificar valores


//-- Eliminar propiedades de objetos

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// •	Tienes una lista de productos y necesitas aplicar un 10% de descuento a los productos que superan los $200.
	const productos = [ 
    	    {nombre: "Televisor", precio: 300}, //indice 0
    	     {nombre: "Celular", precio: 200}, // indice 1
    	    {nombre: "Laptop", precio: 1000}, // indice 2
    	     {nombre: "Tablet", precio: 150}  // indice 3
    	    ];
    
            for (let index = 0; index < productos.length; index++) {
                const element = productos[index];
                
                if ( element.precio > 200) {
                    element.precio =  element.precio * 0.9
                }
            }
    
    // Tienes una lista de usuarios y necesitas filtrar aquellos que están activos.

    	const usuarios = [ 
        	    {nombre: "Laura", activo: true},
        	    {nombre: "Pedro", activo: false}, 
        	    {nombre: "Marta", activo: true},
        	    {nombre: "Jorge", activo: false}
        	     ];
        
activos = []

    for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];

        if (element.activo) {
            
            activos.push(element)

            usuarios.splice(index, 1)

        }
    }


console.log(activos);
console.log(usuarios);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

	const arrUsuarios = [
    	    {nombre: "Laura", edad: 30, activo: true},
    	    {nombre: "Pedro", edad: 25, activo: false},
    	    {nombre: "Marta", edad: 28, activo: true},
    	    {nombre: "Jorge", edad: 35, activo: false},
    	    {nombre: "Ana", edad: 40, activo: true} 
    	   ];
    
        let userActivos = []
        let sumaEdades = 0

           for (let i = 0; i < arrUsuarios.length; i++) {
            const element = arrUsuarios[i];
            
            if (element.activo) {
                userActivos.unshift(element)
                console.log(element.activo);
                
            }
  
        }
        
        for (let index = 0; index < userActivos.length; index++) {
            const elemento = userActivos[index];
            sumaEdades += elemento.edad / userActivos.length;
        }

        console.log(`suma = ${Math.round(sumaEdades)}`);
        console.log(`suma = ${sumaEdades.toFixed(0)}`);

        console.log((Math.floor(Math.random() * 11)));
        


        



console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


	const users = [
    	    { nombre: "Laura", edad: 30, activo: true, productos: [
    	        { nombre: "Televisor", precio: 300 }, { nombre: "Celular", precio: 200 }
    	    ] },
    	    { nombre: "Pedro", edad: 25, activo: false, productos: [
    	        { nombre: "Laptop", precio: 1000 }, { nombre: "Tablet", precio: 150 }
    	    ] },
    	    { nombre: "Marta", edad: 28, activo: true, productos: [
    	        { nombre: "Bicicleta", precio: 250 }, { nombre: "Audífonos", precio: 50 }
    	    ] },
    	    { nombre: "Jorge", edad: 35, activo: false, productos: [
    	        { nombre: "Consola", precio: 400 }, { nombre: "Monitor", precio: 180 }
    	    ] },
    	    { nombre: "Ana", edad: 40, activo: true, productos: [
    	        { nombre: "PC", precio: 1200 }, { nombre: "Impresora", precio: 180 }
    	    ] }
    	  ];
    
          let ActUser = []
          let promEdades = 0

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            console.log(user);
            console.log(user.activo);
            
            
            if (user.activo) {
                ActUser.push(user)
            }

        }
                 
        for (let index = 0; index < ActUser.length; index++) {
            const element = ActUser[index];
          promEdades += element.edad / ActUser.length

        }

        console.log(promEdades.toFixed(0));

        for (let index = 0; index < ActUser.length; index++) {
            const element = ActUser[index].productos
            
            for (let i = 0; i < element.length; i++) {
                const elemento = element[i];
                
                if (elemento.precio > 200) {
                    elemento.precio = elemento.precio * 0.9
                }
            }


        }
        
        console.log(ActUser);

        function pruebaFuncion (param1, param2) {
            console.log(param1 + param2); 
        }

        trigerFuntion = (param1, param2)=> {
            console.log(param1 + param2);
        }


        trigerFuntion2 = () => console.log("hola");
        

//-- Funcion constructora


