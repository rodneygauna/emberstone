import mongoose from "mongoose";

const WildlandFireModule_F_Schema = new mongoose.Schema({
    mobile_property_type: String,
});

export default mongoose.model("WildlandFireModule_F", WildlandFireModule_F_Schema);
