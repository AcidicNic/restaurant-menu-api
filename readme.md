<h1 align="center">Restaurant Menu API</h1>

<p align="center">Simple GraphQL API for a restaurant menu.</p>

<p align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=Node.js&labelColor=white&color=43853D">
    <img alt="Static Badge" src="https://img.shields.io/badge/GraphQL-171e26?style=flat-square&logo=GraphQL&logoColor=f6009b&labelColor=white&color=f6009b">
</p>

## Notes

Normally, I would use PostgreSQL, but for this exercise I decided to store the menu data in a JSON file (`src/data/data.json`). This is because the data is static and I wanted this to be easy & quick to run. I would also include CRUD methods and GraphQL mutations. As well as a table for menus, so that alternate menus could be used and created.

The JSON menu is made up of `categories`, `subCategories`, `menuItems`, and `options`. Each object in these fields has it's own ID, similar to how a relational DB like PostgreSQL would be structured.

I've used GraphQL APIs, but I've never actually made an API with GraphQL so this was a fun exercise.

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

### Lint

```bash
# Run the app
$ yarn lint
# OR
$ npm run lint
```

### Run the server locally

```bash
# Run the app
$ yarn start
# OR
$ npm run start
```

Load up <http://localhost:4000/graphql>, to use the GUI. HTTP requests can be sent here as well.

The sidebar on the left displays all fields and their descriptions. Click on a field to select/deselect it. I've included descriptions for all of the fields and types, which you can also see in the client.

Upon opening up the client, you should see the default query. This includes all of the available query fields, so they can easily be tested.

## Types

### MenuItem

* id: ID!
* name: String!
* description: String!
* price: Float!
* category: Category!
* subCategory: SubCategory (nullable)
* options: [Option] (nullable)

### Category

* id: ID!
* name: String!
* notes: String (nullable)
* subCategories: [SubCategory] (nullable)

### SubCategory

* id: ID!
* name: String!

### Option

* id: ID!
* name: String!
* choices: [Choice!]!

### Choice

* name: String!
* priceAdjustment: Float (nullable)

### Query Types

There's queries that return all objects of a type. There's queries for each type that return specific objects by their ID(s). There's also queries that return MenuItems by the Category and SubCategory ID(s).

```graphql
type Query {
    """Get all menu items."""
    allMenuItems: [MenuItem]!

    """Get menu items by their IDs."""
    menuItems(ids: [ID]): [MenuItem]!

    """Get menu items by their category IDs."""
    menuItemsByCategories(ids: [ID]): [MenuItem]!

    """Get menu items by their sub category IDs."""
    menuItemsBySubCategories(ids: [ID]): [MenuItem]!

    """Get all categories."""
    allCategories: [Category]!

    """Get a categories by their IDs."""
    categories(ids: [ID]): [Category]!

    """Get all sub categories."""
    allSubCategories: [SubCategory]!

    """Get sub categories by their IDs."""
    subCategories(ids: [ID]): [SubCategory]!

    """Get all options."""
    allOptions: [Option]!

    """Get option by their IDs."""
    options(ids: [ID]): [Option]!
}
```

## Example Queries

### Get All

```graphql
query GetAllQuery {

  allMenuItems {
    id
    name
    description
    price
    category {
      id
      name
      notes
    }
    subCategory {
      id
      name
    }
    options {
      id
      name
      choices {
        name
        priceAdjustment
      }
    }
  }
  
  allCategories {
    id
    name
    notes
    subCategories {
      id
      name
    }
  }

  allSubCategories {
    id
    name
  }
  
  allOptions {
    choices {
      priceAdjustment
      name
    }
    id
    name
  }
}
```

### Get By ID(s)

```graphql
{
  # Getting specific types by their ID(s)

  menuItems(ids: [11]) {
     id
    name
    description
    price
    category {
      id
      name
      notes
    }
    subCategory {
      id
      name
    }
    options {
      id
      name
      choices {
        name
        priceAdjustment
      }
    }
  }

  menuItemsByCategories(ids: [7, 8]) {
    id
    name
    description
    price
    category {
      id
      name
      notes
    }
    subCategory {
      id
      name
    }
    options {
      id
      name
      choices {
        name
        priceAdjustment
      }
    }
  }

  categories(ids: [3, 4]) {
    id
    name
    subCategories {
      id
      name
    }
  }

  subCategories(ids: [1, 2]) {
    id
    name
  }

  options(ids: [3]) {
    id
    name
    choices {
      name
      priceAdjustment
    }
  }

  menuItemsByCategories(ids: [7, 8]) {
    id
    name
    description
    price
    category {
      id
      name
      notes
    }
    subCategory {
      id
      name
    }
    options {
      id
      name
      choices {
        name
        priceAdjustment
      }
    }
  }

  
```