import mongoose from "mongoose";

const FireModule_D3_Schema = new mongoose.Schema({
    item_first_ignited: String,
});

export default mongoose.model("FireModule_D3", FireModule_D3_Schema);
