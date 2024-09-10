import { optionalEnum } from "../../utils/validation/validationConstants.js";

import hazardousMaterialsReleaseCodes from "../../utils/enumValues/hazardousMaterialsReleaseCodes.js";

export const BasicModule_H3_Object = {
  moduleH3_hazmat_released: optionalEnum(hazardousMaterialsReleaseCodes),
};
