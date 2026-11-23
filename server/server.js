const express = require('express');
const dotenv = require('dotenv');

const { connectDB } = require('./config/dbConnection');
const userRouter = require('./routes/user.route');

dotenv.config();
const app = express();

// middleware
app.use(express.json());

// health check
app.get('/health', (req, res) => {
    console.log("health")
    res.status(200).json({ status: 'ok' });
});

// connect mongodb
connectDB();

// routes
app.use('/api/user', userRouter);

// path not found
app.use((req, res) => {
    res.status(404).send({
        message: 'path not found'
    });
});

// error handler
app.use((err, req, res, next) => {
    console.log('error message: ', err.message);
    res.status(500).send({
        message: 'internal server error'
    });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Application is listening in port: ${port}`);
});
