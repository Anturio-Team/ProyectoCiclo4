const mongoose=require("mongoose")
const cartSchema=mongoose.Schema({
    orden:{
        type:String,
        required:[true,"Ingresa el número de la orden"],
        trim:true,
        maxLength:[12,"El número de orden no puede tener más de 12 caracteres"]
    },
    productID:{
        type:String,
        required:[true,"Ingrese el ID del producto"],
        trim:true,
        minLength:[24, "El ID de producto debe tener al menos 24 caracteres"]
    },
    productPrice:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model("cart",cartSchema)