const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../database/routes');
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

app.use(cors({origin:true,credentials: true,exposedHeaders: ['Content-Length', 'Set-Cookie', 'Date',"Origin", "X-Requested-With", "Content-Type"]}));
app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));

app.use(routes(express.Router()));

app.use('/static', express.static(__dirname + '/client'));



const PORT = 3456;
app.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`)
})