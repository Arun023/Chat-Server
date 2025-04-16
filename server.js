const express = require('express');
const dotenv = require('dot-env');
const { chats } = require('./data/dummy');

const app = express();
dotenv.config;

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.get('/api/chat', (req, res) => {
  res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
  const { id } = req.params;
  console.log('custom logger [id]', id);
  const singleChat = chats.find((chat) => chat._id === id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server is running,on PORT'));
