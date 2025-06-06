import express from "express";
import { getLogin, postLogin, getJoin, postJoin } from "../controllers/userController"; 
import {home, search} from "../controllers/videoController";


const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;