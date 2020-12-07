const mongoose = require("mongoose");
const { ObjectUnsubscribedError } = require("rxjs");

const ExpenseModel = mongoose.model("expense",
    mongoose.Schema({
        desc: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        category: {
            type: Number,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
        
    })
);

const FeedbackModel = mongoose.model("category",
    mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    })
);


module.exports = FeedbackModel;
