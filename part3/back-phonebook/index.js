const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
morgan.token('body', (req) => req.method === 'POST' ? JSON.stringify(req.body) : '');
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

const persons = [
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
];

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(p => p.id === id);
    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = persons.findIndex(p => p.id === id);
    if (index !== -1) {
        persons.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).end();
    }
});

app.post('/api/persons', (req, res) => {
    const body = req.body;
    if (!body.name || !body.number) {
        return res.status(400).json({ error: 'name or number missing' });
    }
    if (persons.some(p => p.name === body.name)) {
        return res.status(400).json({ error: 'name must be unique' });
    }
    const person = {
        id: Math.floor(Math.random() * 1e9),
        name: body.name,
        number: body.number
    };
    persons.push(person);
    res.json(person);
});

app.put('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    
    if (!body.name || !body.number) {
        return res.status(400).json({ error: 'name or number missing' });
    }
    
    const personIndex = persons.findIndex(p => p.id === id);
    if (personIndex === -1) {
        return res.status(404).json({ error: 'person not found' });
    }
    
    // Check if name already exists (excluding the current person)
    const nameExists = persons.some(p => p.name === body.name && p.id !== id);
    if (nameExists) {
        return res.status(400).json({ error: 'name must be unique' });
    }
    
    const updatedPerson = {
        id: id,
        name: body.name,
        number: body.number
    };
    
    persons[personIndex] = updatedPerson;
    res.json(updatedPerson);
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Phonebook API</h1>
        <p>Welcome to the Phonebook API!</p>
        <ul>
            <li><a href="/api/persons">Get all persons</a></li>
            <li><a href="/info">Get info</a></li>
        </ul>
    `);
});

app.get('/info', (req, res) => {
    const count = persons.length;
    const date = new Date();
    res.send(
        `<p>Phonebook has info for ${count} people</p><p>${date}</p>`
    );
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
