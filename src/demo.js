export const hola3 = () => {
        console.log("Hola3")
}



const cuatro = 4
const arrayNumber = [0,1,2,3]
const newArrayNumber = [arrayNumber ,cuatro]


function hola1(param1, param2){
    console.log("hola1")
}
 
const hola2 = (param1, param2) => {
    console.log("hola2", param1 , param2 )
}



const findX = (arreglo, valor) => {

    let rt = false
    arreglo.forEach(element => {
        console.log(element)
        if(valor == element){
            rt = true
        }

    });
    return rt
}

const arregloData = ["a","b","c","d","e"]

console.log( findX(arregloData, "b") )


//hola1();

//hola2(1,2);

