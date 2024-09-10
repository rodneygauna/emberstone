import mongoose from "mongoose";

const WildlandFireModule_I2_Schema = new mongoose.Schema({
    number_of_bldg__threatened_flag: String,
    number_of_bldg__threatened: String,
});

export default mongoose.model("WildlandFireModule_I2", WildlandFireModule_I2_Schema);
