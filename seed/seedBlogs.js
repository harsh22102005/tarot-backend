require("dotenv").config();
const mongoose = require("mongoose");
const Blog = require("../models/Blog");

const blogs = [
  {
    title: "Understanding Tarot Card Meanings: A Beginner's Guide",
    slug: "understanding-tarot-card-meanings",
    category: "Tarot",
    excerpt: "Discover the fundamental meanings behind the Major and Minor Arcana cards and how to interpret them in your readings.",
    content: `Tarot cards have been used for centuries as a tool for self-reflection and guidance. The deck consists of 78 cards, divided into the Major Arcana and the Minor Arcana.

Each card carries its own symbolism, and understanding these meanings is the first step toward becoming confident in your readings.`,
  },
  {
    title: "5 Healing Practices for Inner Peace",
    slug: "5-healing-practices-for-inner-peace",
    category: "Healing",
    excerpt: "Explore simple yet powerful healing practices you can incorporate into your daily routine for lasting calm.",
    content: `Finding inner peace in today's fast-paced world can feel challenging, but small, consistent practices can make a significant difference.

1. Mindful Breathing
2. Gratitude Journaling
3. Nature Connection
4. Energy Cleansing
5. Gentle Movement`,
  },
  {
    title: "Navigating Your Spiritual Growth Journey",
    slug: "navigating-spiritual-growth",
    category: "Spiritual Growth",
    excerpt: "Spiritual growth is not linear. Learn how to embrace each stage of your journey with patience and grace.",
    content: `Spiritual growth is often described as a journey rather than a destination. It's common to experience periods of clarity followed by confusion.

Embracing patience with yourself during this journey is essential.`,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database for seeding...");

    await Blog.insertMany(blogs);
    console.log("Blogs seeded successfully!");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDatabase();