import mongoose from "mongoose";

const FireModule_B2_Schema = new mongoose.Schema({
    __of_bldg__involved: String,
    bldg__not_involved_flag: String,
});

export default mongoose.model("FireModule_B2", FireModule_B2_Schema);
