const functions = require("firebase-functions");
const app = require("express")();


const {
  getAllTalks,
  postTalk,
  deleteTalk,
  editTalk
} = require("./api/talks");

app.get("/talks", getAllTalks);
app.post('/talks', postTalk);
app.delete('/talks/:talkID', deleteTalk);
app.put('/talks/:talkID', editTalk)

exports.api = functions.https.onRequest(app);
