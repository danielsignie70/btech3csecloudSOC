const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const reservationRoutes = require('./routes/reservations');
const commentRoutes = require('./routes/comments');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/reservationdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/reservations', reservationRoutes);
app.use('/api/comments', commentRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));