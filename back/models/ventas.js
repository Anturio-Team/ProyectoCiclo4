const mongoose=require("mongoose")

const ventasSchema=mongoose.Schema({
    fecha:{
        type:Date,
        default:Date.now
    },
    idVenta:{
        type:String,
        required:[true,"Por favor ingresa el ID de la venta"],
        trim:true,
        maxLength:[12,"El ID de la venta no debe exceder los 12 caracteres."]
    },
    valor:{
        type:Number,
        required:[true,"Por favor ingrese el valor total de la venta"],
        default: 0
    }

})

module.exports=mongoose.model("ventas",ventasSchema)