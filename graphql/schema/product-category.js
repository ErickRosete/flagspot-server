const productCategoryDef = `
    type ProductCategory {
        _id: ID!
        name: String
    }
`;

const productCategoryQuery = `
    productCategories: [ProductCategory!]!
    productCategory(id: ID!): ProductCategory!
`;

const productCategoryMutation = `
    createProductCategory(name: String!): ProductCategory
    updateProductCategory(id: ID!, name: String!): ProductCategory
    deleteProductCategory(id: ID!): ProductCategory
`;

exports.productCategoryDef = productCategoryDef;
exports.productCategoryQuery = productCategoryQuery;
exports.productCategoryMutation = productCategoryMutation;