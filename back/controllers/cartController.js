const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const carrito=require("../models/cart");
const ErrorHandler = require("../utils/errorHandler");

//Crear nuevo producto /api/productos
exports.newProduct=catchAsyncErrors(async(req,res,next)=>{
    const cart= await carrito.create(req.body);

    res.status(201).json({
        success:true,
        cart
    })
})

//Ver el carrito usando el ID
exports.getCartById= catchAsyncErrors( async (req, res, next)=>{
    const cart = await carrito.find({orden: req.params.id})
    //sumamos el precio total de los productos en la orden
    const total = await carrito.aggregate([ { $match: {orden: req.params.id}}, {$group: {_id: "$orden", "Total orden": {$sum: "$productPrice"}}}]) 
    
    if (!cart){
            return next(new ErrorHandler("No se encuentra el pedido", 404))
        }
    
    res.status(200).json({
        success:true,
        cantidad: cart.length,
        message:"Productos en el carrito: ",
        cart,
        total,
    })
})

//Borrar carrito
exports.deletecart= catchAsyncErrors(async (req,res,next) =>{
    const cart= await carrito.find()
    
    if (!cart){
        return next(new ErrorHandler("Pedido no encontrado", 404))
    }
    await carrito.deleteMany({orden: req.params.id})
    res.status(200).json({
        success:true,
        message:"Tu carrito está vacío"
    })
})
