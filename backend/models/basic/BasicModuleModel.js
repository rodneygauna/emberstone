import mongoose from "mongoose";

import { BasicModule_A_Object } from "./BasicModule_A_Object.js";
import { BasicModule_B_Object } from "./BasicModule_B_Object.js";
import { BasicModule_C_Object } from "./BasicModule_C_Object.js";
import { BasicModule_D_Object } from "./BasicModule_D_Object.js";
import { BasicModule_E1_Object } from "./BasicModule_E1_Object.js";
import { BasicModule_E2_Object } from "./BasicModule_E2_Object.js";
import { BasicModule_E3_Object } from "./BasicModule_E3_Object.js";
import { BasicModule_F_Object } from "./BasicModule_F_Object.js";
import { BasicModule_G1_Object } from "./BasicModule_G1_Object.js";
import { BasicModule_G2_Object } from "./BasicModule_G2_Object.js";
import { BasicModule_H_Object } from "./BasicModule_H_Object.js";
import { BasicModule_H1_Object } from "./BasicModule_H1_Object.js";
import { BasicModule_H2_Object } from "./BasicModule_H2_Object.js";
import { BasicModule_H3_Object } from "./BasicModule_H3_Object.js";
import { BasicModule_I_Object } from "./BasicModule_I_Object.js";
import { BasicModule_J_Object } from "./BasicModule_J_Object.js";
import { BasicModule_K1_Object } from "./BasicModule_K1_Object.js";
import { BasicModule_K2_Object } from "./BasicModule_K2_Object.js";
import { BasicModule_L1_Object } from "./BasicModule_L1_Object.js";
import { BasicModule_L2_Object } from "./BasicModule_L2_Object.js";
import { BasicModule_M_Object } from "./BasicModule_M_Object.js";

import { UpdatedBy_ObjectModule } from "../global/UpdatedBy_ObjectModule.js";

// Combine all basic module schemas into one object
const BasicModuleDefinition = {
  ...BasicModule_A_Object,
  ...BasicModule_B_Object,
  ...BasicModule_C_Object,
  ...BasicModule_D_Object,
  ...BasicModule_E1_Object,
  ...BasicModule_E2_Object,
  ...BasicModule_E3_Object,
  ...BasicModule_F_Object,
  ...BasicModule_G1_Object,
  ...BasicModule_G2_Object,
  ...BasicModule_H_Object,
  ...BasicModule_H1_Object,
  ...BasicModule_H2_Object,
  ...BasicModule_H3_Object,
  ...BasicModule_I_Object,
  ...BasicModule_J_Object,
  ...BasicModule_K1_Object,
  ...BasicModule_K2_Object,
  ...BasicModule_L1_Object,
  ...BasicModule_L2_Object,
  ...BasicModule_M_Object,
};

const BasicModuleSchema = new mongoose.Schema(
  BasicModuleDefinition,
  {
    created_by: {
      type: String,
      required: [true, "User ID is required."],
    },
  },
  ...UpdatedBy_ObjectModule,
  {
    timestamps: true,
  }
);

export default mongoose.model("BasicModule", BasicModuleSchema);
