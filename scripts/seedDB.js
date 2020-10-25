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
    password: "SuperSecure1:)",
    goal: 100,
    items: [
      {
        name: "apple",
        description: "very comfortable and awesome",
        price: 20,
        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fJei9NVjmP1ImM-jLn-lBQHaHa%26pid%3DApi&f=1",
        interest: [{ name: "First1 Last1", email: "First1@example.com", message: "I am interested in apple" }, { name: "First2 Last2", email: "First2@example.com", message: "I am interested in apple" } ]
      }
    ]
  },
  {
    username: "test1@example.com",
    password: "LessSecure1:(",
    goal: 100,
    items: [
      {
        name: "chair",
        description: "very comfortable and awesome",
        price: 20,
        imgUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        interest: [{ name: "First4 Last4", email: "First4@example.com", message: "I am interested in chair" }, { name: "First5 Last5", email: "First5@example.com", message: "I am interested in chair" }]
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
