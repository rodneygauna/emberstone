import mongoose from "mongoose";

const BasicModule_H_Schema = new mongoose.Schema({
    system_module_flags____fire: String,
    system_module_flags____structure: String,
    system_module_flags____hazmat: String,
    system_module_flags____wildland: String,
    system_module_flags____civilian_fire_casualty: String,
    system_module_flags____fire_service: String,
    system_module_flags____apparatus: String,
    system_module_flags____personnel: String,
    system_module_flags____ems: String,
    system_module_flags____arson: String,
});

export default mongoose.model("BasicModule_H", BasicModule_H_Schema);
