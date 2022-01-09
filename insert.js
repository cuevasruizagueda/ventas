db.orders.deleteMany()
db.orders.insertMany( [
   { _id: 0, 
      productName: "bolso",
       categoria: "complemento", 
       cantidad: 100,
       precio_coste: 50,
       precio_venta: 70,
       fecha_venta: ISODate("2020-04-01T08:00:00Z")  },
   { _id: 1, productName: "tacon", categoria: "calzado", cantidad: 200, precio_coste: 40, precio_venta: 60,  fecha_venta: ISODate("2022-01-01T08:00:00Z") },
   { _id: 2, productName: "camisa", categoria: "ropa", cantidad: 300, precio_coste: 15,  precio_venta: 25,  fecha_venta: ISODate("2022-01-01T08:00:00Z")},
   { _id: 3, productName: "colonia", categoria: "cosmetico", cantidad: 150, precio_coste: 50,  precio_venta: 70,  fecha_venta: ISODate("2021-01-11T08:00:00Z") },
   { _id: 4, productName: "jabon", categoria: "higiene", cantidad: 500, precio_coste: 5,  precio_venta: 15,  fecha_venta: ISODate("2022-01-01T08:00:00Z") },
   { _id: 5, productName: "gel", categoria: "higiene", cantidad: 100, precio_coste: 15,  precio_venta: 24,  fecha_venta: ISODate("2022-01-01T08:00:00Z") },
   { _id: 6, productName: "zapatilla", categoria: "calzado", cantidad: 10, precio_coste: 30,  precio_venta: 50,  fecha_venta: ISODate("2021-12-12T08:00:00Z") },
   { _id: 7, productName: "gafas sol", categoria: "complemento", cantidad: 10, precio_coste: 150,  precio_venta: 260,  fecha_venta: ISODate("2021-12-12T08:00:00Z") },
   { _id: 8, productName: "deportivas", categoria: "calzado", cantidad: 20, precio_coste: 10,  precio_venta: 30,  fecha_venta: ISODate("2022-01-01T08:00:00Z") },
   { _id: 9, productName: "cinturon", categoria: "complemento", cantidad: 100, precio_coste: 15,  precio_venta: 30,  fecha_venta: ISODate("2022-01-01T08:00:00Z") },
   { _id: 10, productName: "colonia_dog", categoria: "mascota", cantidad: 10, precio_coste: 15,  precio_venta: 30,  fecha_venta: ISODate("2022-01-01T08:00:00Z") },
   { _id: 11, productName: "pelota", categoria: "mascota", cantidad: 30, precio_coste: 5,  precio_venta: 10,  fecha_venta: ISODate("2021-12-12T08:00:00Z") },
   { _id: 12, productName: "manta_huesitos", categoria: "mascota", cantidad: 10, precio_coste: 5,  precio_venta: 10,  fecha_venta: ISODate("2020-05-01T08:00:00Z") },
   { _id: 13, productName: "chaleco", categoria: "mascota", cantidad: 10, precio_coste: 10,   precio_venta: 20,  fecha_venta: ISODate("2020-04-05T08:00:00Z") },
   { _id: 14, productName: "chaqueta", categoria: "mascota", cantidad: 10, precio_coste: 15,  precio_venta: 30,  fecha_venta: ISODate("2020-08-11T08:00:00Z") },
   { _id: 15, productName: "vaqueros", categoria: "ropa", cantidad: 10, precio_coste: 15,  precio_venta: 30,  fecha_venta: ISODate("2020-07-09T08:00:00Z") },
   { _id: 16, productName: "chaqueta", categoria: "ropa", cantidad: 10, precio_coste: 30,  precio_venta: 60,  fecha_venta: ISODate("2020-12-13T08:00:00Z") },
   { _id: 17, productName: "copaM", categoria: "higiene", cantidad: 20, precio_coste: 20,  precio_venta: 40,  fecha_venta: ISODate("2020-02-25T08:00:00Z") },
   { _id: 18, productName: "toallas", categoria: "hogar", cantidad: 30, precio_coste: 15,  precio_venta: 25,  fecha_venta: ISODate("2020-04-01T08:00:00Z") },
   { _id: 19, productName: "sabanas", categoria: "hogar", cantidad: 40, precio_coste: 20,  precio_venta: 40,  fecha_venta: ISODate("2020-05-26T08:00:00Z") },
   { _id: 20, productName: "cuadro", categoria: "decoracion", cantidad: 100, precio_coste: 15, precio_venta: 30,  fecha_venta: ISODate("2021-04-01T08:00:00Z") },
   { _id: 21, productName: "mantel", categoria: "decoracion", cantidad: 130, precio_coste: 3,  precio_venta: 8,  fecha_venta: ISODate("2021-04-02T08:00:00Z") },
   { _id: 22, productName: "cojin", categoria: "hogar", cantidad: 100, precio_coste: 5,  precio_venta: 10,  fecha_venta: ISODate("2021-04-03T08:00:00Z") },
   { _id: 23, productName: "florero", categoria: "decoracion", cantidad: 60, precio_coste: 15,  precio_venta: 30,  fecha_venta: ISODate("2020-03-01T08:00:00Z") },
   { _id: 24, productName: "marco", categoria: "decoracion", cantidad: 110, precio_coste: 5,  precio_venta: 10,  fecha_venta: ISODate("2020-05-01T08:00:00Z") },
   { _id: 25, productName: "reloj_oro", categoria: "joyeria", cantidad: 100, precio_coste: 150,  precio_venta: 300,  fecha_venta: ISODate("2020-06-01T08:00:00Z") },
   { _id: 26, productName: "pulsera_plata", categoria: "joyeria", cantidad: 111, precio_coste: 50,  precio_venta: 200,  fecha_venta: ISODate("2020-07-01T08:00:00Z") },
   { _id: 27, productName: "anillo_diamante", categoria: "joyeria", cantidad: 311, precio_coste: 500, precio_venta: 1100,  fecha_venta: ISODate("2020-04-08T08:00:00Z") },
   { _id: 28, productName: "colgante", categoria: "joyeria", cantidad: 200, precio_coste: 15,  precio_venta: 30,  fecha_venta: ISODate("2020-04-01T08:00:00Z") },
   { _id: 29, productName: "pendientes_plata", categoria: "joyeria", cantidad: 129, precio_coste: 105,  precio_venta: 305,  fecha_venta: ISODate("2020-10-21T08:00:00Z") }
  
] )