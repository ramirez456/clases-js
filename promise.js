const request = require('request')
function leer(url){
    return new Promise(function(resolve, reject){
        request(url, function(err, response){
            if(err){
                reject(err)
            }else{
                resolve(response)
            }
        })
        //reject(new Error('No se pudo comppletar'))
    })
}
// function asincrono(){
//     return new Promise((resolve, reject){
//         resolve('Todo salio bien')
//         reject(new Error('No se pudo comppletar'))
//     })
// }
leer('https://easybill.pe')
.then(function(response){
    console.log(response)
}).catch(function(err){
    console.log(err)
})