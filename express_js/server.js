// server.js
const express = require('express');
const app = express();
const noteRoutes = require('./routes/notes');
const PORT = 3000;

// middleware
app.use(express.json());

// route use
app.use('/api/notes', noteRoutes);

// home route
app.get('/', (req, res) => {
    res.send('Welcome to Note Keeper API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
