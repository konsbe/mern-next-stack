import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";
// import posts from './routes/posts.js'
import next from "next";

const CONNECTION_URL =
  "mongodb+srv://mern_stack:mernstack123@cluster0.omcc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
export const handle = nextApp.getRequestHandler(); //part of next config

import {
  createProject,
  updateProject,
  getProject,
  deleteProject,
  likeProject,
} from "./controllers/projects.js";

import { signUpUser, logInUser } from "./controllers/user.js";

// import url from "./routes/blockchainR.js";
import ProjectModel from "./models/projectModel.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import blockchainRoutes from "./routes/blockchainRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
import auth from "./middleware/auth.js";

nextApp.prepare().then(() => {
  const app = express();
  // express code here

  app.use(bodyParser.json({ limit: "30mb", extended: true }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors());

  //express routes here
  //projects rutes
  app.use("/projects/api", projectsRoutes);
  app.use("/projects/api/likeProject/:id", projectsRoutes);
  app.patch("/projects/api/:id", auth, updateProject);
  app.patch("/projects/api/likeProject/:id", auth, likeProject);
  app.get("/projects", async (req, res) => {
    const actualPage = "/projects";
    const number = 2;
    try {
      const projectModels = await ProjectModel.find();
      const queryParams = projectModels;

      nextApp.render(req, res, actualPage, queryParams, number);
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  });
  app.delete("/projects/api/:id", auth, deleteProject);
  app.get("/about", async (req, res) => {
    const actualPage = "/about";

    try {
      nextApp.render(req, res, actualPage);
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  });

  app.post("/projects", auth, createProject);
  //blockcain routes
  app.use("/blog/blockchain/api", blockchainRoutes);
  // user routes
  // app.use("/user", userRoutes);
  app.get("/user", async (req, res) => {
    const actualPage = "/projects";
    const number = 2;
    try {
      const projectModels = await ProjectModel.find();
      const queryParams = projectModels;

      nextApp.render(req, res, actualPage, queryParams, number);
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  });
  app.post("/user/signup", signUpUser);
  app.post("/user/login", logInUser);

  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));
  // const app = express();
});
// mongoose.set("useFindAndModify", false);
