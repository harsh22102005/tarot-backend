require("dotenv").config();
const mongoose = require("mongoose");
const Service = require("../models/Service");

const services = [
  {
    title: "Tarot Reading",
    slug: "tarot-reading-2",
    description: "Uncover insights about your past, present, and future through the ancient wisdom of tarot cards.",
    icon: "🔮",
  },
  {
    title: "Spiritual Consultation",
    slug: "spiritual-consultation",
    description: "One-on-one guidance to help you connect with your inner self and navigate life's path.",
    icon: "🕊️",
  },
  {
    title: "Healing Prayers",
    slug: "healing-prayers",
    description: "Guided prayer sessions to bring comfort, strength, and spiritual healing during difficult times.",
    icon: "🙏",
  },
  {
    title: "Relationship Guidance",
    slug: "relationship-guidance",
    description: "Gain clarity on matters of the heart and navigate relationships with wisdom and compassion.",
    icon: "💞",
  },
  {
    title: "Career Guidance",
    slug: "career-guidance",
    description: "Discover your true path and make confident career decisions aligned with your purpose.",
    icon: "🌟",
  },
  {
    title: "Energy Healing",
    slug: "energy-healing",
    description: "Restore balance and harmony within through gentle, intuitive energy healing practices.",
    icon: "💫",
  },
  {
    title: "Personalized Spiritual Guidance",
    slug: "personalized-guidance",
    description: "A fully customized session tailored to your unique spiritual journey and questions.",
    icon: "✨",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database for seeding...");

    await Service.insertMany(services);
    console.log("Services seeded successfully!");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDatabase();