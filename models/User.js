// Require schema and model from mongoose
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: false, unique: true, },
    // Must match a valid email address (look into Mongoose's matching validation)
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    // Array of _id values referencing the Thought model
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    // Array of _id values referencing the User model (self-reference)
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    });

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

// Using mongoose.model() to compile a model based on the schema 'userSchema'
const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

// Create a new instance of the model, a document
User.create(
    {
        username: 'lernantino',
        email: 'lernantino@gmail.com',
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
);

// Create a new instance with required title and optional author properties
User.create(
    { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
    (err) => (err ? handleError(err) : console.log('Created new document'))
);

// Create a new instance with only required title
User.create({ title: 'Harold and the Purple Crayon' }, (err) =>
    err ? handleError(err) : console.log('Created new document')
);

module.exports = User;
