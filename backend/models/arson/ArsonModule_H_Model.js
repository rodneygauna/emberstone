import mongoose from "mongoose";

const ArsonModule_H_Schema = new mongoose.Schema({
    incendiary_devices: String,
    container: String,
    ignition_delay_device: String,
    fuel: String,
});

export default mongoose.model("ArsonModule_H", ArsonModule_H_Schema);
