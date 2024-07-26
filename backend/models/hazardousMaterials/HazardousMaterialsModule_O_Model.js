import mongoose from "mongoose";

const HazardousMaterialsModule_O_Schema = new mongoose.Schema({
    disposition: String,
});

export default mongoose.model("HazardousMaterialsModule_O", HazardousMaterialsModule_O_Schema);
