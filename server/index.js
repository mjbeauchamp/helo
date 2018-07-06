const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');
const massive = require('massive');
const controller = require('./controller.js');
const session = require('express-session');



const app = express();

let {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.use(session({
    //You pull the session secret variable from your .env file, which you need to create, along with installing, requiring, and configuring .env
    //BE SURE TO PUT YOUR .ENV FILE IN .GITIGNORE
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

app.get('/user_posts/:user_id', controller.get_user_posts);

app.post('/new_user', controller.create_user);

app.post('/login', controller.login);

app.post('/logout', controller.logout);




app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});