const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto=require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");

//Ver el listado de todos los productos
exports.getProducts=catchAsyncErrors(async (req,res,next) =>{
    const productos= await producto.find();
    if (!productos){
        return next(new ErrorHandler("No hay productos que mostrar", 404))
    }

    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
})

//Ver un producto por ID
exports.getProductById= catchAsyncErrors( async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    
    if (!product){
            return next(new ErrorHandler("No se encuentra el producto", 404))
        }
    
    res.status(200).json({
        success:true,
        message:"Información del Producto: ",
        product
    })
})

//Actualizar un producto
exports.updateProduct= catchAsyncErrors(async (req,res,next) =>{
    let product= await producto.findById(req.params.id)
    if (!product){
        return next(new ErrorHandler("No se encuentra el producto", 404))
    }
    
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    });
    
    res.status(200).json({
        success:true,
        message:"La información del producto se ha actualizado correctamente",
        product
    })
})


//Eliminar un producto
exports.deleteProduct= catchAsyncErrors(async (req,res,next) =>{
    const product= await producto.findById(req.params.id)
   
    if (!product){
        return next(new ErrorHandler("No se encuentra el producto", 404))
    }

    await product.remove();
    res.status(200).json({
        success:true,
        message:"El producto se ha eliminado correctamente"
    })
})

//Crear nuevo producto /api/productos
exports.newProduct=catchAsyncErrors(async(req,res,next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
})