const areaOfFireOriginCodes = [
  "", //
  "01", // Hallway corridor, mall
  "02", // Exterior stairway. Includes fire escapes, exterior ramps
  "03", // Interior stairway or ramp. Includes interior ramps
  "04", // Escalator: exterior, interior
  "05", // Entranceway, lobby
  "09", // Egress/exit, other
  "11", // Arena, assembly area with fixed seats for 100 or more people. Includes auditoriums, chapels, places of worship, class rooms, lecture halls, arenas, theaters
  "12", // Assembly area without fixed seats for 100 or more people. Includes ballrooms, bowling alleys, gymnasiums, multiuse areas, roller or ice skating rinks
  "13", // Assembly area without fixed seats for less than 100 people. Includes meeting rooms, classrooms, multiuse areas
  "14", // Common room, den, family room, living room, lounge, music room, recreation room, sitting room
  "15", // Sales area, showroom. Excludes display windows (56)
  "16", // Art gallery, exhibit hall, library
  "17", // Swimming pool
  "10", // Assembly or sales areas, other
  "21", // Bedroom for less than five people. Includes jail or prison cells, lockups, patient rooms, sleeping areas
  "22", // Bedroom for more than five people. Includes barracks, dormitories, patient wards
  "23", // Dining room, cafeteria, bar area, beverage service area, canteen area, lunchroom, mess hall
  "24", // Cooking area, kitchen
  "25", // Bathroom, checkroom, lavatory, locker room, powder room, outhouse, portable toilet, sauna area
  "26", // Laundry area, wash house (laundry)
  "27", // Office
  "28", // Personal service area. Includes barber/beauty salon area, exercise/health club, massage area
  "20", // Function areas, other
  "31", // Laboratory
  "32", // Dark room, photography area, printing area
  "33", // Treatment: first-aid area, surgery area (minor procedures)
  "34", // Surgery area: major operations, operating room or theater, recovery room
  "35", // Computer room, control room or center, data processing center, electronic equipment area, telephone booth or area, radar room
  "36", // Stage area: performance, basketball court, boxing ring, dressing room (backstage), ice rink
  "37", // Projection room, spotlight area, stage light area
  "38", // Processing/manufacturing area, workroom, assembly area
  "30", // Technical processing areas, other
  "41", // Storage room, area, tank, bin. Includes all areas where products are held awaiting process, shipment, use, sale
  "42", // Closet
  "43", // Storage: supplies or tools. Includes dead storage, maintenance supply room, tool room, basement (unfinished)
  "44", // Records storage room, storage vault
  "45", // Shipping/receiving area: loading area, dock or bay, mail room, packing area
  "46", // Chute/container: trash, rubbish, waste. Includes compactor and garbage areas. Excludes incinerators (64)
  "47", // Vehicle storage area: garage, carport
  "40", // Storage areas, other
  "51", // Dumbwaiter or elevator shaft
  "52", // Conduit, pipe, utility, or ventilation shaft
  "53", // Light shaft
  "54", // Chute. Includes laundry or mail chutes. Excludes trash chutes (46)
  "55", // Duct. Includes HVAC, cable, exhaust
  "56", // Display window
  "58", // Conveyor
  "50", // Service areas, other
  "61", // Machinery room or area. Includes elevator machinery room, engine room, head house, pump room, refrigeration room
  "62", // Heating room or area, water heater area
  "63", // Switchgear area, transformer vault
  "64", // Incinerator area
  "65", // Maintenance shop or area. Includes paint shop, repair shop, welding area, workshop
  "66", // Cell, test
  "67", // Enclosure, pressurized air
  "68", // Enclosure with enriched oxygen atmosphere
  "60", // Service or equipment areas, other
  "71", // Substructure area or space, crawl space
  "72", // Exterior balcony, unenclosed porch. Excludes enclosed porches (93)
  "73", // Ceiling and floor assembly, crawl space between stories
  "74", // Attic: vacant, crawl space above top story. Includes cupola, concealed roof/ceiling space, steeple
  "75", // Wall assembly, concealed wall space
  "76", // Wall surface, exterior
  "77", // Roof surface, exterior
  "78", // Awning
  "70", // Structural areas, other
  "81", // Operator/passenger area of transportation equipment
  "82", // Cargo/trunk area—all vehicles
  "83", // Engine area, running gear, wheel area
  "84", // Fuel tank, fuel line
  "85", // Separate operator/control area of transportation equipment. Includes bridges of ships, cockpit of planes. Excludes automobiles, trucks, buses (81)
  "86", // Exterior, exposed surface
  "80", // Vehicle areas, other
  "91", // Railroad right-of-way: on or near
  "92", // Highway, parking lot, street: on or near
  "93", // Courtyard, patio, terrace. Includes screened-in porches. Excludes unenclosed porches (72)
  "94", // Open area, outside. Includes farmland, fields, lawns, parks, vacant lots
  "95", // Wildland, woods
  "96", // Construction/Renovation area
  "97", // Multiple areas
  "98", // Vacant structural area
  "90", // Outside areas, other
  "00", // Area of fire origin, other
  "UU", // Undetermined
];

export default areaOfFireOriginCodes;
