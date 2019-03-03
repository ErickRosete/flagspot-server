const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const businessSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    attentionSchedule: {
        type: String,
        required: true
    },
    imageLink: String,
    addresses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Address"
        }
    ],
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: "BusinessCategory"
        }
    ],
    menu: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

module.exports = mongoose.model("Business", businessSchema);
