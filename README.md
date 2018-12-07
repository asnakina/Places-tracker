# Place Tracker

For this exercise we are building a place tracker inspired by this [clever app](https://itunes.apple.com/us/app/see-saw-map/id791643418?mt=8) for tracking places you want to and have visited.

The assignment is to build an Express/React CRUD app with at least a single `Place` model.

As a **bonus**, implement user auth and associate places with users in a `Place` belongs to user and `User` has many places relationship.

## Getting Started

### Make a plan

#### ERD

What is the data model for this app.
The core assignment has a single table `places`.
The bonus will have a second table `users`.

The places table should have an `id`, `created_at` and `updated_at` timestamps, a `name`, `description`, a boolean `visited` and `address`

#### API Routes

Write out all of the routes (method and path) that your server will need to expose.
With each, include a brief description of what needs to be included in the request and what will happen on the server to fulfill that request.

#### Wireframes

The user should be able to:

1. See all of the places sorted into those that have been visited and those that have not
2. Create a new place
3. Delete a place from the list
4. Toggle the visited status of a particular place

If the app has auth, places should be specific to the user. The user only sees their own places.

#### Component Heirarchy

Once the wireframes are finished, box out components of the UI and write a componenet heirarchy.

### Starting Code

This repo does not have any starter code.

It is crucial that you don't start creating files and typing wildly. 
You should be writing at most 10 lines of code between running the app and confirming what you are trying to do worked.

When you write ten lines and something doesn't work, it is trivial to track down where the problem was introduced.

When you write a hundred lines across five files tracking down the bug becomes a nightmare.

We can think of CRUD apps as a database core with business logic wrapped in layers around it.

#### Sequelize

The first layer is the Sequelize ORM.
Define models that will define and allow interaction with the database.

1. Create a `package.json` file to track server dependencies: `npm init -y`
2. Install database related dependencies `npm i pg pg-hstore sequelize`
3. Create a file `models.js`, instantiate a connection to the database and define your model. Be sure to export your models and database connection
4. Create files `resetDb.js` and `seed.js`. Import the database connection to `resetDb.js` and calling `sequelize.sync({force: true})`. In the `seed.js` file, bulk create some sample data to work with
5. Write `npm scripts` to run `resetDb` and `seed`

#### Express

The next layer is made of the generic controller actions: Index, Show (may not be necessary here), Create, Update, and Delete and the Routes (verb + path) that map to each of those.

1. Install server related dependencies `npm i express morgan cors body-parser` and `npm i -D nodemon`
2. Create a file `server.js` which imports `express` and `middleware`, instantiates an express app, and sets it up to use necessary middleware
3. Write `npm scripts` for running the server in development with nodemon and in production with node
4. Use insomnia to test that the server is running and responding to requests with 404 (you haven't set any routes up yet)
5. In `server.js` add route handlers for the routes you wrote in your planning materials
    1. Go one at a time, only moving on to the next route when you have confirmed the last one works using insomnia


#### React

Finally we have the client which makes requests to our server and provides the user an interface for performing CRUD actions.

We want to generally follow the steps of [Thinking in React](https://reactjs.org/docs/thinking-in-react.html).

We already have the wireframe and our seed data.

1. Start by building out a static view passing data as props
2. Identify the minimal representation of state
    1. We already have some state in the data from our server
    2. There is also some UI state (controlled components, conditional rendering, etc)
3. Identify the proper location for state (as low as possible without duplication)
4. Write axios calls and set state in `componentDidMount` methods

