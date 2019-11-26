# Recommandations and Statistics Management

> This microservice will be used to automatize the songs that are being played at a party, as well as getting statistics regarding the current session or for a user (individually, at a party, or generally, the all-time statistics).

## Database

### Statistics regarding a party

| party_id | party_duration | users_number | users_highestDanceCount | song_bestSong | song_worstSong |
| -------- | -------------- | ------------ | ----------------------- | ------------- | -------------- |
| -        | -              | -            | -                       | -             |                |

- party_id = the ID of a party 
- party_duration = the total duration of a party
- users_number = the total number of users that were in a party
- users_highestDanceCount = the highest number of users that were dancing at one point
- song_bestSong = the song that was voted the most
- song_worstSong = the song that was either voted too low, or there weren’t many users that danced to it

### Statistics regarding an user (at a party)

| party_id | user_id | user_totalSongs | user_favoriteSongs | user_duration |
| -------- | ------- | --------------- | ------------------ | ------------- |
| -        | -       | -               | -                  | -             |

- party_id = the ID of a party
- user_id = the ID of a user
- user_totalSongs = the total number of songs that an user danced to
- user_favoriteSongs = the songs that an user danced to a longer period of time
- user_duration = the duration regarding how much an user stayed in a party 

### Statistics regarding an user (generally)

| user_id | party_total | song_votedSongs | song_allTimeSong | host_total |
| ------- | ----------- | --------------- | ---------------- | ---------- |
| -       | -           | -               | -                | -          |

- user_id = the ID of a user
- party_total = the total number of parties that an user attended
- song_votedSongs = the total number of songs that an user voted for or against
- song_allTimeSong = the favorite song of an user (based on votes or total number of dance time)
- host_total = how many time an user hosted a party

## Endpoints

### Get user or party statistics

*Request:* **GET /stats?party_id=“”**

*Request:* **GET /stats?party_id=“”&user_id=“”**

*Request:* **GET /stats?user_id=“”**

