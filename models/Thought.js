// Require mongoose
const mongoose = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now() },
    username: { type: String, required: true },
    reactions: [Reaction],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    });

// add virtual that returns number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Using mongoose.model() to compile a model based on the schema 'tho'
const Thought = mongoose.model('Thought', thoughtSchema);

// in case
// Thought.create(
//     {
//         thoughtText: "Here's a cool thought...",
//         username: 'lernantino',
//         userId: "5edff358a0fcb779aa7b118b",
//     },
//     (err) => (err ? handleError(err) : console.log('Created new document'))
// );

module.exports = Thought;
