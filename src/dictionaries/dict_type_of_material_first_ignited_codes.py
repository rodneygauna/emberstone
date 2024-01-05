"""
Dictionary of Type of material first ignited codes

NFIRS Data Dictionary:
https://www.usfa.fema.gov/downloads/pdf/nfirs/NFIRS_Complete_Reference_Guide_2015.pdf
Page 106
"""

# Type of material first ignited codes
TYPE_OF_MATERIAL_FIRST_IGNITED_CODES = [
    ('', ''),
    # Flammable Gas
    ('11', 'Natural gas. Includes methane and marsh gas.'),
    ('12', 'LP gas. Includes butane, butane and air mixtures, and propane gas.'),
    ('13', 'Anesthetic gas.'),
    ('14', 'Acetylene gas'),
    ('15', 'Hydrogen.'),
    ('10', 'Flammable gas, other. Includes benzene, benzol, carbon disulfide, carbon monoxide, ethylene, ethylene oxide, and vinyl chloride.'),
    # Flammable or Combustible Liquid
    ('21', 'Ether, pentane-type flammable liquid. Includes all Class 1A flammable liquids.'),
    ('22', 'JP–4 jet fuel and methyl-ethyl-ketone-type flammable liquid. Includes all Class 1B flammable liquids. Excludes gasoline (23).'),
    ('23', 'Gasoline.'),
    ('24', 'Turpentine, butyl-alcohol-type flammable liquid. Includes all Class IC flammable liquids.'),
    ('25', 'Kerosene; Nos. 1 and 2 fuel oil; diesel-type combustible liquid. Includes all Class II combustible liquids.'),
    ('26', 'Cottonseed oil; Nos. 4, 5, and 6 fuel oil; creosote-oil-type combustible liquid. Includes all Class IIIA combustible liquids.'),
    ('27', 'Cooking oil, transformer oil, lubricating oil. Includes all Class IIIB combustible liquids.'),
    ('28', 'Ethanol.'),
    ('20', 'Flammable or combustible liquid, other.'),
    # Volatile Solid or Chemical
    ('31', 'Fat, grease, butter, margarine, lard, tallow.'),
    ('32', 'Petroleum jelly and nonfood grease.'),
    ('33', 'Polish, paraffin, wax.'),
    ('34', 'Adhesive, resin, tar, glue, asphalt, pitch, soot.'),
    ('35', 'Paint, varnish—applied.'),
    ('36', 'Combustible metal. Includes magnesium, titanium, and zirconium.'),
    ('37', 'Solid chemical. Includes explosives. Excludes liquid chemicals (division 2) and gaseous chemicals (division 1).'),
    ('38', 'Radioactive material.'),
    ('30', 'Volatile solid or chemical, other.'),
    # Plastics
    ('41', 'Plastic, regardless of type. Excludes synthetic fibers, coated fabrics, plastic upholstery.'),
    # Natural Product
    ('51', 'Rubber, tire rubber. Excludes synthetic rubbers (classify as plastics (41)).'),
    ('52', 'Cork.'),
    ('53', 'Leather.'),
    ('54', 'Hay, straw.'),
    ('55', 'Grain, natural fiber. Includes cotton, feathers, felt, barley, corn, coconut. Excludes fabrics and furniture batting (71).'),
    ('56', 'Coal, coke, briquettes, peat. Includes briquettes of carbon black and charcoal.'),
    ('57', 'Food, starch. Includes flour. Excludes fat or grease (31).'),
    ('58', 'Tobacco.'),
    ('50', 'Natural product, other. Includes manure.'),
    # Wood or Paper – Processed
    ('61', 'Wood chips, sawdust, wood shavings.'),
    ('62', 'Round timber. Includes round posts, poles, and piles.'),
    ('63', 'Sawn wood. Includes all finished lumber and wood shingles.'),
    ('64', 'Plywood.'),
    ('65', 'Fiberboard, particleboard, and hardboard. Includes low-density pressed wood fiberboard products.'),
    ('66', 'Wood pulp, wood fiber.'),
    ('67', 'Paper. Includes cellulose, waxed paper, sensitized paper, and ground-up processed paper and newsprint used as thermal insulation.'),
    ('68', 'Cardboard.'),
    ('60', 'Wood or paper, processed, other.'),
    # Fabric, Textiles, Fur
    ('71', 'Fabric, fiber, cotton, blends, rayon, wool, finished goods. Includes yarn and canvas. Excludes fur and silk (74).'),
    ('74', 'Fur, silk, other fabric, finished goods. Excludes fabrics listed in Code 71.'),
    ('75', 'Wig.'),
    ('76', 'Human hair.'),
    ('77', 'Plastic-coated fabric. Includes plastic upholstery fabric and other vinyl fabrics.'),
    ('70', 'Fabric, textiles, fur, other.'),
    # Material Compounded With Oil
    ('81', 'Linoleum.'),
    ('82', 'Oilcloth.'),
    ('86', 'Asphalt-treated material. Excludes by-products of combustion, soot, carbon, creosote (34).'),
    ('80', 'Material compounded with oil, other.'),
    # Other Material
    ('99', 'Multiple types of material.'),
    ('00', 'Type of material first ignited, other.'),
    ('UU', 'Undetermined.'),
]
