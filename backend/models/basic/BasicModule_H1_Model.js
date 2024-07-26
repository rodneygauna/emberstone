import mongoose from "mongoose";

const BasicModule_H1_Schema = new mongoose.Schema({
    casualties: String,
    casualties_none_flag: String,
    fire_service_deaths: String,
    fire_service_injuries: String,
    other_deaths: String,
    other_injuries: String,
});

export default mongoose.model("BasicModule_H1", BasicModule_H1_Schema);
