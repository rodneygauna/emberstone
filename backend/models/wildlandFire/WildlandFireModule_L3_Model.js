import mongoose from "mongoose";

const WildlandFireModule_L3_Schema = new mongoose.Schema({
    age: String,
    date_of_birth: String,
});

export default mongoose.model("WildlandFireModule_L3", WildlandFireModule_L3_Schema);
