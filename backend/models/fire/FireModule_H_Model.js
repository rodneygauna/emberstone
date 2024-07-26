import mongoose from "mongoose";

const FireModule_H_Schema = new mongoose.Schema({
    mobile_property: String,
});

export default mongoose.model("FireModule_H", FireModule_H_Schema);
