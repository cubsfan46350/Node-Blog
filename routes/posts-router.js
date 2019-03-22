const express = require('express');

const server = express();

const router = express.Router();

const Posts = require('../data/helpers/postDb.js');

//Get Posts
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.get(req.query);
        res.status(200).json(posts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error Retrieving Posts',
        });
    }
});
















module.exports = router;