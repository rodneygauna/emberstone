import asyncHandler from "express-async-handler";

import actionsTakenCodes from "../utils/enumValues/actionsTakenCodes.js";
import aidGivenCodes from "../utils/enumValues/aidGivenCodes.js";
import areaOfFireOriginCodes from "../utils/enumValues/areaOfFireOriginCodes.js";
import countyCodes from "../utils/enumValues/countyCodes.js";
import detectorCodes from "../utils/enumValues/detectorCodes.js";
import hazardousMaterialsReleaseCodes from "../utils/enumValues/hazardousMaterialsReleaseCodes.js";
import heatSourceCodes from "../utils/enumValues/heatSourceCodes.js";
import incidentReportingStatus from "../utils/enumValues/incidentReportingStatus.js";
import incidentTypeCodes from "../utils/enumValues/incidentTypeCodes.js";
import itemFirstIgnitedCodes from "../utils/enumValues/itemFirstIgnitedCodes.js";
import locationTypeCodes from "../utils/enumValues/locationTypeCodes.js";
import mixedUsePropertyCodes from "../utils/enumValues/mixedUsePropertyCodes.js";
import namePrefixEnums from "../utils/enumValues/namePrefixEnums.js";
import nameSuffixEnums from "../utils/enumValues/nameSuffixEnums.js";
import onsiteMaterialsOrProductCodes from "../utils/enumValues/onsiteMaterialsOrProductCodes.js";
import onsiteMaterialsStorageUseCodes from "../utils/enumValues/onsiteMaterialsStorageUseCodes.js";
import propertyUseCodes from "../utils/enumValues/propertyUseCodes.js";
import stateAbbreviations from "../utils/enumValues/stateEnums.js";
import streetPrefixSuffix from "../utils/enumValues/streetPrefixSuffixEnums.js";
import typeOfMaterialFirstIgnitedCodes from "../utils/enumValues/typeOfMaterialFirstIgnitedCodes.js";

// @desc    Get all actions taken codes
// @route   GET /api/v1/enums/actions-taken
// @access  Public
export const getActionsTakenCodes = asyncHandler(async (req, res) => {
  if (actionsTakenCodes) {
    res.status(200).json(actionsTakenCodes);
  } else {
    res.status(404);
    throw new Error("No actions taken codes found");
  }
});

// @desc    Get all aid given codes
// @route   GET /api/v1/enums/aid-given
// @access  Public
export const getAidGivenCodes = asyncHandler(async (req, res) => {
  if (aidGivenCodes) {
    res.status(200).json(aidGivenCodes);
  } else {
    res.status(404);
    throw new Error("No aid given codes found");
  }
});

// @desc    Get all area of fire origin codes
// @route   GET /api/v1/enums/area-of-fire-origin
// @access  Public
export const getAreaOfFireOriginCodes = asyncHandler(async (req, res) => {
  if (areaOfFireOriginCodes) {
    res.status(200).json(areaOfFireOriginCodes);
  } else {
    res.status(404);
    throw new Error("No area of fire origin codes found");
  }
});

// @desc    Get all county codes
// @route   GET /api/v1/enums/county
// @access  Public
export const getCountyCodes = asyncHandler(async (req, res) => {
  if (countyCodes) {
    res.status(200).json(countyCodes);
  } else {
    res.status(404);
    throw new Error("No county codes found");
  }
});

// @desc    Get all detector codes
// @route   GET /api/v1/enums/detector
// @access  Public
export const getDetectorCodes = asyncHandler(async (req, res) => {
  if (detectorCodes) {
    res.status(200).json(detectorCodes);
  } else {
    res.status(404);
    throw new Error("No detector codes found");
  }
});

// @desc    Get all hazardous materials release codes
// @route   GET /api/v1/enums/hazardous-materials-release
// @access  Public
export const getHazardousMaterialsReleaseCodes = asyncHandler(async (req, res) => {
  if (hazardousMaterialsReleaseCodes) {
    res.status(200).json(hazardousMaterialsReleaseCodes);
  } else {
    res.status(404);
    throw new Error("No hazardous materials release codes found");
  }
});

// @desc    Get all heat source codes
// @route   GET /api/v1/enums/heat-source
// @access  Public
export const getHeatSourceCodes = asyncHandler(async (req, res) => {
  if (heatSourceCodes) {
    res.status(200).json(heatSourceCodes);
  } else {
    res.status(404);
    throw new Error("No heat source codes found");
  }
});

// @desc    Get all incident reporting status codes
// @route   GET /api/v1/enums/incident-reporting-status
// @access  Public
export const getIncidentReportingStatusCodes = asyncHandler(async (req, res) => {
  if (incidentReportingStatus) {
    res.status(200).json(incidentReportingStatus);
  } else {
    res.status(404);
    throw new Error("No incident reporting status codes found");
  }
});

