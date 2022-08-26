// Require schema and model from mongoose
const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: mongoose.ObjectId,
    reactionBody: { type: String, required: true, maxLength: 280 },
    userName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    // getter method to format timestamp on query
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now() },
    // getter method
    username: { type: String, required: true },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    });

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Using mongoose.model() to compile a model based on the schema 'bookSchema'
const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

// Create a new instance of the model, a document
Thought.create(
    {
        title: 'Diary of Anne Frank',
        author: 'Anne Frank',
        publisher: 'Scholastic',
        stockCount: 10,
        price: 10,
        inStock: true,
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
);

// // Create a new instance with required title and optional author properties
// Thought.create(
//     { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
//     (err) => (err ? handleError(err) : console.log('Created new document'))
// );

// // Create a new instance with only required title
// Thought.create({ title: 'Harold and the Purple Crayon' }, (err) =>
//     err ? handleError(err) : console.log('Created new document')
// );

module.exports = Thought;
