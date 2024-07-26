import mongoose from "mongoose";

const BasicModule_B_Schema = new mongoose.Schema({
    location: String,
    wildland_address_elsewhere_flag: String,
    location_type: String,
    census_tract: String,
    number_milepost: String,
    street_prefix_direction: String,
    street_or_highway_name: String,
    street_type: String,
    street_suffix: String,
    apt_or_suite: String,
    city: String,
    state: String,
    zip: String,
    cross_street__directions_or_national_grid: String,
});

export default mongoose.model("BasicModule_B", BasicModule_B_Schema);
