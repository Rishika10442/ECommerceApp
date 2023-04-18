const express = require('express');
const app = express();
const port = 8000;
const path= require('path');
const connectDB=require('./config/mongoose');
const bodyParser=require('body-parser')

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',require('./routes/index'));

const start = async() =>{
    try {
        const url = 'mongodb+srv://10442rishika:gL0jyPkUMeJRbGET@cluster1.kjnkcgf.mongodb.net/test';
        await connectDB(url);
        console.log("connected to db");
        app.listen(port,function(){
            console.log(`Server running at port: ${port}`);
        });

    } catch (error) {
        console.log(error);
    }
}
start();
