const express = require('express');
const formidable = require('formidable');
const path = require('path');
const router = express.Router();

router.get('/file', (req, res, next) => {
  res.send('Uploaded!');
});

router.post('/file', (req, res, next) => {
  const form = formidable({ 
    uploadDir: path.join(path.dirname(require.main.filename), 'data'),
    keepExtensions: true 
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
    }
    res.json({ fields, files });
  })
});

module.exports = router;