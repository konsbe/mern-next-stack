import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  // likeCount: {
  //   type: Number,
  //   default: 0,
  // },
  likeList: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ProjectModel = mongoose.model("ProjectModel", projectSchema);

export default ProjectModel;
