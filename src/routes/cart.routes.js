import { Router } from "express"
import { cartManager } from "../app"

export const cartsRouter = Router()

cartsRouter.post('/', async (req, res) => {
    try {
        const response = await cartManager.newCart()
        res.json(response)
    } catch (error) {
        res.send('Error al crear el carrito')
    }
})

cartsRouter.get('/:cid', async (req, res) => {
const {cid} = req.params
    try{
        const response = await cartManager.getCartProducts(cid)
        res.json(response)
    } catch {
        res.send("Error al agregar prodcuto al carrito")
    }
})

cartsRouter.post('/:cid/products/:pid', async (req, res) => {
    const {cid, pid} = req.params
    try{
        const response = await cartManager.addProductsToCart(cid, pid)
        res.send("Producto agregado")
    } catch {
        res.send("Error al guardar prodcuto al carrito")
    }
})

