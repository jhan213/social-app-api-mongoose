const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true, unique: true },
    email: {
        type: String,
        required: false,
        unique: true,
        // Must match a valid email address
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
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
// a virtual called friendCount
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

// Using mongoose.model() to compile a model based on the schema 'userSchema'
const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

// Create a new instance of the model, a document
User.create(
    {
        username: 'robotUser',
        email: 'socialapitest@gmail.com',
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = User;
