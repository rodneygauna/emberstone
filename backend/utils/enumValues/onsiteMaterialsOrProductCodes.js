const onsiteMaterialsOrProductCodes = [
  "111", // Baked goods
  "112", // Meat products. Includes poultry and fish.
  "113", // Dairy products
  "114", // Produce, fruit, or vegetables
  "115", // Sugar, spices
  "116", // Deli products
  "117", // Cereals, grains; packaged
  "118", // Fat/Cooking grease. Includes lard and animal fat.
  "110", // Food, other
  "121", // Alcoholic beverage
  "122", // Nonalcoholic beverage
  "120", // Beverages, other
  "131", // Trees, plants, flowers
  "132", // Feed, grain, seed
  "133", // Hay, straw
  "134", // Crop, not grain
  "135", // Livestock
  "136", // Pets
  "137", // Pesticides
  "138", // Fertilizer
  "130", // Agriculture, other
  "100", // Food, beverages, agriculture, other
  "211", // Curtains, drapes
  "212", // Linens
  "213", // Bedding
  "214", // Cloth, yarn, dry goods
  "210", // Fabrics, other
  "221", // Clothes
  "222", // Footwear
  "223", // Eyeglasses
  "225", // Perfumes, colognes, cosmetics
  "226", // Toiletries
  "220", // Wearable products, other
  "231", // Jewelry, watches
  "232", // Luggage, suitcases
  "233", // Purses, satchels, briefcases, wallets, belts, backpacks
  "230", // Accessories, other
  "240", // Furnishings, other
  "241", // Furniture
  "242", // Beds, mattresses
  "243", // Clocks
  "244", // Housewares
  "245", // Glass, ceramics, china, pottery, stoneware, earthenware
  "246", // Silverware
  "200", // Personal and home products, other
  "311", // Lumber, sawn wood
  "312", // Timber
  "313", // Cork
  "314", // Pulp
  "315", // Sawdust, wood chips
  "310", // Wood, other
  "321", // Cotton
  "322", // Wool
  "323", // Silk
  "320", // Fibers, other
  "331", // Leather
  "332", // Fur
  "330", // Animal skins, other
  "341", // Ore
  "342", // Rubber
  "343", // Plastics
  "344", // Fiberglass
  "345", // Salt
  "300", // Raw materials, other
  "411", // Newspapers, magazines
  "412", // Books
  "413", // Greeting cards
  "414", // Paper, rolled
  "415", // Cardboard
  "416", // Packaged paper products
  "417", // Paper records or reports
  "410", // Paper products, other
  "421", // Rope, twine, cordage
  "400", // Paper products, rope, other
  "511", // Gasoline, diesel fuel
  "512", // Flammable liquid. Excludes gasoline (511)
  "513", // Combustible liquid. Includes heating oil. Excludes diesel fuel (511)
  "514", // Motor oil
  "515", // Heavy oils, grease, noncooking related
  "516", // Asphalt
  "517", // Adhesive, resin, tar
  "510", // Flammables, combustible liquids, other
  "521", // Natural gas
  "522", // LP gas, butane, propane
  "523", // Hydrogen gas
  "520", // Flammable gases, other
  "531", // Charcoal
  "532", // Coal
  "533", // Peat
  "534", // Coke
  "530", // Solid fuel, coal type, other
  "541", // Hazardous chemicals
  "542", // Nonhazardous chemicals
  "543", // Cleaning supplies
  "544", // Pharmaceuticals, drugs
  "545", // Illegal drugs
  "540", // Chemicals, drugs, other
  "551", // Radioactive materials
  "500", // Flammables, chemicals, plastics, other
  "611", // Industrial machinery
  "612", // Machine parts
  "613", // Tools (power and hand tools)
  "610", // Machinery, tools, other
  "621", // Hardware products
  "622", // Construction and home improvement products. Excludes pipes and fittings (623), electrical parts and supplies (626), insulation (627), lumber (311)
  "623", // Pipes, fittings
  "624", // Stone-working materials
  "625", // Lighting fixtures and lamps
  "626", // Electrical parts, supplies, equipment. Excludes light fixtures (625)
  "627", // Insulation
  "628", // Abrasives
  "629", // Fencing, fence supplies
  "620", // Construction supplies, other
  "631", // Carpets, rugs
  "632", // Linoleum, tile
  "633", // Ceramic tile
  "634", // Wallpaper
  "635", // Paint
  "630", // Floor and wall coverings, other
  "641", // Steel, iron products
  "642", // Nonferrous metal products. Includes aluminum products (no combustible metals)
  "643", // Combustible metal products. Includes magnesium and titanium
  "640", // Metal products, other
  "600", // Construction, machinery, metals, other
  "711", // Appliances. Includes refrigerators, stoves, irons.
  "712", // Electronic parts, supplies, equipment. Includes components such as circuit boards, radios, computers.
  "713", // Electronic media. Includes diskettes, CD-ROMs, recorded music.
  "714", // Photographic equipment, supplies, materials. Includes cameras, film. Excludes digital electronic cameras (712) and electronic storage media (713).
  "710", // Appliances, electronics, other.
  "721", // Dental supplies.
  "722", // Medical supplies. Includes surgical products.
  "723", // Optical products.
  "724", // Veterinary supplies.
  "725", // Laboratory supplies.
  "720", // Medical, laboratory products, other.
  "700", // Appliances, electronics, medical, laboratory, other.
  "811", // Autos, trucks, buses, recreational vehicles, riding mowers, farm vehicles.
  "812", // Construction vehicles.
  "813", // Motor vehicle parts. Excludes tires (814).
  "814", // Tires.
  "810", // Motor vehicles and parts, other.
  "821", // Boats, ships.
  "820", // Watercraft, other.
  "830", // Aircraft, other.
  "831", // Planes, airplanes.
  "832", // Helicopters.
  "841", // Trains, light rail, rapid transit cars.
  "842", // Rail equipment.
  "840", // Rail, other.
  "851", // Bicycles, tricycles, unicycles. Includes tandem bicycles.
  "850", // Non-motorized vehicles, other.
  "911", // Bottles, barrels, boxes.
  "912", // Packing material.
  "913", // Pallets.
  "910", // Containers, packing materials, other.
  "921", // Antiques.
  "922", // Collectibles.
  "923", // Used merchandise.
  "920", // Previously owned products, other.
  "931", // Guns.
  "932", // Ammunition.
  "933", // Explosives
  "934", // Fireworks, commercially made.
  "935", // Rockets, missiles.
  "930", // Ordnance, explosives, fireworks, other.
  "941", // Musical instruments.
  "942", // Hobby, crafts. Excludes artwork (943).
  "943", // Art supply/artwork. Includes finished works, paint, finishing materials.
  "944", // Sporting goods. Includes balls, nets, rackets, protective equipment used in sport.
  "945", // Camping, hiking, outdoor products. Includes related equipment such as portable stoves, rope.
  "946", // Games, toys.
  "940", // Recreation, art products, other.
  "951", // Office supplies.
  "952", // Restaurant supplies. Excludes food (110 series).
  "950", // Mixed sales products, other.
  "961", // Junkyard materials.
  "962", // Recyclable materials. Includes materials gathered specifically for the purpose of recycling.
  "960", // Discarded material, other.
  "963", // Trash, not recyclable.
  "000", // On-site materials, other.
  "NNN", // None.
  "UUU", // Undetermined.
];

export default onsiteMaterialsOrProductCodes;
