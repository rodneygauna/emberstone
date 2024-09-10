import mongoose from "mongoose";

const ArsonModule_B_Schema = new mongoose.Schema({
    agency_referred_to: String,
    agency_name: String,
    agency_street_number: String,
    agency_street_prefix: String,
    agency_street_or_highway_name: String,
    agency_street_type: String,
    agency_street_suffix: String,
    agency_apt_or_suite: String,
    agency_city: String,
    agency_state: String,
    agency_zip_code: String,
    their_case__: String,
    their_ori: String,
    their_fid: String,
    their_fdid: String,
});

export default mongoose.model("ArsonModule_B", ArsonModule_B_Schema);
