import mongoose from "mongoose";

const HazardousMaterialsModule_P_Schema = new mongoose.Schema({
    hazmat_deaths: String,
    hazmat_injuries: String,
});

export default mongoose.model("HazardousMaterialsModule_P", HazardousMaterialsModule_P_Schema);
