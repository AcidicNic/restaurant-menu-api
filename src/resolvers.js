/* eslint-disable max-len */
import { readFileSync } from 'fs';

// Read and parse the MenuData.json file
const data = JSON.parse(readFileSync('./data/MenuData.json', 'utf8'));

const resolvers = {
  // Query Resolvers
  Query: {
    // Return all categories
    categories: () => data.categories,
    // Return all menu items
    menuItems: () => data.menuItems,
    // Return a specific menu item by its ID
    menuItem: (_, { id }) => data.menuItems.find((menuItem) => menuItem.id === id),
  },
  // MenuItem Resolvers
  MenuItem: {
    // Find and return the category that a menu item belongs to
    category: (menuItem) => data.categories.find((category) => category.subcategories[0].menuItems.includes(menuItem.id)),
  },
  // Category Resolvers
  Category: {
    // Return all menu items that belong to a specific category
    menuItems: (category) => data.menuItems.filter((menuItem) => category.subcategories[0].menuItems.includes(menuItem.id)),
  },
  // SubCategory Resolvers
  SubCategory: {
    // Return all menu items that belong to a specific subcategory
    menuItems: (subcategory) => data.menuItems.filter((menuItem) => subcategory.menuItems.includes(menuItem.id)),
  },
};

export default resolvers;
