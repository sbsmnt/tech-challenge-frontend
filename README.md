# MobieTrain's Tech Challenge for Frontend

This exercise will challenge your React skills. You'll be given a starting point with specific technologies from our stack, which you should use to complete your tasks.

## Challenge Statement

You'll work on a frontend web application for a movie gallery. This application should allow its users to view and manage movies, actors and genres. To get you started you'll find a local api developed with [miragejs](https://miragejs.com/) and some components with key implementation that you may use as an inspiration, as it is also inspired by our current practices.

### Local API Endpoints

For the bodies of non-get requests there's an interface that will help you getting started (i.e. PayloadMovie). Feel free to extend them as you need. You can find logs of the API in your DevTools' Console.

```
POST /api/movies
GET /api/movies
GET /api/movies/:id
PUT /api/movies/:id
DELETE /api/movies/:id

POST /api/actors
GET /api/actors
GET /api/actors/:id
PUT /api/actors/:id
DELETE /api/actors/:id

POST /api/genres
GET /api/genres
GET /api/genres/:id
PUT /api/genres/:id
DELETE /api/genres/:id
```

### What you CAN do

- Extend any given interface.
- Edit any given code (exceptions below).
- Use any design system and/or component library (we won't evaluate the looks, only the hows).
- Install any library that you find usefull to help you out (We'll, though, look at them and challenge your decisions).

### What you SHOULDN'T do

- Change the API unless there's a very strong reason to do so.
- Use a different stack from the given one (i.e. `redux-thunk` instead of the `redux-saga`).

## Issues

To complete this challenge, you should implement these following issues:

### MG-0001 Add actors list page

As a user, I want to see all the actors in the system.

### MG-0002 Add movies list page

As a user, I want to see all the movies in the system.

### MG-0003 Add movies by genre collections to the home page

As a user, I want to see multiple movies grouped by genre in the home page.

*(Note: the UI must be a card layout like the Netflix home page)*

### MG-0004 Add movie creation

As a user, I want to create a new movie.

*(Note: the API database is not permanent and we don't expect it to be. You must call the POST endpoint, nevertheless)*

### MG-0005 Add movie list filter by actor

As a user, I want to filter the movies list by actor.

### MG-0006 Add movie list filtered by actor on actor click

As a user, I want to see all the movies that an actor starred on when I click on one from the actors list.
