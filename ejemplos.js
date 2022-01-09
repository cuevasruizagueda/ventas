db.orders.insertMany( [
    { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
    { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
    { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
    { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
    { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
    { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
 ] )

 db.orders.aggregate( [
    { $match: { status: "urgent" } },
    { $group: { _id: "$productName", sumQuantity: { $sum: "$quantity" } } }
 ] )
 /*arrays de etapas*/
 /* dame la cantidad total de los productos urgentes para cada producto:
 1primera etapa: $match
 2utiliza un campo subrayado _id, es un campo que va con el $group, con un criterio 
de agrupacion, es decir todos los que tengan un mismo criterio(forman un grupo)
3no filtro, agrupo y realizo operaciones de grupo.
OPERADOR $SUM: ACTUA SOBRE UN GRUPO DE DOCUMENTOS
(SUMA TODOS LOS VALORES DEL CAMPO QTY PARA EL GRUPO)
*/
db.orders.aggregate( [
   { $match: { status: "urgent" } }])
/*TAMBIEN LO PUEDO HACER CORTANDO*/


db.orders.aggregate( [
   { $match: { status: "urgent" } },
   { $group: { _id: "$productName", sumQuantity: { $sum: "$quantity" }}},
] )

/*EJEMPLO
SUMA LOS DOCUMENTOS DE CADA CAMPO*/

db.orders.deleteMany()
db.orders.insertMany( [
   { _id: 0, productName: "bolso", categoria: "complemento", cantidad: 10, preciounidad: 150  },
   { _id: 1, productName: "tacon", categoria: "calzado", cantidad: 20, preciounidad: 40 },
   { _id: 2, productName: "camisa", categoria: "ropa", cantidad: 30, preciounidad: 15},
   { _id: 3, productName: "colonia", categoria: "cosmetico", cantidad: 15, preciounidad: 50 },
   { _id: 4, productName: "jabon", categoria: "higiene", cantidad: 50, preciounidad: 5 },
   { _id: 5, productName: "gel", categoria: "higiene", cantidad: 10, preciounidad: 15 },
   { _id: 6, productName: "zapatilla", categoria: "calzado", cantidad: 10,preciounidad: 30 },
   { _id: 7, productName: "gafas sol", categoria: "complemento", cantidad: 10,preciounidad: 150 },
   { _id: 8, productName: "pintalabios", categoria: "cosmetico", cantidad: 10,preciounidad: 15 }
] )

db.orders.aggregate( [
   {  $group: {  
      _id:"$categoria", 
   cantidad:{ $sum: 1 } 
}}
] )

/*QUIERO SABER LAS UNIDADES TOTALES QUE TENGO DE CADA CATEGORIA*/
db.orders.aggregate( [
   {  $group: {  _id:"$categoria", 
   cantidad:{ $sum: 1 },
cantidadcategoria:{$sum: "$cantidad"} }}
] )

/* CUANTO DINERO TENEMOS*/ 
db.orders.aggregate( [
   {  $group: {  _id: null, dinerototal:{$sum:{$multiply: [ "$preciounidad", "$cantidad"] }}} }    
] )
/* null significa que todas las operaciones de agrupacion se hacen con todos los documentos*/ 
/* QUIERO LOS EUROS TOTALES POR CADA CATEGORIA*/
db.orders.aggregate( [
   {  $group: {  _id: "$categoria", dinerototal:{$sum:{$multiply: [ "$preciounidad", "$cantidad"] }}} }    
] )

/*QUE NUMERO DE ARTICULOS TENGO POR CADA CATEGORIA*/
db.orders.aggregate( [
   {  $group: {  _id: "$categoria", numerodearticulos:{$sum:{$min: [ "$preciounidad", "$cantidad"] }}} }    
] )

