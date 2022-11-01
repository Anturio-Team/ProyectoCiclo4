const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const venta=require("../models/ventas");
const ErrorHandler = require("../utils/errorHandler");

//Registrar una nueva venta /api/ventas
exports.newSale=catchAsyncErrors(async(req,res,next)=>{
    const sale= await venta.create(req.body);
    res.status(201).json({
        success:true,
        sale
    })
})

//Ver la lista de ventas
exports.getSales=catchAsyncErrors(async (req,res,next) =>{
    const ventas= await venta.find();
    const total = await venta.aggregate([ { $match: {orden: req.params.id}}, {$group: {_id: "$orden", "Total ventas": {$sum: "$valor"}}}])

    if (!ventas){
        return next(new ErrorHandler("Informacion no encontrada", 404))
    }
    res.status(200).json({
        success:true,
        cantidad: ventas.length,
        ventas,
        total
    })
})

//Ver una venta por ID
exports.getsaleById= catchAsyncErrors( async (req, res, next)=>{
    const sale= await venta.findById(req.params.id)
    
    if (!sale){
            return next(new ErrorHandler("Venta no encontrado", 404))
        }
    res.status(200).json({
        success:true,
        message:"Esta es la información de la venta: ",
        sale
    })
})

//Eliminar una venta
exports.deletesale= catchAsyncErrors(async (req,res,next) =>{
    const sale= await venta.findById(req.params.id) //Variable de tipo modificable
    if (!sale){
        return next(new ErrorHandler("Venta no encontrada", 404))
    }
    await sale.remove();//Eliminamos la venta
    res.status(200).json({
        success:true,
        message:"Venta eliminada correctamente"
    })
})

