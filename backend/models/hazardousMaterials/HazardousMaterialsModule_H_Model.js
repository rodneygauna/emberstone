import mongoose from "mongoose";

const HazardousMaterialsModule_H_Schema = new mongoose.Schema({
    hazmat_actions_taken___1: String,
    hazmat_actions_taken___2: String,
    hazmat__actions_taken___3: String,
});

export default mongoose.model("HazardousMaterialsModule_H", HazardousMaterialsModule_H_Schema);
