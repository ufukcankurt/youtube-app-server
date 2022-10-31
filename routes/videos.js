import express from "express";
import { addVideo, addView, getByTag, random, search, sub, trend } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const route = express.Router();

// create a video
route.post("/", verifyToken, addVideo);
route.put("/:id", verifyToken, addVideo);
route.delete("/:id", verifyToken, addVideo);
route.post("/find/:id", addVideo);
route.put("/view/:id", addView);
route.get("/trend", trend);
route.get("/random", random);
route.get("/sub", verifyToken, sub);

//get a video by title
route.get("/search", search);
//get a video by tags
route.get("/tags", getByTag);

export default route;