const { buildSchema } = require("graphql");

const { businessDef, businessQuery, businessMutation } = require("./business");
const { businessCategoryDef, businessCategoryQuery, businessCategoryMutation } = require("./business-category");
const { productDef, productQuery, productMutation } = require("./product");
const { productCategoryDef, productCategoryQuery, productCategoryMutation } = require("./product-category");
const { addressDef, addressQuery, addressMutation } = require("./address");
const { userDef, userQuery, userMutation } = require("./user");


module.exports = buildSchema(`
  ${businessDef}
  ${businessCategoryDef}
  ${productDef}
  ${productCategoryDef}
  ${addressDef}
  ${userDef}

  type RootQuery {
    ${businessQuery}
    ${businessCategoryQuery}
    ${productQuery}
    ${productCategoryQuery}
    ${addressQuery}
    ${userQuery}
  }

  type RootMutation {
    ${businessMutation}
    ${businessCategoryMutation}
    ${productMutation}
    ${productCategoryMutation}
    ${addressMutation}
    ${userMutation}
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
