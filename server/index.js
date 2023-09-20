require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { default: mongoose } = require('mongoose');
const router = require('./router/index');

const PORT = process.env.PORT || 5000;
const URL = process.env.BD_URL;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => { console.log(`server started on PORT = ${PORT}`) });
    } catch (error) {
        console.log(error);
    }
}
start();