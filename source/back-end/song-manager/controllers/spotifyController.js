const dotenv = require('dotenv');
const spotifyMiddleware = require('../middlewares/spotify');

dotenv.config();

exports.searchSong = async (req, res) => {
    const spotifyApi = spotifyMiddleware.initSpotifyApi();

    spotifyApi.clientCredentialsGrant().then(async data => {

        spotifyApi.setAccessToken(data.body.access_token);
        spotifyApi.searchTracks(`track:${req.query['name']} artist:${req.query['artist']} genre:${req.query['genre']}`).then(data => {
            const toSend = data.body.tracks.items.map(item => {
                const temp = spotifyMiddleware.mapObject(item);
                temp['genre'] = req.query['genre'];
                return temp;
            });
            toSend.length > 0
                ? res.status(200).send(toSend[0])
                : res.status(404).send('No tracks found')
        }, err => {
            res.status(err.statusCode).send(`Something went wrong with searchTracks: ${err.message}`);
        });
    }, err => {
        res.status(err.statusCode).send(`Something went wrong with the credentials: ${err.message}`);
    });
}

exports.suggestions = async (req, res) => {
    const spotifyApi = spotifyMiddleware.initSpotifyApi();

    spotifyApi.clientCredentialsGrant().then(data => {
        spotifyApi.setAccessToken(data.body.access_token);

        spotifyApi.getRecommendations({ seed_artists: req.body['artitsts'], seed_tracks: req.body['tracks'] })
            .then(recoms => {
                const toSend = recoms.body.tracks.map(recom => {
                    const temp = spotifyMiddleware.mapObject(recom)
                    temp['uri'] = recom.uri;
                    return temp
                });
                res.status(recoms.statusCode).send(toSend);
            }, err => {
                res.status(err.statusCode).send(err.message);
            })
    }, err => {
        res.status(err.statusCode).send(err.message);
    })
}