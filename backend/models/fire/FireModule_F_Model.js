import mongoose from "mongoose";

const FireModule_F_Schema = new mongoose.Schema({
    equipment_involved: String,
});

export default mongoose.model("FireModule_F", FireModule_F_Schema);
