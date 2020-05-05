/**
 * ///esto fue un callback
 * const request = require('request')
request('https://google.com',function(){console.log('terminamos la consulta')})
console.log('yo voy despues de la peticion de google')
*/

/** ahora aremos promesas
fullfiled
rejected
pending
setled*/
// let total = 0
// let numeros= [1,2,3,4,5,6]
// let numeros2= [7]
// function sumar(){
//     for(numero of arguments){
//         total += numero;
//     }
//     return total;
// }
// //let result=sumar.apply(this,numeros)
// let result=sumar(...numeros,...numeros2)
// //... lo que hace los tres puntos es convertir de [1,2,3,4] => 1,2,3,4
// console.log(...numeros,...numeros2)
// console.log(result)



// let objeto ={
//     clave:3
// }
// let objetoDos ={
//     Otraclave:4
// }
// let newObj = {
//     ...objeto,
//     ...objetoDos
// }
// console.log(newObj)
// for(propiedad in newObj){
//     console.log(propiedad)
// }

// async function sumita(valor1, valor2){
//     return valor1 + valor2
// }
// async function calcular(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(resolve,300,5)
//     })
// }

// (async function(){
//     let resultado = await new Promise((resolve, reject)=>{
//         setTimeout(resolve,400,5)
//     })
//     let valor2 = await new Promise((resolve, reject)=>{
//         setTimeout(resolve,500,10)
//     })
//     console.log(resultado*valor2)
// })();

// const fetch = require("node-fetch");

// async function showGitHubProjects(){
//     let response = await fetch('https://api.github.com/users/ramirez456/repos')
//     let resp = await response.json()
//     console.log(resp)
// }
//showGitHubProjects()
//promesa.then(()=>{}).catch((err)=>{console.log(err)});

// (async function(){
//     try{
//         let promesa = await Promise.reject('error')
//     }catch (e) {
//         console.log(e)
//     }
// })();




//console.log(resultado*valor2)


//generador 
//para que sea un función iteradora se necesita que tenga el asterisco.
function* counter(){
    for(var i=1; i<=10; i++){
        yield i
    }
}
let generator = counter()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
/**
 * cada vez que haces ejecutas un next() se itera una vez mas
 */

// let numeros = [1,2,3,4]
// for(numero of generator){
//     console.log(numero)
// }

//mezcla de interadores y generadores

// let  rango={
//     min:null,
//     max:null,
//     curentValue:null,
//     [Symbol.iterator](){
//         return this
//     },next(){
//         if(this.curentValue==null) this.curentValue=this.min
//         let result={}
//         if(this.curentValue>=this.min && this.curentValue<=this.max){
//             result={value:this.curentValue,done:false}
//             this.curentValue++;
//         }else{
//             result={done:true}
//         }
//         return result
//     }
// }
// rango.min=5
// rango.max=10

// for(n of rango){
//     console.log(n)
// }

//otro ejemplo de interadores
let rango ={
    min:null,
    max:null,
    [Symbol.iterator](){
        return this.generator();
    },generator:function*(){
        //el * es el que lo  hace iterador
        for(var i=this.min; i<=this.max;i++){
            yield i
        }
    }
}
rango.min =0;
rango.max=20;
for(n of rango){
    console.log(n)
}

Promise.resolve().then(function(){console.log("Hola")})
console.log("Mundo");
