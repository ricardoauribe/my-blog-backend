import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//This will tell the app that the requests may have a body to be parsed
app.use(bodyParser.json());

app.get('/hello', (req, res)=> res.send('Hello!'));

// using url params
app.get('/hello/:name', (req, res)=> res.send(`Hello ${req.params.name} !`));

//We are sayin to parse the body from the request and get the name property
app.post('/hello', (req,res)=> res.send(`Hello ${req.body.name}!`));

app.listen(8000, () => console.log('Listeningn on port 8000'));