const express = require("express");
const router = express.Router();
const fs = require('fs');

const getVideos = () => {
    const videoData = fs.readFileSync('./data/video-details.json');
    const parsedVideoData = JSON.parse(videoData);
    return parsedVideoData;
};

router.get('/', (req, res) => {
    const videos = getVideos();
    res.json(videos);
});

router.get('/:id', (req, res) => {
    const videos = getVideos();
    const videoDetails = videos.find(
        (video) => video.id === req.params.id
    );
    res.json(videoDetails);
});

router.post('/', (req, res) => {

});

module.exports = router;