const businessResolver = require("./business")
const businessCategoryResolver = require("./business-category");
const productResolver = require("./product");
const productCategoryResolver = require("./product-category");
const addressResolver = require("./address");
const userResolver = require("./user");

const rootResolver = {
  ...businessResolver,
  ...businessCategoryResolver,
  ...productResolver,
  ...productCategoryResolver,
  ...addressResolver,
  ...userResolver,
};

module.exports = rootResolver;
