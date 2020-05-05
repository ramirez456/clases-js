let tutor= {
   nombre: "Max Houston",
   apellido: "Ramirez Martel",
   nombre_completo: function(){
        setTimeout(()=>{ console.log(this.nombre+' '+this.apellido) }, 500);
  }
}

//tutor.nombre_completo();
let arreglo =[12,13,14,15,16,17]; 
hola = arreglo.filter((el)=>{
  return el%2!=0
});   //filtra

let el= arreglo.find(el => el ==12 ); //busca

let arr = arreglo.map(el=>el*el);

//hola.forEach((elemento)=>{console.log(elemento)})

//console.log(el)
console.log(arr)

/**
 * si asignas un valor directo a nuna variable sin let const o var este
 * tendrá un alcance global
 * si declaras con var este valor tiene alcance dentro de la función de
 * null= objet  => el valor null es un objet no que no existe valor en esa variable
 * null es aucencia de valor de esa variable
 * undefined no existe esa variable
 * == compara valore
 * === compara valores y tipos de datos.
 *  la arroy function => no edita valores del dist
 * una constante es un valor en memoria no combante
 * un variable es un valor reasignable
 * compilado => Signiifica que sabes donde esta el valor antes de ejecutarlo
 * interpretado => significa que sabes donde esta el valor antes de ejecutarlo
 * y si hay algo mal no ejecuta el programa.
 * parametro y argumento
 * los parametros son las variables que van en las funciones y
 * los argumentos son los valores que toman estos parametros en las funciones.
 * un un arregle al ser declarado com let 
 * este tiene funciones en el  como find filter etc map
 * find() para buscar un valor 
 * filter para hacer un where dentro de un array
 * map recorre todo un arreglo hace operaciones y asigna los nuevos valores.
 * 
 * asincrono no es sincrono eso queire decir que se pueden ejecutar  varios procesos a la vez
 * algo así como lo hilos y sub hilos  de java
 * entonces mientras se va ejecuntando un proceso se puede ejecutar otroas mas en paralelo
 * 
 * con promise.all([aqui se le puede mandas 
 * varias promesas])
 * las funciones for on y for in
 * for on es como un foreach intera sobre los elementos
 * pero el for in intera sobre las propiedades de un objecto.
 * 
 * un función asyn sincrono siempre devuelve una promesa
 * al usar asycs y promesas lo que pasa es que las promesas se convierten en valores normales
 * y por consoguiente ya puedes hacer operaciones con las promesas.
 */