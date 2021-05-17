const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Post = require('./schema/Post/Post.js');
const { validation } = require('./utils/validation.js');

const app = express();

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.e2oja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use(bodyParser.json());

app.post('/posts', (req, res) => {
  const data = req.body;
  const post = new Post(data);

  const { isValid, error } = validation(data);

  if (isValid) {
    res.status(400).json(error);
  }

  post.save(err => {
    if (err) {
      res.status(400).json(err);
    }
    res.status(200).json(post);
  });
});

app.get('/posts', (req, res) => {
  Post.find()
    .then(posts => res.status(200).json(posts.reverse()))
    .catch(err => res.status(404).json(err));
});

app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Start server');
});
