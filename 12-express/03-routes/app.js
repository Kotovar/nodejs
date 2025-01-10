const express = require('express');
const router = require('./routes');

const app = express();
app.use(router);

// app.route('/comments').get(getCommentsHandler).post(postCommentsHandler);

app.listen(5000, () => console.log('Server was started on port 5000'));
