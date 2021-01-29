const { db } = require('../utils/admin');

exports.getAllTalks = (request, response) => {
  db.collection('talks').orderBy('addedAt').get().then(
    (data) => {
      let talks = [];
      data.forEach((doc) => {
        talks.push({
          talkID: doc.id,
          title: doc.data().title,
          url: doc.data().url,
          addedAt: doc.data().addedAt,
        });
      });
      return response.json(talks);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};
