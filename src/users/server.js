const express = require('express')
const app = express();
const cors = require('cors');
var router = require('./route/routes');

const mongoose = require('mongoose');

app.use(cors(
    origin = 'http://localhost:4200/'
));

app.listen(3213,function check(error) {
    if(error)
        console.log(error);
    else
        console.log('Server started');
})

mongoose.connect('mongodb://127.0.0.1:27017/Users', {useNewUrlParser: true, useUnifiedTopology: true},)
    .then(() => console.log('Connected'))
    .catch((error) => {console.log(error);});
     
    
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(router);
    