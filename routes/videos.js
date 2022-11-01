import express from "express";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const route = express.Router();

// create a video
route.post("/", verifyToken, addVideo);
route.put("/:id", verifyToken, updateVideo);
route.delete("/:id", verifyToken, deleteVideo);
route.get("/find/:id", getVideo);
route.put("/view/:id", addView);
route.get("/trend", trend);
route.get("/random", random);
route.get("/sub", verifyToken, sub);

//get a video by title
route.get("/search", search);
//get a video by tags
route.get("/tags", getByTag);

export default route;