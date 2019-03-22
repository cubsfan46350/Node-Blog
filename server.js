const express = require('express');

const server = express();

const postsRouter = require('./routes/posts-router.js');

const usersRouter = require('./routes/users-router.js');

//MiddleWare
server.use(express.json());



server.use('/api/posts', postsRouter);
server.use('/api/users', usersRouter);






server.listen(4000, () => {
    console.log('API Running on Port 4000');
})




module.exports = server;