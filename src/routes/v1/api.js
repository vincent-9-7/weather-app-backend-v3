const Router = require("koa-router"); //koa-router创建router.get/post...
const userController = require ('../../controllers/api/v1/userController')
const router = new Router();

router.get("/", async (ctx) => {
    ctx.body ="SUCCESS!";
});

router.get("/users",userController.index); 
router.get("/users/:id",userController.show); 

router.post("/users",userController.store); 

router.delete("/users/:id",userController.delete); 
router.delete("/users_id/:_id",userController.deleteId); 

router.put("/users/:id",userController.update); 
router.put("/users_id/:_id",userController.updateId); 


module.exports = router;