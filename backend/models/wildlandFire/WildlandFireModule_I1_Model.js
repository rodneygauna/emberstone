import mongoose from "mongoose";

const WildlandFireModule_I1_Schema = new mongoose.Schema({
    number_of_bldg__ignited_flag: String,
    number_of_bldg__ignited: String,
});

export default mongoose.model("WildlandFireModule_I1", WildlandFireModule_I1_Schema);
