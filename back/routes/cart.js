const express=require("express")
const router=express.Router();

const {newProduct, getCartById, deletecart} = require("../controllers/cartController")
router.route('/cart/nuevo').post(newProduct); //ruta para agregar nuevos productos al carrito
router.route('/cart/:id').get(getCartById); //ruta para ver los productos en el carrito usando su ID
router.route('/cart/:id').delete(deletecart); //borramos el carrito de compras usando su ID

module.exports=router;