import mongoose from "mongoose";

const FireModule_C_Schema = new mongoose.Schema({
    on_site_materials_or_products: String,
    on_site_materials_or_products_none_flag: String,
    material___1: String,
    storage_use__1_bppr: String,
    material___2: String,
    storage_use__2__bppr: String,
    material___3: String,
    storage_use__3_bppr: String,
});

export default mongoose.model("FireModule_C", FireModule_C_Schema);
