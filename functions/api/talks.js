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

exports.postTalk = (request, response) => {
  if (request.body.title.trim() === '') {
    return response.status(400).json({ title: 'Must not be empty' });
  }

  if (request.body.url.trim() === '') {
    return response.status(400).json({ url: 'Must not be empty' });
  }

  const newTalkItem = {
    title: request.body.title,
    url: request.body.url,
    addedAt: new Date().toISOString(),
  };

  db.collection('talks').add(newTalkItem).then(
    (doc) => {
      const responseTalkItem = newTalkItem;
      responseTalkItem.id = doc.id;
      return response.json(responseTalkItem);
    })
    .catch((err) => {
        response.status(500).json({ error: 'Something went wrong' });
        console.log(err);
      },
    );
};

exports.deleteTalk = (request, response) => {
  const document = db.doc(`/talks/${request.params.talkID}`);
  document.get().then((doc) => {
    if (!doc.exists) {
      return response.status(404).json({ error: 'Talk not found' });
    }
    return document.delete();
  })
    .then(() => {
      response.json({ message: 'Successful deletion' });
    })
    .catch((err) => {
      console.log(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.editTalk = (request, response) => {
  if (request.body.talkID || request.body.addedAt) {
    response.status(403).json({ message: 'Not allowed to edit' });
  }
  let document = db.collection('talks').doc(`${request.params.talkID}`);
  document.update(request.body).then(() => {
    response.json({ message: 'Updated successfully' });
  }).catch((err) => {
    console.log(err);
    return response.status(500).json({
      error: err.code,
    });
  });
};