// @desc    Get all incident type codes
// @route   GET /api/v1/enums/incident-type
// @access  Public
export const getIncidentTypeCodes = asyncHandler(async (req, res) => {
  if (incidentTypeCodes) {
    res.status(200).json(incidentTypeCodes);
  } else {
    res.status(404);
    throw new Error("No incident type codes found");
  }
});

// @desc    Get all item first ignited codes
// @route   GET /api/v1/enums/item-first-ignited
// @access  Public
export const getItemFirstIgnitedCodes = asyncHandler(async (req, res) => {
  if (itemFirstIgnitedCodes) {
    res.status(200).json(itemFirstIgnitedCodes);
  } else {
    res.status(404);
    throw new Error("No item first ignited codes found");
  }
});

// @desc    Get all location type codes
// @route   GET /api/v1/enums/location-type
// @access  Public
export const getLocationTypeCodes = asyncHandler(async (req, res) => {
  if (locationTypeCodes) {
    res.status(200).json(locationTypeCodes);
  } else {
    res.status(404);
    throw new Error("No location type codes found");
  }
});

// @desc    Get all mixed use property codes
// @route   GET /api/v1/enums/mixed-use-property
// @access  Public
export const getMixedUsePropertyCodes = asyncHandler(async (req, res) => {
  if (mixedUsePropertyCodes) {
    res.status(200).json(mixedUsePropertyCodes);
  } else {
    res.status(404);
    throw new Error("No mixed use property codes found");
  }
});

// @desc    Get all name prefix codes
// @route   GET /api/v1/enums/name-prefix
// @access  Public
export const getNamePrefixCodes = asyncHandler(async (req, res) => {
  if (namePrefixEnums) {
    res.status(200).json(namePrefixEnums);
  } else {
    res.status(404);
    throw new Error("No name prefix codes found");
  }
});

// @desc    Get all name suffix codes
// @route   GET /api/v1/enums/name-suffix
// @access  Public
export const getNameSuffixCodes = asyncHandler(async (req, res) => {
  if (nameSuffixEnums) {
    res.status(200).json(nameSuffixEnums);
  } else {
    res.status(404);
    throw new Error("No name suffix codes found");
  }
});

// @desc    Get all onsite materials or product codes
// @route   GET /api/v1/enums/onsite-materials-or-product
// @access  Public
export const getOnsiteMaterialsOrProductCodes = asyncHandler(async (req, res) => {
  if (onsiteMaterialsOrProductCodes) {
    res.status(200).json(onsiteMaterialsOrProductCodes);
  } else {
    res.status(404);
    throw new Error("No onsite materials or product codes found");
  }
});

// @desc    Get all onsite materials storage use codes
// @route   GET /api/v1/enums/onsite-materials-storage-use
// @access  Public
export const getOnsiteMaterialsStorageUseCodes = asyncHandler(async (req, res) => {
  if (onsiteMaterialsStorageUseCodes) {
    res.status(200).json(onsiteMaterialsStorageUseCodes);
  } else {
    res.status(404);
    throw new Error("No onsite materials storage use codes found");
  }
});

// @desc    Get all property use codes
// @route   GET /api/v1/enums/property-use
// @access  Public
export const getPropertyUseCodes = asyncHandler(async (req, res) => {
  if (propertyUseCodes) {
    res.status(200).json(propertyUseCodes);
  } else {
    res.status(404);
    throw new Error("No property use codes found");
  }
});

// @desc    Get all state abbreviations
// @route   GET /api/v1/enums/state
// @access  Public
export const getStateAbbreviations = asyncHandler(async (req, res) => {
  if (stateAbbreviations) {
    res.status(200).json(stateAbbreviations);
  } else {
    res.status(404);
    throw new Error("No state abbreviations found");
  }
});

// @desc    Get all street prefix suffix codes
// @route   GET /api/v1/enums/street-prefix-suffix
// @access  Public
export const getStreetPrefixSuffixCodes = asyncHandler(async (req, res) => {
  if (streetPrefixSuffix) {
    res.status(200).json(streetPrefixSuffix);
  } else {
    res.status(404);
    throw new Error("No street prefix suffix codes found");
  }
});

// @desc    Get all type of material first ignited codes
// @route   GET /api/v1/enums/type-of-material-first-ignited
// @access  Public
export const getTypeOfMaterialFirstIgnitedCodes = asyncHandler(async (req, res) => {
  if (typeOfMaterialFirstIgnitedCodes) {
    res.status(200).json(typeOfMaterialFirstIgnitedCodes);
  } else {
    res.status(404);
    throw new Error("No type of material first ignited codes found");
  }
});
