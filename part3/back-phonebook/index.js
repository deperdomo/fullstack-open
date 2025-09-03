require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person')

const app = express();

app.use(cors());
app.use(express.json());
morgan.token('body', (req) => req.method === 'POST' ? JSON.stringify(req.body) : '');
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

// Ejercicio 3.13: Obtener todas las personas desde MongoDB
app.get('/api/persons', (req, res, next) => {
    Person.find({}).then(persons => {
        res.json(persons)
    }).catch(error => next(error))
});

// Ejercicio 3.14: Guardar nuevas personas en MongoDB
app.post('/api/persons', (req, res, next) => {
    const body = req.body;

    if (!body.name || !body.number) {
        return res.status(400).json({ error: 'name or number missing' });
    }

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedPerson => {
        res.json(savedPerson)
    }).catch(error => next(error))
});

// Ejercicio 3.18: Obtener persona individual desde MongoDB
app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            if (person) {
                res.json(person)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
});

// Ejercicio 3.15: DELETE person desde MongoDB
app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(204).end()
        })
        .catch(error => next(error))
});

// Ejercicio 3.17: Actualizar número de teléfono con PUT
app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body;

    if (!body.name || !body.number) {
        return res.status(400).json({ error: 'name or number missing' });
    }

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(req.params.id, person, {
        new: true,
        runValidators: true,
        context: 'query'
    })
        .then(updatedPerson => {
            if (updatedPerson) {
                res.json(updatedPerson)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
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

// Actualizar ruta /info para usar la base de datos
app.get('/info', (req, res, next) => {
    Person.countDocuments({}).then(count => {
        const date = new Date();
        res.send(
            `<p>Phonebook has info for ${count} people</p><p>${date}</p>`
        );
    }).catch(error => next(error))
});

// Middleware para endpoints desconocidos
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

// Ejercicio 3.16: Middleware de manejo de errores
const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

// Este debe ser el último middleware cargado
app.use(errorHandler)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
