const hazardousMaterialsReleaseCodes = [
  "1", // Natural gas: slow leak, no evac. or HazMat actions
  "2", // Propane gas - Less than a 21 lb. tank
  "3", // Gasoline - vehicle fuel tank or portable container
  "4", // Kerosene - fuel-burning equipment/portable storage
  "5", // Diesel fuel/fuel oil - vehicle fuel tank/portable
  "6", // Household/office solvent or chemical spill
  "7", // Motor oil - from engine or portable container
  "8", // Paint - spills less than 55 gallons
  "0", // Special HazMat actions required or spill >= 55 gal.
  "N", // None
];

export default hazardousMaterialsReleaseCodes;
