import { readFileSync } from 'fs';

// Read and parse the MenuData.json file
const data = JSON.parse(readFileSync('./data/MenuData.json', 'utf8'));

const resolvers = {
  // Query Resolvers
  Query: {
    // Return all menu items
    allMenuItems: () => data.menuItems || [],

    // Return menus by their IDs
    menuItems: (_, { ids }) => data.menuItems.filter((menuItem) => ids.includes(menuItem.id)),

    // Return menu items by their category IDs
    menuItemsByCategories: (_, { ids }) => data.menuItems.filter((menuItem) => ids.includes(menuItem.categoryId)),

    // Return all categories
    allCategories: () => data.categories || [],

    // Return categories by their IDs
    categories: (_, { ids }) => data.categories.filter((category) => ids.includes(category.id)),

    // Return all subcategories
    allSubCategories: () => data.subCategories || [],

    // Return subcategories by their IDs
    subCategories: (_, { ids }) => data.subCategories.filter((subCategory) => ids.includes(subCategory.id)),

    // Return all options
    allOptions: () => data.options || [],

    // Return options by their IDs
    options: (_, { ids }) => data.options.filter((option) => ids.includes(option.id)),
  },

  // Field Resolvers
  MenuItem: {
    // Resolve the category field for a menu item
    category: (menuItem) => data.categories.find((category) => category.id === menuItem.categoryId),

    // Resolve the subCategory field for a menu item if it exists or return null
    subCategory: (menuItem) => {
      if (menuItem.subCategoryId) {
        return data.subCategories.find((subCategory) => subCategory.id === menuItem.subCategoryId);
      }
      return null;
    },

    // Resolve the options field for a menu item if it exists or return null
    options: (menuItem) => {
      if (menuItem.options) {
        return data.options.filter((option) => menuItem.options.includes(option.id));
      }
      return null;
    },
  },

  Category: {
    // Resolve the subCategories field for a category if it exists or return null
    subCategories: (category) => {
      if (category.subCategoryIds) {
        return data.subCategories.filter((subCategory) => category.subCategoryIds.includes(subCategory.id));
      }
      return null;
    },
  },

  Option: {
    // Resolve choices field for an option
    choices: (option) => option.choices,
  },
};

export default resolvers;
