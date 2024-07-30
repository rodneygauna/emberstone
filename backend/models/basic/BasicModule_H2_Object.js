import { optionalEnum } from "../../utils/validation/validationConstants.js";

import incidentTypeCodes from "../../utils/enumValues/incidentTypeCodes.js";

export const BasicModule_H2_Object = {
  moduleH2_detector_alerted_occupants: optionalEnum(incidentTypeCodes),
};
