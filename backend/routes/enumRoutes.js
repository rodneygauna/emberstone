import express from "express";
import {
  getActionsTakenCodes,
  getAidGivenCodes,
  getAreaOfFireOriginCodes,
  getCountyCodes,
  getDetectorCodes,
  getHazardousMaterialsReleaseCodes,
  getHeatSourceCodes,
  getIncidentReportingStatusCodes,
  getIncidentTypeCodes,
  getItemFirstIgnitedCodes,
  getLocationTypeCodes,
  getMixedUsePropertyCodes,
  getNamePrefixCodes,
  getNameSuffixCodes,
  getOnsiteMaterialsOrProductCodes,
  getOnsiteMaterialsStorageUseCodes,
  getPropertyUseCodes,
  getStateAbbreviations,
  getStreetPrefixSuffixCodes,
  getTypeOfMaterialFirstIgnitedCodes,
} from "../controllers/enumControllers.js";

const router = express.Router();

router.route("/actions-taken").get(getActionsTakenCodes);
router.route("/aid-given").get(getAidGivenCodes);
router.route("/area-of-fire-origin").get(getAreaOfFireOriginCodes);
router.route("/county").get(getCountyCodes);
router.route("/detector").get(getDetectorCodes);
router.route("/hazardous-materials-release").get(getHazardousMaterialsReleaseCodes);
router.route("/heat-source").get(getHeatSourceCodes);
router.route("/incident-reporting-status").get(getIncidentReportingStatusCodes);
router.route("/incident-type").get(getIncidentTypeCodes);
router.route("/item-first-ignited").get(getItemFirstIgnitedCodes);
router.route("/location-type").get(getLocationTypeCodes);
router.route("/mixed-use-property").get(getMixedUsePropertyCodes);
router.route("/name-prefix").get(getNamePrefixCodes);
router.route("/name-suffix").get(getNameSuffixCodes);
router.route("/onsite-materials-or-product").get(getOnsiteMaterialsOrProductCodes);
router.route("/onsite-materials-storage-use").get(getOnsiteMaterialsStorageUseCodes);
router.route("/property-use").get(getPropertyUseCodes);
router.route("/state-abbreviations").get(getStateAbbreviations);
router.route("/street-prefix-suffix").get(getStreetPrefixSuffixCodes);
router.route("/type-of-material-first-ignited").get(getTypeOfMaterialFirstIgnitedCodes);

export default router;