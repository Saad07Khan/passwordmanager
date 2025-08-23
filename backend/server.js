const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb'); 
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

// Connecting to the MongoDB Client
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// App & Database
const dbName = process.env.DB_NAME 
const app = express()
const port = 3000 

// Middleware
app.use(bodyparser.json())
app.use(cors())

// Connect to MongoDB
async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

connectToMongo();

// Get all the passwords
app.get('/', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.find({}).toArray();
        res.json(findResult)
    } catch (error) {
        console.error('Error fetching passwords:', error);
        res.status(500).json({ error: 'Failed to fetch passwords' });
    }
})

// Save a password
app.post('/', async (req, res) => { 
    try {
        const password = req.body
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const result = await collection.insertOne(password);
        res.send({success: true, result: result})
    } catch (error) {
        console.error('Error saving password:', error);
        res.status(500).json({ error: 'Failed to save password' });
    }
})

// Delete a password by id
app.delete('/', async (req, res) => { 
    try {
        const { id } = req.body
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const result = await collection.deleteOne({ id: id });
        res.send({success: true, result: result})
    } catch (error) {
        console.error('Error deleting password:', error);
        res.status(500).json({ error: 'Failed to delete password' });
    }
})

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})