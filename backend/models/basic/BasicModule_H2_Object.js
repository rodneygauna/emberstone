import { optionalEnum } from "../../utils/validation/validationConstants.js";

import incidentTypeCodes from "../../utils/enumValues/incidentTypeCodes.js";

export const BasicModule_H2_Object = {
  detector_alerted_occupants: optionalEnum(incidentTypeCodes),
};
