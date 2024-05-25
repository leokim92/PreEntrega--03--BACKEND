const homeViewsRouter = require("./views/home.views.router.js")
const productsViewsRouter = require("./views/products.views.router.js")
const cartViewsRouter = require("./views/cart.views.router.js")
const realTimeProductsViewsRouter = require("./views/realTimeProducts.views.router.js")
const chatViewsRouter = require("./views/chat.views.router.js")
const productViewsRouter = require("./views/product.views.router.js")
const userViewsRouter = require("./views/user.views.router.js")
const checkoutViewsRouter = require("./views/checkout.view.router.js")

const productsApiRouter = require("./api/products.api.router.js")
const cartsApiRouter = require("./api/carts.api.router.js")
const userApiRouter = require("./api/user.api.router.js")
const sessionApiRouter = require("./api/session.api.router.js")

const authMiddleware = require("../middleware/authMiddleware.js")

const routes = (app) => {
  app.use(authMiddleware)
  app.use("/api/products", productsApiRouter)
  app.use("/api/carts", cartsApiRouter)
  app.use("/api/user", userApiRouter)
  app.use("/api/session", sessionApiRouter)
  app.use("/", homeViewsRouter)
  app.use("/products", productsViewsRouter)
  app.use("/realTimeProducts", realTimeProductsViewsRouter)
  app.use("/chat", chatViewsRouter)
  app.use("/cart", cartViewsRouter)
  app.use("/product", productViewsRouter)
  app.use("/user", userViewsRouter)
  app.use("/checkout", checkoutViewsRouter)
}

module.exports = routes