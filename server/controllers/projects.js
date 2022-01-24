import mongoose from "mongoose";
import ProjectModel from "./../models/projectModel.js";
// import pkg from "mongoose";
// const { mongoose } = pkg;
//   async (req, res) => {
//   try {
//     const projectModels = await ProjectModel.find();
//     res.send("This Works!");
//     console.log(ProjeModel);
//     console.log(projectModels);
//     res.status(200).json(projectModels);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };
export const getProjects = async (req, res) => {
  try {
    const projectModels = await ProjectModel.find();
    // res.send("This Works!");
    // console.log(ProjeModel);
    // console.log(projectModels);
    res.status(200).json(projectModels);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await ProjectModel.findById(id);
    // console.log(project, "project");
    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  // res.send("Project Creation");
  const project = req.body;
  const newProject = new ProjectModel(project);
  try {
    await newProject.save();

    // res.status(201).json(newProject);
  } catch {
    // res.status(409).json({ message: err.message });
  }
};

export const updateProject = async (req, res) => {
  const { id: _id } = req.params;
  const project = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with this id");

  const updateProject = await ProjectModel.findByIdAndUpdate(
    _id,
    { ...project, _id },
    {
      new: true,
    }
  );

  res.json(updateProject);
};


export const deleteProject = async (req, res) => {
  const { id: _id } = req.params;
  // console.log(req.paramms)
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with this id");

  await ProjectModel.findByIdAndRemove(id);
  console.log("delete");
  res.json({ message: "Project Deleted" });
};

export const likeProject = async (req, res) => {
  const { id } = req.params;
  // console.log(res, "req.body");
  // console.log(req.id.body);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with this id");
  const project = await ProjectModel.findById(id);

  const updatedProject = await ProjectModel.findByIdAndUpdate(
    id,
    { likeCount: project.likeCount + 1 },
    { new: true }
  );

  res.json(updatedProject);
};