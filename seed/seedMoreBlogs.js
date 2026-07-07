require("dotenv").config();
const mongoose = require("mongoose");
const Blog = require("../models/Blog");

const newBlogs = [
  {
    title: "Full Moon Guidance: Setting Intentions",
    slug: "full-moon-guidance-june",
    category: "Full Moon",
    excerpt: "The full moon is a powerful time for reflection and release. Here's how to make the most of this lunar energy.",
    content: `The full moon has long been regarded as a time of heightened energy, illumination, and culmination. It's the point in the lunar cycle when intentions set during the new moon come to fruition.

This is an ideal time for reflection: What has come to light in your life recently? What emotions or realizations are surfacing? Journaling during the full moon can help you process these insights.

The full moon is also associated with release. Consider what no longer serves you and consciously let it go.`,
  },
  {
    title: "The Power of Daily Positive Affirmations",
    slug: "daily-positive-affirmations",
    category: "Affirmations",
    excerpt: "Learn how consistent affirmation practice can rewire your mindset and attract positive change into your life.",
    content: `Affirmations are positive statements that, when repeated consistently, can help reshape your subconscious beliefs and mindset over time.

For affirmations to be effective, they should be stated in the present tense and feel believable to you. Instead of "I will be confident," try "I am growing more confident every day."

Incorporating affirmations into your morning routine can amplify their impact over time.`,
  },
];

const seedMore = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database for seeding...");

    await Blog.insertMany(newBlogs);
    console.log("New blogs (Full Moon & Affirmations) seeded successfully!");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedMore();