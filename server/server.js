

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const userRoutes = require('./routers/userRoutes');


dotenv.config();

connectDB()
const app = express();


app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//ROUTES
app.use('/api/v1/auth',userRoutes)

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>
{
    console.log(`Server Running ${PORT}`.bgGreen.white);
})