import mongoose from "mongoose";

const WildlandFireModule_J_Schema = new mongoose.Schema({
    property_mgmt____code: String,
    __of_total_acres_burned___undetermined: String,
    __of_total_acres_burned___tax_paying: String,
    __of_total_acres_burned___non_tax_paying: String,
    __of_total_acres_burned___city_town__village__local: String,
    __total_acres_burned___county_or_parish: String,
    __of_total_acres_burned___state_or_province: String,
    federal_agency_code: String,
    __of_total_acres_burned___federal: String,
    __of_total_acres_burned___foreign: String,
    __of_total_acres_burned___military: String,
    __of_total_acres_burned___other: String,
});

export default mongoose.model("WildlandFireModule_J", WildlandFireModule_J_Schema);
