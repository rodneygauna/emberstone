import {
  requiredEnum,
  optionalEnum,
} from "../../utils/validation/validationConstants.js";

import actionsTakenCodes from "../../utils/enumValues/actionsTakenCodes.js";

export const BasicModule_F_Object = {
  moduleF_actions_taken__1: requiredEnum("Actions Taken", actionsTakenCodes),
  moduleF_actions_taken__2: optionalEnum(actionsTakenCodes),
  moduleF_actions_taken__3: optionalEnum(actionsTakenCodes),
};
