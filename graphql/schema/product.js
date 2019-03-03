const productDef = `
    type Product {
        _id: ID!
        name: String
    }

    input ProductInput{
        name: String
    }
`;

const productQuery = `
    products: [Product!]!
    product(id: ID!): Product
`;

const productMutation = `
    createProduct(productInput: ProductInput!): Product
    updateProduct(id: ID!, productInput: ProductInput!): Product
    deleteProduct(id: ID!): Product
`;

exports.productDef = productDef;
exports.productQuery = productQuery;
exports.productMutation = productMutation;