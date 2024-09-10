import mongoose from "mongoose";

const StructureFileModule_I2_Schema = new mongoose.Schema({
    building_status: String,
});

export default mongoose.model("StructureFileModule_I2", StructureFileModule_I2_Schema);
