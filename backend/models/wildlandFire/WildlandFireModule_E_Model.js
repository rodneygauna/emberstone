import mongoose from "mongoose";

const WildlandFireModule_E_Schema = new mongoose.Schema({
    heat_source: String,
});

export default mongoose.model("WildlandFireModule_E", WildlandFireModule_E_Schema);
