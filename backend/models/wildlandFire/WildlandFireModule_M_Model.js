import mongoose from "mongoose";

const WildlandFireModule_M_Schema = new mongoose.Schema({
    horizontal_distance_from_right_of_way: String,
    type_of_right_of_way: String,
});

export default mongoose.model("WildlandFireModule_M", WildlandFireModule_M_Schema);
