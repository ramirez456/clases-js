let p1 = new Promise((resolve, reject) =>setTimeout(resolve, 500,'hola Mundo'));
let p2 = new Promise((resolve, reject) =>setTimeout(resolve, 600,'hola Mundo 2'));

let saluda = ()=>console.log('hola a todos');
// p1.then(function(){
//     p2.then(function(){ 
//         saluda();    
//     })
// }).catch(err){
//     console.log(err)
// }

Promise.all([p1, p2]).then(resultado=>{
    console.log(resultado)
    saluda();
});