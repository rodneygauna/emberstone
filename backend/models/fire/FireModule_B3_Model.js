import mongoose from "mongoose";

const FireModule_B3_Schema = new mongoose.Schema({
    acres_burned: String,
    acres_burn_none_less_than_one_acre: String,
    acres_burn_from_wildland_form: String,
});

export default mongoose.model("FireModule_B3", FireModule_B3_Schema);
