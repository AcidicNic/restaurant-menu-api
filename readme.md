<h1 align="center">Restaurant Menu API</h1>

<p align="center">Simple GraphQL API for a restaurant menu.</p>

<p align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=Node.js&labelColor=white&color=43853D">
    <img alt="Static Badge" src="https://img.shields.io/badge/GraphQL-171e26?style=flat-square&logo=GraphQL&logoColor=f6009b&labelColor=white&color=f6009b">
</p>

## Notes

For this exercise, I decided to store the menu data in a JSON file (`data/data.json`), because the data is static. The json file is structured similar to how would structure a PostgreSQL DB for this project. Normally, I would use PostgreSQL. I would also include CRUD methods and GraphQL mutations. As well as a table for menus, so that alternate menus could be used and created.

The JSON menu is made up of `categories`, `menuItems`, and `options`. I simplified a bit and included `subCategories` inside of `categories` and `choices` in `options`. In a real relational database `subcategories` and `options` would have in their own tables and have their own IDs and foreign keys.

I've used GraphQL APIs, but I've never actually made an API with GraphQL so this was a fun exercise. I used [?](?) to create the GraphQL server. I used [?](?) for unit testing and [ESLint](https://eslint.org/) for linting.

## To-Do

- [ ] Fix resolvers
- [ ] Add type documentation/definitions for the client.
- [ ] Clean up code and file structure.
- [ ] Add comments.
- [ ] Add chai unit tests.

---

## Install & Setup

```bash
# Clone this repo
$ git clone https://github.com/AcidicNic/restaurant-menu-api && cd restaurant-menu-api

# Install dependencies & dev dependencies
$ yarn install
# OR
$ npm install --include=dev
```

## Usage

### Run the server locally

```bash
# Run the app
$ nodemon
```

At http://localhost:4000/graphql, you will find the GraphQL client.
POST requests can be sent here as well.

### Run unit tests

```bash
# Run the app
$ yarn test
# OR
$ npm run test
```

### Lint

```bash
# Run the app
$ yarn lint
# OR
$ npm run lint
```
s