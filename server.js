const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');
const morgan = require('morgan');
app.use(morgan('common')); //can use "short"
//middleware lives in the middle of a request, intercepts request, calls upon it and goes to the next thing
//has 3 properties req, res, next(the next thing in the chain of middleware) a pipeline of functions your request goes through
//when you require something it runs the entire file

const Monsters = require('./models/stuff')
const controllers = require('./controllers/stuff');
app.use(bodyParser({urlencoded:true}));
app.use(methodOverride('_method'));
app.use('/monsters', controllers);

app.get('/', (req, res)=>{
    res.render('index.ejs')
});
//the routes have nothing to do with folders

//app.use is a function including a function that already continues, stuff doesn't need next because we're just sending a response
//those 3 spots will always be reqest, response and next

//if we make our own middleware:
// app.use((req, res, next)=>{
//     console.log("got emm");
//     console.log(req.url);
//     next(); //why is it a param and a method: represents next thing in the chain, calls next function in the chain
// })
//can have 2 routes that lead to the same function
//monsteres in our resource











app.listen(3000)