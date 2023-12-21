const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");


router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    res.json(dbJson);
  });

  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };