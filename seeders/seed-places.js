  // seeder/seed-places.js

const connect = require("../models");
const Place = require("../models/places");

const seed = async () => {
  await connect();

  Place.create([
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: '/images/thai_rest.jpeg',
      founded: 1989,
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: '/images/cat_rest.avif',
      founded: 2020,
    },
  ])
    .then(() => {
      console.log("Success!");
      process.exit();
    })
    .catch((err) => {
      console.log("Failure!", err);
      process.exit();
    });
};

seed();
