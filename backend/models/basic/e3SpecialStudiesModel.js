import mongoose from "mongoose";
import {
  optionalNumberMinMax,
  optionalStringMaxLength,
} from "../../utils/validation/validationConstants.js";

const specialStudiesSchema = new mongoose.Schema({
  special_study_sequence_number_1: optionalNumberMinMax(1, 999),
  special_study_id_number_1: optionalNumberMinMax(1, 99999),
  special_study_code_number_1: optionalStringMaxLength(5),
  special_study_sequence_number_2: optionalNumberMinMax(1, 999),
  special_study_id_number_2: optionalNumberMinMax(1, 99999),
  special_study_code_number_2: optionalStringMaxLength(5),
});

export default mongoose.model("specialStudies", specialStudiesSchema);
