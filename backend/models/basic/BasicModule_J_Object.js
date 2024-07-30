import { requiredEnum } from "../../utils/validation/validationConstants.js";

import propertyUseCodes from "../../utils/enumValues/propertyUseCodes.js";

export const BasicModule_J_Object = {
  moduleJ_property_use: requiredEnum("Property User", propertyUseCodes),
};
