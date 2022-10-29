const express=require("express")
const router=express.Router();
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController")
router.route('/productos').get(getProducts) //ruta para ver todos los productos
router.route('/producto/nuevo').post(newProduct); //ruta para crear nuevos productos
router.route('/producto/:id').get(getProductById); //ruta para ver un producto usando su ID
router.route('/producto/:id').put(updateProduct); //ruta para actualizar un producto usando su ID
router.route('/producto/:id').delete(deleteProduct); //ruta para borrar un producto usando su ID

module.exports=router;