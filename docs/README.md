<h1 align="center">Welcome to MUP 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
</p>

> Automatize the music picking at a party

## Author

👤 **Tibuleac Eduard, Tarnauceanu George & Dragoi Teo**

- Scholarly website: https://strongaloff.github.io/DAWJS_MUP/scholarly-report/index.html

---

## How to use

> There are 6 servers that need to be opened:
  - api-gateway (centralization of all the APIs)
  - account-manager (login and register)
  - party-manager (creating and joining a party)
  - song-manager (manages the Spotify API for meta-data)
  - serverUpload (for uploading a file on local)
  - server (render dynamically all the pages)
 > Start on "https://localhost:8089/register", which will prompt you to register an account. After that:
  - either if you create or want to join a party, the first thing should be uploading a .mp3 file 
  - add a name for a party (for creating) or add a party code (for joining)
  - add your favourite artist, genre and song, which should be used for automatisation
  - you will be redirected to a party page where the Gyroscope API will measure your movements and determine the next songs based on those movements

## Technology stack

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://devdocs.io/css/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [NodeJs](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [Multer](https://www.npmjs.com/package/multer)
- [mongodb](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [fs](https://nodejs.org/api/fs.html)
- [dotenv](https://www.npmjs.com/package/dotenv)
