import asyncHandler from "express-async-handler";

import BasicModule from "../models/basic/BasicModuleModel.js";

// @desc    Create a new basic module incident
// @route   POST /api/v1/incidents/basicModule
// @access  Private
const createBasicModule = asyncHandler(async (req, res) => {
  const { ...incidentData } = req.body;
  const basicModule = await BasicModule.create({ ...incidentData });

  if (basicModule) {
    res.status(201).json(basicModule);
  } else {
    res.status(400);
    throw new Error("Invalid basic module data");
  }
});

// @desc    Get all basic module incidents
// @route   GET /api/v1/incidents/basicModule
// @access  Private
const getBasicModules = asyncHandler(async (req, res) => {
  const basicModules = await BasicModule.find({});

  if (basicModules) {
    res.json({
      _id: basicModules._id,
      status: basicModules.delete_change_no_activity_this_month,
      createdAt: basicModules.createdAt,
      updatedAt: basicModules.updatedAt,
    });
  } else {
    res.status(404);
    throw new Error("No basic module incidents found");
  }
});

// @desc    Get basic module incident by ID
// @route   GET /api/v1/incidents/basicModule/:id
// @access  Private
const getBasicModuleById = asyncHandler(async (req, res) => {
  const basicModule = await BasicModule.findById(req.params.id);

  if (basicModule) {
    res.json(basicModule);
  } else {
    res.status(404);
    throw new Error("Basic module incident not found");
  }
});

// @desc    Update basic module incident by ID
// @route   PUT /api/v1/incidents/basicModule/:id
// @access  Private
const updateBasicModule = asyncHandler(async (req, res) => {
  const basicModule = await BasicModule.findById(req.params.id);

  if (basicModule) {
    const updatedBasicModule = await basicModule.save();

    res.json(updatedBasicModule);
  } else {
    res.status(404);
    throw new Error("Basic module incident not found");
  }
});

export {
  createBasicModule,
  getBasicModules,
  getBasicModuleById,
  updateBasicModule,
};
