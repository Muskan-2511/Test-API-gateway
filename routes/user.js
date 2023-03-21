import express from "express";
const router = express.Router();

import { login, signup,getVideo} from "../controller/user-controller.js";
import auth from '../middleware/auth.js';

router.post("/login", login);
router.post("/signup", signup);
router.post('/getVideo',auth,getVideo);


export default router;