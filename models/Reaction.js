const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema(
    {
        reactionId: mongoose.ObjectId,
        reactionBody: { type: String, required: true, maxLength: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now() },
    },
    {
        // getter method to format timestamp on query
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;