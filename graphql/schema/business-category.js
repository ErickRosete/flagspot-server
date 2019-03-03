const businessCategoryDef = `
    type BusinessCategory {
        _id: ID!
        name: String
    }

    input BusinessCategoryInput{
        name: String
    }
`;

const businessCategoryQuery = `
    businessCategories: [BusinessCategory!]!
    businessCategory(id: ID!): BusinessCategory!
`;

const businessCategoryMutation = `
    createBusinessCategory(businessCategoryInput: BusinessCategoryInput!): BusinessCategory
    updateBusinessCategory(id: ID!, businessCategoryInput: BusinessCategoryInput!): BusinessCategory
    deleteBusinessCategory(id: ID!): BusinessCategory
`;

exports.businessCategoryDef = businessCategoryDef;
exports.businessCategoryQuery = businessCategoryQuery;
exports.businessCategoryMutation = businessCategoryMutation;