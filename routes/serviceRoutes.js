const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// GET all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find({ isActive: true });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET a single service by slug
router.get("/:slug", async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug });
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// POST create a new service
router.post("/", async (req, res) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(400).json({ message: "Error creating service", error: error.message });
  }
});

module.exports = router;