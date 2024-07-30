import { requiredEnum } from "../../utils/validation/validationConstants.js";

import incidentTypeCodes from "../../utils/enumValues/incidentTypeCodes.js";

export const BasicModule_C_Object = {
  moduleC_incident_type: requiredEnum("Incident Type", incidentTypeCodes),
};
