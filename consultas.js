db.orders.aggregate( [
    { $match: { status: "urgent" } },
    { $group: { _id: "$productName", sumQuantity: { $sum: "$quantity" } } }
 ] )


db.orders.aggregate( [
    { $match: { status: "urgent" } }])
 /*TAMBIEN LO PUEDO HACER CORTANDO*/
 
 
 db.orders.aggregate( [
    { $match: { status: "urgent" } },
    { $group: { _id: "$productName", sumQuantity: { $sum: "$quantity" }}},
 ] )
 
 /*EJEMPLO
 SUMA LOS DOCUMENTOS DE CADA CAMPO*/
 
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
    {  $group: {  _id: null, dinerototal:{$sum:{$multiply: [ "$precio_venta", "$cantidad"] }}} }    
 ] )
 /* null significa que todas las operaciones de agrupacion se hacen con todos los documentos*/ 
 /* QUIERO LOS EUROS TOTALES POR CADA CATEGORIA*/
 db.orders.aggregate( [
    {  $group: {  _id: "$categoria", dinerototal:{$sum:{$multiply: [ "$precio_venta", "$cantidad"] }}} }    
 ] )
 
 /*QUE NUMERO DE ARTICULOS TENGO POR CADA CATEGORIA*/
 db.orders.aggregate( [
    {  $group: {  _id: "$categoria", numerodearticulos:{$sum:{$min: [ "$precio_venta", "$cantidad"] }}} }    
 ] )
 
 