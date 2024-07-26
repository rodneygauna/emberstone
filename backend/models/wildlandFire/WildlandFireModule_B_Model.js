import mongoose from "mongoose";

const WildlandFireModule_B_Schema = new mongoose.Schema({
    alternate_location_specification: String,
    latitude: String,
    longitude: String,
    township: String,
    township_direction: String,
    range: String,
    range_direction: String,
    section: String,
    subsection: String,
    meridian: String,
    middle_initial: String,
});

export default mongoose.model("WildlandFireModule_B", WildlandFireModule_B_Schema);
