import asyncHandler from "express-async-handler";

import Station from "../models/stationModel.js";

// @desc    Create a new station
// @route   POST /api/v1/stations
// @access  Private
const createStation = asyncHandler(async (req, res) => {
  const { ...stationData } = req.body;
  const station = await Station.create({ ...stationData });

  if (station) {
    res.status(201).json(station);
  } else {
    res.status(400);
    throw new Error("Invalid station data");
  }
});

// @desc    Get all stations
// @route   GET /api/v1/stations
// @access  Private
const getStations = asyncHandler(async (req, res) => {
  const stations = await Station.find({});

  if (stations) {
    res.status(201).json(stations);
  } else {
    res.status(404);
    throw new Error("No stations found");
  }
});

// @desc    Get station by ID
// @route   GET /api/v1/stations/:id
// @access  Private
const getStationById = asyncHandler(async (req, res) => {
  const station = await Station.findById(req.params.id);

  if (station) {
    res.status(201).json(station);
  } else {
    res.status(404);
    throw new Error("Station not found");
  }
});

// @desc    Update station by ID
// @route   PUT /api/v1/stations/:id
// @access  Private
const updateStation = asyncHandler(async (req, res) => {
  const station = await Station.findById(req.params.id);

  if (station) {
    const { ...stationData } = req.body;
    const updatedStation = await Station.findByIdAndUpdate(
      station._id,
      { ...stationData },
      { new: true }
    );

    if (updatedStation) {
      res.status(201).json(updatedStation);
    } else {
      res.status(400);
      throw new Error("Invalid station data");
    }
  } else {
    res.status(404);
    throw new Error("Station not found");
  }
});

export { createStation, getStations, getStationById, updateStation };
