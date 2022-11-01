const express=require("express")
const router=express.Router();

const {getSales, newSale, getsaleById, updatesale, deletesale} = require("../controllers/salesController") //Traemos la respuesta json desde el controlador

router.route('/ventas').get(getSales) //ruta para ver todas las ventas
router.route('/venta/nuevo').post(newSale); //establecemos la ruta
router.route('/venta/:id').get(getsaleById); //ruta para ver una venta usando su ID
router.route('/venta/:id').delete(deletesale); //ruta para borrar una venta usando su ID


module.exports=router;