import mongoose from "mongoose";

const WildlandFireModule_H_Schema = new mongoose.Schema({
    weather_station_id: String,
    weather_type: String,
    wind_direction: String,
    wind_speed: String,
    temperature: String,
    negative_temp__flag: String,
    humidity: String,
    fuel_moisture: String,
    fire_danger_rating: String,
});

export default mongoose.model("WildlandFireModule_H", WildlandFireModule_H_Schema);
