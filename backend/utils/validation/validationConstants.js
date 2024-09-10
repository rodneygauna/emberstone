// Required string
const requiredString = (fieldName) => ({
  type: String,
  required: [true, `${fieldName} is required`],
});

// Required string with max length
const requiredStringMaxLength = (fieldName, maxLength) => ({
  type: String,
  required: [true, `${fieldName} is required`],
  maxLength: maxLength,
});

// Optional string with max length
const optionalStringMaxLength = (maxLength) => ({
  type: String,
  maxLength: [maxLength, `Maximum length is ${maxLength}`],
});

// Required number with min and max
const requiredNumberMinMax = (fieldName, min, max) => ({
  type: Number,
  required: [true, `${fieldName} is required`],
  min: [min, `Minimum value is ${min}`],
  max: [max, `Maximum value is ${max}`],
});

// Optional number with min and max
const optionalNumberMinMax = (min, max) => ({
  type: Number,
  min: [min, `Minimum value is ${min}`],
  max: [max, `Maximum value is ${max}`],
});

// Phone number required validation
const requiredPhoneNumber = () => ({
  type: Number,
  required: [true, "Phone number is required."],
  min: [1000000000, "Phone number is too short. Must be 10 digits."],
  max: [9999999999, "Phone number is too long. Must be 10 digits."],
});

// Phone number optinsal validation
const optionalPhoneNumber = () => ({
  type: Number,
  min: [1000000000, "Phone number is too short. Must be 10 digits."],
  max: [9999999999, "Phone number is too long. Must be 10 digits."],
});

// Required enum validation
const requiredEnum = (fieldName, enumValues) => ({
  type: String,
  required: [true, `${fieldName} is required`],
  enum: {
    values: enumValues,
    message: `Invalid ${fieldName} value. Must be [${enumValues}]`,
  },
});

// Optional enum validation
const optionalEnum = (enumValues) => ({
  type: String,
  enum: {
    values: enumValues,
    message: `Invalide value. Must be [${enumValues}]`,
  },
});

// Required Y/N
const requiredYesNo = (fieldName) => ({
  type: String,
  required: [true, `${fieldName} is required`],
  enum: {
    values: ["Y", "N"],
    message: "Invalid value. Must be 'Y' for yes or 'N' for no.",
  },
});

// Optional Y/N
const optionalYesNo = () => ({
  type: String,
  enum: {
    values: ["Y", "N"],
    message: "Invalid value. Must be 'Y' for yes or 'N' for no.",
  },
});

// Required date validation
const requiredDate = (fieldName) => ({
  type: Date,
  required: [true, `${fieldName} is required`],
});

// Optional date validation
const optionalDate = () => ({
  type: Date,
});

// Required relational link (foreign keys)
const requireRef = (fieldName, refTable) => ({
  type: Schema.Types.ObjectId,
  ref: refTable,
  required: [true, `${fieldName} is required`],
});

export {
  requiredString,
  requiredStringMaxLength,
  optionalStringMaxLength,
  requiredNumberMinMax,
  optionalNumberMinMax,
  requiredPhoneNumber,
  optionalPhoneNumber,
  requiredEnum,
  optionalEnum,
  requiredYesNo,
  optionalYesNo,
  requiredDate,
  optionalDate,
  requireRef,
};
