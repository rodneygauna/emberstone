import mongoose from "mongoose";

const FireModule_D3a_Schema = new mongoose.Schema({
    check_box_if_fire_is_confined_to_object_of_origin: String,
});

export default mongoose.model("FireModule_D3a", FireModule_D3a_Schema);
