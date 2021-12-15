const router = require("express").Router();
const authRouter = require('../controllers/authController')
const validationMiddleware = require('../middlewares/validation-middleware')
const authMiddleware = require('../middlewares/auth-middleware');

router.get("/me", authRouter.meAboutDetails);

router.post("/signup",validationMiddleware.validateNewUser(), authRouter.registerPost);

router.get("/userfind", authMiddleware, authRouter.findUser);

router.post("/signin",authRouter.signIn);

router.post("/getallusers", authMiddleware, authRouter.getallusers);

router.post("/updateuser", authMiddleware, authRouter.updateUser);


module.exports = router;