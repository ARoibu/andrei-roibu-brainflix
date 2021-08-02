const express = require("express");
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid')

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
    const videos = getVideos();
    const newVideo = {
        id: uniqid(),
        title: req.body.title,
        channel: "Red Cow",
        image: "http://localhost:8080/image9.jpg",
        description: req.body.description,
        views: "1,001,023",
        likes: "110,985",
        duration: "4:01",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: 1545162149000,
        comments: [
        {
            name: "Micheal Lyons",
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            id: uniqid(),
            likes: 0,
            timestamp: 1545162149000
        },
        {
            name: "Gary Wong",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            id: uniqid(),
            likes: 0,
            timestamp: 1544595784046
        },
        {
            name: "Theodore Duncan",
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            id: uniqid(),
            likes: 0,
            timestamp: 1542262984046
        }
    ]
    };

    videos.push(newVideo);
    fs.writeFileSync("./data/video-details.json", JSON.stringify(videos));
    res.json(videos);
});

module.exports = router;