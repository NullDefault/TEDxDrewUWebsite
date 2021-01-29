const functions = require("firebase-functions");
const app = require("express")();


const {
  getAllTalks,
} = require("./api/talks");

app.get("/talks", getAllTalks);
exports.api = functions.https.onRequest(app);
