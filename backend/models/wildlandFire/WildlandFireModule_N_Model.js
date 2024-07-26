import mongoose from "mongoose";

const WildlandFireModule_N_Schema = new mongoose.Schema({
    elevation_in_feet: String,
    relative_slope_position: String,
    aspect: String,
    flame_length: String,
    rate_of_spread_chains_per_hour: String,
});

export default mongoose.model("WildlandFireModule_N", WildlandFireModule_N_Schema);
