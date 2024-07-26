import mongoose from "mongoose";

const ArsonModule_D_Schema = new mongoose.Schema({
    availability_of_material_first_ignited: String,
});

export default mongoose.model("ArsonModule_D", ArsonModule_D_Schema);
