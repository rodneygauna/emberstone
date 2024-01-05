"""
Dictionaries for Heat Source Codes

NFIRS Data Dictionary:
https://www.usfa.fema.gov/downloads/pdf/nfirs/NFIRS_Complete_Reference_Guide_2015.pdf
Page 100
"""

# Heat Source Codes
HEAT_SOURCE_CODES = [
    ('', ''),
    # Operating Equipment
    ('11', 'Spark, ember, or flame from operating equipment'),
    ('12', 'Radiated or conducted heat from operating equipment'),
    ('13', 'Electrical arcing'),
    ('10', 'Heat from operating equipment, other'),
    # Hot or Smoldering Object
    ('41', 'Heat, spark from friction. Includes overheated tires'),
    ('42', 'Molten, hot material. Includes molten metal, hot forging, hot glass, hot metal fragment, brake shoe, hot box, and slag from arc welding operations'),
    ('43', 'Hot ember or ash. Includes hot coals, coke, and charcoal; and sparks or embers from a chimney that ignite the roof of the same structure. Excludes flying brand, embers, and sparks (83); and embers accidentally escaping from operating equipment (11)'),
    ('40', 'Hot or smoldering object, other'),
    # Explosives, Fireworks
    ('51', 'Munitions. Includes bombs, ammunition, and military rockets'),
    ('53', 'Blasting agent, primer cord, black powder fuse. Includes fertilizing agents, ammonium nitrate, and sodium, potassium, or other chemical agents'),
    ('54', 'Fireworks. Includes sparklers, paper caps, party poppers, and firecrackers'),
    ('55', 'Model and amateur rockets'),
    ('56', 'Incendiary device. Includes Molotov cocktails and arson sets'),
    ('50', 'Explosive, fireworks, other'),
    # Other Open Flame or Smoking Materials
    ('61', 'Cigarette'),
    ('62', 'Pipe or cigar'),
    ('63', 'Heat from undetermined smoking material'),
    ('64', 'Match'),
    ('65', 'Lighter: cigarette lighter, cigar lighter'),
    ('66', 'Candle'),
    ('67', 'Warning or road flare; fusee'),
    ('68', 'Backfire from internal combustion engine. Excludes flames and sparks from an exhaust system (11)'),
    ('69', 'Flame/torch used for lighting. Includes gas light and gas-/liquid-fueled lantern'),
    ('60', 'Heat from open flame or smoking materials, other'),
    # Chemical, Natural Heat Sources
    ('71', 'Sunlight. Usually magnified through glass, bottles, etc'),
    ('72', 'Spontaneous combustion, chemical reaction'),
    ('73', 'Lightning discharge'),
    ('74', 'Other static discharge. Excludes electrical arcs (13) or sparks (11)'),
    ('70', 'Chemical, natural heat sources, other'),
    # Heat Spread From Another Fire. Excludes operating equipment.
    ('81', 'Heat from direct flame, convection currents spreading from another fire'),
    ('82', 'Radiated heat from another fire. Excludes heat from exhaust systems of fuel-fired, fuel-powered equipment (12)'),
    ('83', 'Flying brand, ember, spark. Excludes embers, sparks from a chimney igniting the roof of the same structure (43)'),
    ('84', 'Conducted heat from another fire'),
    ('80', 'Heat spread from another fire, other'),
    # Other Heat Sources
    ('97', 'Multiple heat sources, including multiple ignitions. If one type of heat source was primarily involved, use that classification'),
    ('00', 'Heat sources, other'),
    ('UU', 'Undetermined'),
]
