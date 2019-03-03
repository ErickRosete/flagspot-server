const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const businessCategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        businesses: [{
            type: Schema.Types.ObjectId,
            ref: "Business"
        }]
    },
);

module.exports = mongoose.model("BusinessCategory", businessCategorySchema);
