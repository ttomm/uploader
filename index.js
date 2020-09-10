const express = require('express');
const fileRouter = require('./routes/file');
const app = express();

app.use('/api/v1', fileRouter);

app.listen(3005, () => console.log('API started'));