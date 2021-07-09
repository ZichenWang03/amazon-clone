const functions = require("firebase-functions");
//npm i express
const express = require("express");
//npm i cors
const cors = require("cors");
//npm i stripe
const stripe = require("stripe")(
  "sk_test_51JB527CP65e0GTIDSIgxmcZ21IZvQAfCXuP1TWZolqs1rppmRfh9Run1BMUR8zplA0D92OY9NaaFKm6atR5W3jQ000XOxQ6ojw"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ orgin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received! for the amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

//listen command
exports.api = functions.https.onRequest(app);

//endpoint: http://localhost:5001/clone-29599/us-central1/api
