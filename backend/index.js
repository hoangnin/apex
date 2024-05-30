// packages
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import routes from './routes/index.route.js';

import cors from 'cors';
// utils
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express()

app.use(cors({
  origin: ['http://localhost:5173', 'https://apex-eight-pi.vercel.app' ]
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.listen(port, () => console.log(`Server is running on port ${port}`));