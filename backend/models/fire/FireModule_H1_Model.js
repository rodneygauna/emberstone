import mongoose from "mongoose";

const FireModule_H1_Schema = new mongoose.Schema({
    mobile_property_none_flag: String,
    mobile_property_involve___type: String,
});

export default mongoose.model("FireModule_H1", FireModule_H1_Schema);
