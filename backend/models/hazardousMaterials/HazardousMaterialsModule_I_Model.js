import mongoose from "mongoose";

const HazardousMaterialsModule_I_Schema = new mongoose.Schema({
    if_fire_or_explosion_is_involved_with_incident__which_occurred_first_: String,
});

export default mongoose.model("HazardousMaterialsModule_I", HazardousMaterialsModule_I_Schema);
