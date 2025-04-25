require('dotenv').config();             // .env dagi MONGO_URI va PORT ni o‘qish uchun
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');           // db.js to‘g‘ri yo‘l!
const orderRoutes = require('./routes/orderRoutes'); // orderRoutes.js to‘g‘ri yo‘l!

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));