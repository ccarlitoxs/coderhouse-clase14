import  express  from "express";
import { apiControllers } from '../controllers/index.js';


const router = new express.Router()

router.get('/randoms', apiControllers.getRandoms)
router.get('/info',apiControllers.getInfo)

export {router}