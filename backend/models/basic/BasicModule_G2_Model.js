import mongoose from "mongoose";

const BasicModule_G2_Schema = new mongoose.Schema({
    estimated_dollar_losses___values: String,
    property___loss: String,
    property_loss_none_flag: String,
    contents___loss: String,
    contents_loss_none_flag: String,
    pre_incident_property__value: String,
    pre_incident_property_none_flag: String,
    pre_incident_contents_value: String,
    pre_incident_contents_none_flag: String,
});

export default mongoose.model("BasicModule_G2", BasicModule_G2_Schema);
