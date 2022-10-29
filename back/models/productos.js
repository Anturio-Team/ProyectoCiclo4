const mongoose=require("mongoose")
const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Ingresa el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre no puede tener más de 120 caracteres"]
    },
    precio:{
        type: Number,
        required:[true,"Ingresa el precio del producto."],
        maxLength:[6, "El precio del producto no puede exceder los $999.999 pesos"],
        default: 0.0
    },
    descripcion:{
      type:String,
      required:[true,"Ingresa la descripción del producto"]
    },
    calificacion:{
        type: Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Selecciona la categoría del producto."],
        enum:{
            values:[
                "Ramos",
				"Ramos con frutas",
                "Floreros",
                "Bouquets y cajas",
                "Plantas",
                "Cajas"
            ]
        }
    },
    inventario:{
        type: Number,
        required:[true, "Ingresa el stock actual del producto"],
        maxLength:[3,"El inventario del producto no puede exceder las 999 unidades"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("productos",productosSchema)