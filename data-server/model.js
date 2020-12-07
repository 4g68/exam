const mongoose = require("mongoose");

const ExpenseModel = mongoose.model("feedback",
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

const FeedbackModel = mongoose.model("feedback",
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
