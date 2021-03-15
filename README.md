# MobieTrain's Tech Challenge for Frontend

This exercise will challenge your React skills. You'll be given a starting point with specific technologies from our stack, which you should use to complete your tasks.

## Challenge Statement

You'll work on a frontend web application for a movie gallery. This application should allow its users to view and manage movies, actors and genres. To get you started you'll find a local api developed with [miragejs](https://miragejs.com/) and some components with key implementation that you may use as an inspiration, as it is also inspired by our current practices.

### Our Mindset

- Be consistent and concise. 
- Favor clear and clean code.
- Build tests! 
- Focus on scalable and flexible solutions.
- Deliver quality code over feature quantity.
- Create reusable code.
- Functional-programming is good!

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
- Use any design system and/or component library. As a matter of fact, you can design it yourself, we won't mind. We won't evaluate the looks of it (but try to make it nice enough), however we will evaluate how you achieved those looks.
- Install any library that you find usefull to help you out (We'll, though, look at them and challenge your decisions).

### What you SHOULDN'T do

- Change the API unless there's a very strong reason to do so.
- Use a different stack from the given one (i.e. `redux-thunk` instead of the `redux-saga`, or `enzyme` instead of `testing-library`). They're all awesome tools, but we're looking for the closest project possible to our daily workflow.

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

As a user, I want to see all the movies that an actor starred on when I click on his card in the actors list.

## Development Notes

### Prerequisites

- Node 12

### Installation

Fork this repository into your GitHub workspace and work from there.

### Development flow
First, you should start the service by running `$ npm run local`. This will start a development server. You can develop using TDD with `$ npm test`. A linter is configured and can be run as `$ npm run lint`.

*Attention: tests are considered part of code and responsibility of the developer.* Unit tests are provided alongside code, on *test.ts* files. We expect the new code to contain its own new test cases.

### Building
The solution should successfully build using `$ npm run build`.

## Submitting

You should submit the Fork link.