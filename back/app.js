const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")

app.use(express.json());

//importamos las rutas
const productos=require("./routes/products")
const ventas=require("./routes/sales")
const cart=require("./routes/cart")

app.use('/api',productos) 
app.use('/api',ventas) 
app.use('/api',cart) 

//manejo de errores en el middleware
app.use(errorMiddleware)

module.exports=app