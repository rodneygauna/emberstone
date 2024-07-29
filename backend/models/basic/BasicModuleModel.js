import mongoose from "mongoose";

import BasicModule_A from "./BasicModule_A_Model.js";
import BasicModule_B from "./BasicModule_B_Model.js";
import BasicModule_C from "./BasicModule_C_Model.js";
import BasicModule_D from "./BasicModule_D_Model.js";
import BasicModule_E1 from "./BasicModule_E1_Model.js";
import BasicModule_E2 from "./BasicModule_E2_Model.js";
import BasicModule_E3 from "./BasicModule_E3_Model.js";
import BasicModule_F from "./BasicModule_F_Model.js";
import BasicModule_G1 from "./BasicModule_G1_Model.js";
import BasicModule_G2 from "./BasicModule_G2_Model.js";
import BasicModule_H from "./BasicModule_H_Model.js";
import BasicModule_H1 from "./BasicModule_H1_Model.js";
import BasicModule_H2 from "./BasicModule_H2_Model.js";
import BasicModule_H3 from "./BasicModule_H3_Model.js";
import BasicModule_I from "./BasicModule_I_Model.js";
import BasicModule_J from "./BasicModule_J_Model.js";
import BasicModule_K1 from "./BasicModule_K1_Model.js";
import BasicModule_K2 from "./BasicModule_K2_Model.js";
import BasicModule_L1 from "./BasicModule_L1_Model.js";
import BasicModule_L2 from "./BasicModule_L2_Model.js";
import BasicModule_M from "./BasicModule_M_Model.js";

const BasicModuleSchema = new mongoose.Schema(
  {
    basicModule_A: BasicModule_A.schema,
    basicModule_B: BasicModule_B.schema,
    basicModule_C: BasicModule_C.schema,
    basicModule_D: BasicModule_D.schema,
    basicModule_E1: BasicModule_E1.schema,
    basicModule_E2: BasicModule_E2.schema,
    basicModule_E3: BasicModule_E3.schema,
    basicModule_F: BasicModule_F.schema,
    basicModule_G1: BasicModule_G1.schema,
    basicModule_G2: BasicModule_G2.schema,
    basicModule_H: BasicModule_H.schema,
    basicModule_H1: BasicModule_H1.schema,
    basicModule_H2: BasicModule_H2.schema,
    basicModule_H3: BasicModule_H3.schema,
    basicModule_I: BasicModule_I.schema,
    basicModule_J: BasicModule_J.schema,
    basicModule_K1: BasicModule_K1.schema,
    basicModule_K2: BasicModule_K2.schema,
    basicModule_L1: BasicModule_L1.schema,
    basicModule_L2: BasicModule_L2.schema,
    basicModule_M: BasicModule_M.schema,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("BasicModule", BasicModuleSchema);
