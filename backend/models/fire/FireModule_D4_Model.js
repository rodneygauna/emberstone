import mongoose from "mongoose";

const FireModule_D4_Schema = new mongoose.Schema({
    type_of_material: String,
});

export default mongoose.model("FireModule_D4", FireModule_D4_Schema);
