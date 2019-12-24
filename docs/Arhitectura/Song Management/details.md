# Song Management

> ## General Description
>

​	Account Management is a service meant to run song operations like adding a song, removing a song, updating a song details, adding a song to a playlist and removing a song from a playlist as well as getting the details of a song which provides data useful to other services like the Statistics Service.





> ## Database

### Song Data:

- Id
- Name
- Artist
- Genre

### Playlist Data:

- Id
- SongList





> ## EndPoints

### Add Song to a Party Session

**POST** /playlist/{playlist_id}

​	Request Body: {"song_id"}

### Delete Song from a Party Session

**DELETE** /playlist/{playlist_id}

​	Request Body: {"song_id"}

### Get By Playlist Id

**GET** /playlist/{playlist_id}

### Add Song to Db

**POST** /songs

​	Request Body: {"song_name", "song_artist", "song_genre"}

### Remove Song from Db

**DELETE** /songs/{song_id}

### Complete Song Details

**PUT** /songs/{song_id}

​	Request Body {"song_name", "song_artist", "song_genre"}

### Get Song By Id

**GET** /songs/{song_id}

### Get Songs By Artist

**GET** /songs/{song_name}

### Get Songs By Genre

**GET** /songs/{song_genre}