const mongoose = require("mongoose");
const db = require("../database/models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yard-pal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const sellerSeed = [
  {
    username: "test@example.com",
    password: "superSecure:)",
    goal: 100,
    items: [
      {
        name: "chair",
        description: "very comfortable and awesome",
        price: 20
      }
    ]
  },
  {
    username: "test1@example.com",
    password: "lessSecure:(",
    goal: 100,
    items: [
      {
        name: "chair",
        description: "very comfortable and awesome",
        price: 20
      }
    ]
  },
];

db.User.deleteMany({})
  .then(() => db.User.insertMany(sellerSeed))
  .then((data) => {
    console.log('data', data);
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
