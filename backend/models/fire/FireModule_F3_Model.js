import mongoose from "mongoose";

const FireModule_F3_Schema = new mongoose.Schema({
    equipment_portability: String,
});

export default mongoose.model("FireModule_F3", FireModule_F3_Schema);
