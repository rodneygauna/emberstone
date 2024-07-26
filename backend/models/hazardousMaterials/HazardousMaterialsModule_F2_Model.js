import mongoose from "mongoose";

const HazardousMaterialsModule_F2_Schema = new mongoose.Schema({
    population_density: String,
});

export default mongoose.model("HazardousMaterialsModule_F2", HazardousMaterialsModule_F2_Schema);
