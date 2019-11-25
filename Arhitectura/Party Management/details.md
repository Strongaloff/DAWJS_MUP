# Party Management

> The party management microservice will be used to handle some details regarding a party session, such as: creating a party, deleting a party, inviting users, removing users, joining a party,  leaving a party, getting the current playlist of the party and voting a song.

## Database

| party_id | party_name | host | playlist | invite_code |
| -------- | ---------- | ---- | -------- | ----------- |
| -        | -          | -    | -        | -           |

| party_id | user_list |
| -------- | --------- |
| -        | -         |

Each column refers to:

 - party_id = the ID of a party
 - party_name = the name of a party
 - host = the name of the person that is hosting the party
 - playlist_id = the id of the song list that is or will be played at the party
 - invite_code = the code generated for a party in order to invite other users
 - user_list = the users that are in a party

## Endpoints

### Create a party

*Request:* **POST /party?party_name=“”**

### Deleting a party

*Request*: **DELETE /party?party_name=“”**

### Inviting an user

*Request*: **POST /invite?user_name=“”**

### Removing an user

*Request:* **DELETE /userRemove?user_name=“”**

### Joining a party

*Request:* **POST /joinParty?invite_code=“”**

### Leaving a party

*Request:* **DELETE /leaveParty?party_name=“”**

### Getting the party playlist

*Request:* **GET /playlist?party_name=“”**

### Vote for a song

*Request:* **POST /voteSong?song_id=“”**