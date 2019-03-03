const businessDef = `
    type Business {
        _id: ID!
        name: String
    }

    input BusinessInput{
        name: String
    }
`;

const businessQuery = `
    businesses: [Business!]!
    business(id: ID!): Business
`;

const businessMutation = `
    createBusiness(businessInput: BusinessInput!): Business
    updateBusiness(id: ID!, businessInput: BusinessInput!): Business
    deleteBusiness(id: ID!): Business
`;

exports.businessDef = businessDef;
exports.businessQuery = businessQuery;
exports.businessMutation = businessMutation;