const incidentTypeCodes = [
  "1", // Fire
  "10", // Fire, other
  "100", // Fire, other
  "11", // Structure Fire
  "110", // Structure fire, other (conversion only)
  "111", // Building fire
  "112", // Fires in structure other than in a building
  "113", // Cooking fire, confined to container
  "114", // Chimney or flue fire, confined to chimney or flue
  "115", // Incinerator overload or malfunction, fire confined
  "116", // Fuel burner/boiler malfunction, fire confined
  "117", // Commercial Compactor fire, confined to rubbish
  "118", // Trash or rubbish fire, contained
  "12", // Fire in mobile property used as a fixed structure
  "120", // Fire in mobile prop. used as a fixed struc., other
  "121", // Fire in mobile home used as fixed residence
  "122", // Fire in motor home, camper, recreational vehicle
  "123", // Fire in portable building, fixed location
  "13", // Mobile property (vehicle) fire
  "130", // Mobile property (vehicle) fire, other
  "131", // Passenger vehicle fire
  "132", // Road freight or transport vehicle fire
  "133", // Rail vehicle fire
  "134", // Water vehicle fire
  "135", // Aircraft fire
  "136", // Self-propelled motor home or recreational vehicle
  "137", // Camper or recreational vehicle (RV) fire
  "138", // Off-road vehicle or heavy equipment fire
  "14", // Natural vegetation fire
  "140", // Natural vegetation fire, other
  "141", // Forest, woods or wildland fire
  "142", // Brush or brush-and-grass mixture fire
  "143", // Grass fire
  "15", // Outside rubbish fire
  "150", // Outside rubbish fire, other
  "151", // Outside rubbish, trash or waste fire
  "152", // Garbage dump or sanitary landfill fire
  "153", // Construction or demolition landfill fire
  "154", // Dumpster or other outside trash receptacle fire
  "155", // Outside stationary compactor/compacted trash fire
  "16", // Special outside fire
  "160", // Special outside fire, other
  "161", // Outside storage fire
  "162", // Outside equipment fire
  "163", // Outside gas or vapor combustion explosion
  "164", // Outside mailbox fire
  "17", // Cultivated vegetation, crop fire
  "170", // Cultivated vegetation, crop fire, other
  "171", // Cultivated grain or crop fire
  "172", // Cultivated orchard or vineyard fire
  "173", // Cultivated trees or nursery stock fire
  "2", // Overpressure Rupture, Explosion, Overheat(no fire)
  "20", // Overpressure rupture, explosion, overheat, other
  "200", // Overpressure rupture, explosion, overheat other
  "21", // Overpressure rupture from steam (no ensuing fire)
  "210", // Overpressure rupture from steam, other
  "211", // Overpressure rupture of steam pipe or pipeline
  "212", // Overpressure rupture of steam boiler
  "213", // Steam rupture of pressure or process vessel
  "22", // Overpressure rupture from air or gas (no fire)
  "220", // Overpressure rupture from air or gas, other
  "221", // Overpressure rupture of air or gas pipe/pipeline
  "222", // Overpressure rupture of boiler from air or gas
  "223", // Air or gas rupture of pressure or process vessel
  "23", // Overpressure rupture, chemical reaction (no fire)
  "231", // Chemical reaction rupture of process vessel
  "24", // Explosion (no fire)
  "240", // Explosion (no fire), other
  "241", // Munitions or bomb explosion (no fire)
  "242", // Blasting agent explosion (no fire)
  "243", // Fireworks explosion (no fire)
  "244", // Dust explosion (no fire)
  "25", // Excessive heat, scorch burns with no ignition
  "251", // Excessive heat, scorch burns with no ignition
  "3", // Rescue & Emergency Medical Service Incident
  "30", // Rescue, emergency medical call (EMS), other
  "300", // Rescue, EMS incident, other
  "31", // Medical assist
  "311", // Medical assist, assist EMS crew
  "32", // Emergency medical service (EMS) incident
  "320", // Emergency medical service incident, other
  "321", // EMS call, excluding vehicle accident with injury
  "322", // Motor vehicle accident with injuries
  "323", // Motor vehicle/pedestrian accident (MV Ped)
  "324", // Motor vehicle accident with no injuries.
  "33", // Lock-In
  "331", // Lock-in (if lock out , use 511 )
  "34", // Search for lost person
  "340", // Search for lost person, other
  "341", // Search for person on land
  "342", // Search for person in water
  "343", // Search for person underground
  "35", // Extrication, rescue
  "350", // Extrication, rescue, other
  "351", // Extrication of victim(s) from building/structure
  "352", // Extrication of victim(s) from vehicle
  "353", // Removal of victim(s) from stalled elevator
  "354", // Trench/below-grade rescue
  "355", // Confined space rescue
  "356", // High-angle rescue
  "357", // Extrication of victim(s) from machinery
  "36", // Water or ice-related rescue
  "360", // Water & ice-related rescue, other
  "361", // Swimming/recreational water areas rescue
  "362", // Ice rescue
  "363", // Swift water rescue
  "364", // Surf rescue
  "365", // Watercraft rescue
  "37", // Electrical rescue
  "370", // Electrical rescue, other
  "371", // Electrocution or potential electrocution
  "372", // Trapped by power lines
  "38", // Rescue or EMS standby
  "381", // Rescue or EMS standby
  "4", // Hazardous Condition (No Fire)
  "40", // Flammable gas or liquid condition, other
  "400", // Hazardous condition, other
  "41", // Combustible/flammable spills & leaks
  "410", // Combustible/flammable gas/liquid condition, other
  "411", // Gasoline or other flammable liquid spill
  "412", // Gas leak (natural gas or LPG)
  "413", // Oil or other combustible liquid spill
  "42", // Chemical release, reaction, or toxic condition
  "420", // Toxic condition, other
  "421", // Chemical hazard (no spill or leak)
  "422", // Chemical spill or leak
  "423", // Refrigeration leak
  "424", // Carbon monoxide incident
  "43", // Radioactive condition
  "430", // Radioactive condition, other
  "431", // Radiation leak, radioactive material
  "44", // Electrical wiring/equipment problem
  "440", // Electrical  wiring/equipment problem, other
  "441", // Heat from short circuit (wiring), defective/worn
  "442", // Overheated motor
  "443", // Breakdown of light ballast
  "444", // Power line down
  "445", // Arcing, shorted electrical equipment
  "45", // Biological hazard
  "451", // Biological hazard, confirmed or suspected
  "46", // Accident, potential accident
  "460", // Accident, potential accident, other
  "461", // Building or structure weakened or collapsed
  "462", // Aircraft standby
  "463", // Vehicle accident, general cleanup
  "47", // Explosive, bomb removal
  "471", // Explosive, bomb removal (for bomb scare, use 721)
  "48", // Attempted burning, illegal action
  "480", // Attempted burning, illegal action, other
  "481", // Attempt to burn
  "482", // Threat to burn
  "5", // Service Call
  "50", // Service call, other
  "500", // Service Call, other
  "51", // Person in distress
  "510", // Person in distress, other
  "511", // Lock-out
  "512", // Ring or jewelry removal
  "52", // Water problem
  "520", // Water problem, other
  "521", // Water evacuation
  "522", // Water or steam leak
  "53", // Smoke, odor problem
  "531", // Smoke or odor removal
  "54", // Animal problem or rescue
  "540", // Animal problem, other
  "541", // Animal problem
  "542", // Animal rescue
  "55", // Public service assistance
  "550", // Public service assistance, other
  "551", // Assist police or other governmental agency
  "552", // Police matter
  "553", // Public service
  "554", // Assist invalid
  "555", // Defective elevator, no occupants
  "56", // Unauthorized burning
  "561", // Unauthorized burning
  "57", // Cover assignment, standby at fire station, move-up
  "571", // Cover assignment, standby, moveup
  "6", // Good Intent Call
  "60", // Good intent call, other
  "600", // Good intent call, other
  "61", // Dispatched and canceled en route
  "611", // Dispatched & canceled en route
  "62", // Wrong location, no emergency found
  "621", // Wrong location
  "622", // No incident found on arrival at dispatch address
  "63", // Controlled burning
  "631", // Authorized controlled burning
  "632", // Prescribed fire
  "64", // Vicinity alarm
  "641", // Vicinity alarm (incident in other location)
  "65", // Steam, other gas mistaken for smoke
  "650", // Steam, other gas mistaken for smoke, other
  "651", // Smoke scare, odor of smoke
  "652", // Steam, vapor, fog or dust thought to be smoke
  "653", // Smoke from barbecue, tar kettle
  "66", // EMS call where  party has been transported
  "661", // EMS call, party transported by non-fire agency
  "67", // HazMat release investigation w/no HazMat
  "671", // HazMat release investigation w/no HazMat
  "672", // Biological hazard investigation, none found
  "7", // False Alarm & False Call
  "70", // False alarm and false call, other
  "700", // False alarm or false call, other
  "71", // Malicious, mischievous false alarm
  "710", // Malicious, mischievous false call, other
  "711", // Municipal alarm system, malicious false alarm
  "712", // Direct tie to FD, malicious false alarm
  "713", // Telephone, malicious false alarm
  "714", // Central station, malicious false alarm
  "715", // Local alarm system, malicious false alarm
  "72", // Bomb scare
  "721", // Bomb scare - no bomb
  "73", // System or detector malfunction
  "730", // System malfunction, other
  "731", // Sprinkler activation due to malfunction
  "732", // Extinguishing system activation due to malfunction
  "733", // Smoke detector activation due to malfunction
  "734", // Heat detector activation due to malfunction
  "735", // Alarm system sounded due to malfunction
  "736", // CO detector activation due to malfunction
  "74", // Unintentional system/detector operation (no fire)
  "740", // Unintentional transmission of alarm, other
  "741", // Sprinkler activation, no fire - unintentional
  "742", // Extinguishing system activation
  "743", // Smoke detector activation, no fire - unintentional
  "744", // Detector activation, no fire - unintentional
  "745", // Alarm system activation, no fire - unintentional
  "746", // Carbon monoxide detector activation, no CO
  "75", // Biohazard scare
  "751", // Biological hazard, malicious false report
  "8", // Severe Weather & Natural Disaster
  "800", // Severe weather or natural disaster, other
  "811", // Earthquake assessment
  "812", // Flood assessment
  "813", // Wind storm, tornado/hurricane assessment
  "814", // Lightning strike (no fire)
  "815", // Severe weather or natural disaster standby
  "9", // Special Incident Type
  "90", // Special type of incident, other
  "900", // Special type of incident, other
  "91", // Citizen complaint
  "911", // Citizen complaint
  "UUU", // Undetermined incident type (conversion only)
];

export default incidentTypeCodes;
