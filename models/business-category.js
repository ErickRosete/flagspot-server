const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const businessCategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
    },
);

module.exports = mongoose.model("BusinessCategory", businessCategorySchema);
