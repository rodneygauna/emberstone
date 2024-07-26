import mongoose from "mongoose";

const BasicModule_L2_Schema = new mongoose.Schema({
    fire_form_required_: String,
});

export default mongoose.model("BasicModule_L2", BasicModule_L2_Schema);
