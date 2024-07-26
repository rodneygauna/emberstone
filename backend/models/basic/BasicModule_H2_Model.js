import mongoose from "mongoose";

const BasicModule_H2_Schema = new mongoose.Schema({
    detector_alerted_occupants: String,
});

export default mongoose.model("BasicModule_H2", BasicModule_H2_Schema);
