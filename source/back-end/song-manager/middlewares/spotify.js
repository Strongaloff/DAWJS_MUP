const spotifyWebApi = require('spotify-web-api-node');
const dotenv = require('dotenv');

dotenv.config();

const initSpotifyApi = () => {
    return new spotifyWebApi({
        clientId: process.env.client_id,
        clientSecret: process.env.client_secret
    });
}

const mapResultToObject = (res) => {
    return {
        id: res.id,
        name: res.name,
        artist: res.artists[0].name,
        artistId: res.artists[0].id,
    }
}

exports.initSpotifyApi = initSpotifyApi;
exports.mapObject = mapResultToObject;