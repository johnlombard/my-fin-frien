const mongoose = require("mongoose");
const db = require("../models");
// const Schema = mongoose.Schema;
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/myfinfriend"
);

const userSeed = [
    {
        username: "admin",
        password: "password",
        holdings: []
    },
    {
        username: "Jawn",
        password: "Safety",
        holdings: [mongoose.Types.ObjectId('5c40aba9d5479da9c88c5280'), mongoose.Types.ObjectId('5c410be66459f0b3d37c097c')]
    }
];

const holdingSeed = [
    {
        _id: "5c410be66459f0b3d37c097c",
        ticker: "aapl",
        quantity: 10
    },
    {
        _id: '5c40aba9d5479da9c88c5280',
        ticker: "ibm",
        quantity: 15
    }
];

db.Holding
    .remove({})
    .then(() => db.Holding.collection.insertMany(holdingSeed))
    .then(data => {
            console.log(data.result.n + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });