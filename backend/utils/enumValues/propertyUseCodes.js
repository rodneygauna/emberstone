const propertyUseCodes = [
  "1", // Assembly
  "100", // Assembly, other
  "110", // Fixed-use recreation places, other
  "111", // Bowling establishment
  "112", // Billiard center, pool hall
  "113", // Electronic amusement center
  "114", // Ice rink: indoor, outdoor
  "115", // Roller rink: indoor or outdoor
  "116", // Swimming facility: indoor or outdoor
  "120", // Variable-use amusement, recreation places, other
  "121", // Ballroom, gymnasium
  "122", // Convention center, exhibition hall
  "123", // Stadium, arena
  "124", // Playground
  "129", // Amusement center: indoor/outdoor
  "130", // Places of worship, funeral parlors, other
  "131", // Church, mosque, synagogue, temple, chapel
  "134", // Funeral parlor
  "140", // Clubs, other
  "141", // Athletic/health club
  "142", // Clubhouse
  "143", // Yacht Club
  "144", // Casino, gambling clubs
  "150", // Public or government, other
  "151", // Library
  "152", // Museum
  "154", // Memorial structure, including monuments & statues
  "155", // Courthouse
  "160", // Eating, drinking places, other
  "161", // Restaurant or cafeteria
  "162", // Bar or nightclub
  "170", // Passenger terminal, other
  "171", // Airport passenger terminal
  "173", // Bus station
  "174", // Rapid transit station
  "180", // Studio/theater, other
  "181", // Live performance theater
  "182", // Auditorium, concert hall
  "183", // Movie theater
  "185", // Radio, television studio
  "186", // Film/movie production studio
  "2", // Educational
  "200", // Educational, other
  "210", // Schools, non-adult, other
  "211", // Preschool
  "213", // Elementary school, including kindergarten
  "215", // High school/junior high school/middle school
  "241", // Adult education center, college classroom
  "250", // Day care, other (Conversion only)
  "254", // Day care, in commercial property
  "255", // Day care, in residence, licensed
  "256", // Day care in residence, unlicensed.
  "3", // Health Care, Detention & Correction
  "300", // Health care, detention, & correction, other
  "311", // 24-hour care Nursing homes, 4 or more persons
  "321", // Mental retardation/development disability facility
  "322", // Alcohol or substance abuse recovery center
  "323", // Asylum, mental institution
  "331", // Hospital - medical or psychiatric
  "332", // Hospices
  "340", // Clinics, doctors offices, hemodialysis cntr, other
  "341", // Clinic, clinic-type infirmary
  "342", // Doctor, dentist or oral surgeon office
  "343", // Hemodialysis unit
  "361", // Jail, prison (not juvenile)
  "363", // Reformatory, juvenile detention center
  "365", // Police station
  "4", // Residential
  "400", // Residential, other
  "419", // 1 or 2 family dwelling
  "429", // Multifamily dwelling
  "439", // Boarding/rooming house, residential hotels
  "449", // Hotel/motel, commercial
  "459", // Residential board and care
  "460", // Dormitory-type residence, other
  "462", // Sorority house, fraternity house
  "464", // Barracks, dormitory
  "5", // Mercantile, Business
  "500", // Mercantile, business, other
  "511", // Convenience store
  "519", // Food and beverage sales, grocery store
  "529", // Textile, wearing apparel sales
  "539", // Household goods, sales, repairs
  "549", // Specialty shop
  "557", // Personal service, including barber & beauty shops
  "559", // Recreational, hobby, home repair sales, pet store
  "564", // Laundry, dry cleaning
  "569", // Professional supplies, services
  "571", // Service station, gas station
  "579", // Motor vehicle or boat sales, services, repair
  "580", // General retail, other
  "581", // Department or discount store
  "592", // Bank
  "593", // Office:  veterinary or research
  "596", // Post office or mailing firms
  "599", // Business office
  "6", // Industrial, Utility, Defense, Agriculture, Mining
  "600", // Ind., utility, defense, agriculture, mining, other
  "610", // Energy production plant, other
  "614", // Steam or heat-generating plant
  "615", // Electric-generating plant
  "629", // Laboratory or science laboratory
  "631", // Defense, military installation
  "632", // Flight control tower
  "635", // Computer center
  "639", // Communications center
  "640", // Utility or Distribution system, other
  "642", // Electrical distribution
  "644", // Gas distribution, gas pipeline
  "645", // Flammable liquid distribution, F.L. pipeline
  "647", // Water utility
  "648", // Sanitation utility
  "655", // Crops or orchard
  "659", // Livestock production
  "669", // Forest, timberland, woodland
  "679", // Mine, quarry
  "7", // Manufacturing, Processing
  "700", // Manufacturing, processing
  "8", // Storage
  "800", // Storage, other
  "807", // Outside material storage area
  "808", // Outbuilding or shed
  "816", // Grain elevator, silo
  "819", // Livestock, poultry storage
  "839", // Refrigerated storage
  "849", // Outside storage tank
  "880", // Vehicle storage, other
  "881", // Parking garage, (detached residential garage)
  "882", // Parking garage, general vehicle
  "888", // Fire station
  "891", // Warehouse
  "898", // Dock, marina, pier, wharf
  "899", // Residential or self-storage units
  "9", // Outside or Special Property
  "900", // Outside or special property, other
  "919", // Dump, sanitary landfill
  "921", // Bridge, trestle
  "922", // Tunnel
  "926", // Outbuilding, protective shelter
  "931", // Open land or field
  "935", // Campsite with utilities
  "936", // Vacant lot
  "937", // Beach
  "938", // Graded and cared-for plots of land
  "940", // Water area, other
  "941", // Open ocean, sea or tidal waters
  "946", // Lake, river, stream
  "951", // Railroad right-of-way
  "952", // Railroad yard
  "960", // Street, other
  "961", // Highway or divided highway
  "962", // Residential street, road or residential driveway
  "963", // Street or road in commercial area
  "965", // Vehicle parking area
  "972", // Aircraft runway
  "973", // Aircraft taxiway
  "974", // Aircraft loading area
  "981", // Construction site
  "982", // Oil or gas field
  "983", // Pipeline, power line or other utility right-of-way
  "984", // Industrial plant yard - area
  "000", // Property Use, other
  "NNN", // None
  "UUU", // Undetermined
];

export default propertyUseCodes;
