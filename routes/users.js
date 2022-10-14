import express from "express";
import { update, deleteUser, getUser, subscribe, unsubscribe, like, dislike } from "../controllers/user.js";

const router = express.Router();

// update user
router.put("/:id", update);

// delete user
router.delete("/:id", deleteUser);

// get user
router.get("/find/:id", getUser);

// subscribe user
router.put("/sub/:id", subscribe);

// unsubscribe user
router.put("/unsub/:id", unsubscribe);

// like a video
router.put("/like/:videoId", like);

// dislike a video
router.put("/dislike/:videoId", dislike);


export default router;