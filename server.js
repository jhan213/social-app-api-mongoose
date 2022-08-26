const express = require('express');
const db = require('./config/connection');
// Require model
const { Book } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/users', (req, res) => {
    User.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ message: 'something went wrong' });
        }
    });
});

app.get('/api/thoughts', (req, res) => {
    Thought.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ message: 'something went wrong' });
        }
    });
});

app.get('/all-books', (req, res) => {
    // Using model in route
    Book.find({}, (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Internal Server Error' });
        } else {
            res.status(200).json(result);
        }
    });
});

app.post('/new-user/:user', (req, res) => {
    const newUser = new User({ name: req.params.user });
    newUser.save();
    if (newUser) {
        res.status(200).json(newUser);
    } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
    }
});

app.post('/new-thought/:thought', (req, res) => {
    const newThought = new Thought({ name: req.params.thought });
    newThought.save();
    if (newThought) {
        res.status(200).json(newThought);
    } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
    }
});

app.delete('/find-one-delete/:user', (req, res) => {
    Genre.findOneAndDelete({ name: req.params.user }, (err, result) => {
        if (result) {
            res.status(200).json(result);
            console.log(`Deleted: ${result}`);
        } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ message: 'something went wrong' });
        }
    });
});

app.delete('/find-one-delete/:thought', (req, res) => {
    Genre.findOneAndDelete({ name: req.params.thought }, (err, result) => {
        if (result) {
            res.status(200).json(result);
            console.log(`Deleted: ${result}`);
        } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ message: 'something went wrong' });
        }
    });
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});

