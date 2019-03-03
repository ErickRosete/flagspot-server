const productCategoryDef = `
    type ProductCategory {
        _id: ID!
        name: String
    }

    input ProductCategoryInput{
        name: String
    }
`;

const productCategoryQuery = `
    productCategories: [ProductCategory!]!
    productCategory(id: ID!): ProductCategory!
`;

const productCategoryMutation = `
    createProductCategory(productCategoryInput: ProductCategoryInput!): ProductCategory
    updateProductCategory(id: ID!, productCategoryInput: ProductCategoryInput!): ProductCategory
    deleteProductCategory(id: ID!): ProductCategory
`;

exports.productCategoryDef = productCategoryDef;
exports.productCategoryQuery = productCategoryQuery;
exports.productCategoryMutation = productCategoryMutation;