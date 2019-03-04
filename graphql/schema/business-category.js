const businessCategoryDef = `
    type BusinessCategory {
        _id: ID!
        name: String
    }
`;

const businessCategoryQuery = `
    businessCategories: [BusinessCategory!]!
    businessCategory(id: ID!): BusinessCategory!
`;

const businessCategoryMutation = `
    createBusinessCategory(name: String!): BusinessCategory
    updateBusinessCategory(id: ID!, name: String!): BusinessCategory
    deleteBusinessCategory(id: ID!): BusinessCategory
`;

exports.businessCategoryDef = businessCategoryDef;
exports.businessCategoryQuery = businessCategoryQuery;
exports.businessCategoryMutation = businessCategoryMutation;