const express = require('express');
const router = express.Router();
const spotifyController = require('../controllers/spotifyController');

router.get('/search', spotifyController.searchSong);
router.post('/suggestions', spotifyController.suggestions);

module.exports = router;