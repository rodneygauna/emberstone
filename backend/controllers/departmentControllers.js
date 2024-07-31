import asyncHandler from "express-async-handler";

import Department from "../models/departmentModel.js";

// @desc    Create a new department
// @route   POST /api/v1/departments
// @access  Private
const createDepartment = asyncHandler(async (req, res) => {
  const { ...departmentData } = req.body;
  const department = await Department.create({ ...departmentData });

  if (department) {
    res.status(201).json(department);
  } else {
    res.status(400);
    throw new Error("Invalid department data");
  }
});

// @desc    Get all departments
// @route   GET /api/v1/departments
// @access  Private
const getDepartments = asyncHandler(async (req, res) => {
  const departments = await Department.find({});

  if (departments) {
    res.json(departments);
  } else {
    res.status(404);
    throw new Error("No departments found");
  }
});

// @desc    Get department by ID
// @route   GET /api/v1/departments/:id
// @access  Private
const getDepartmentById = asyncHandler(async (req, res) => {
  const department = await Department.findById(req.params.id);

  if (department) {
    res.json(department);
  } else {
    res.status(404);
    throw new Error("Department not found");
  }
});

// @desc    Update department by ID
// @route   PUT /api/v1/departments/:id
// @access  Private
const updateDepartment = asyncHandler(async (req, res) => {
  const department = await Department.findById(req.params.id);

  if (department) {
    const { ...departmentData } = req.body;
    const updatedDepartment = await Department.findByIdAndUpdate(
      department._id,
      { ...departmentData },
      { new: true }
    );
    res.status(201).json(updatedDepartment);
  } else {
    res.status(404);
    throw new Error("Department not found");
  }
});

export {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
};
