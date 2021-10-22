# Back End

## Used commands

Init the project:

```
npm init -y
```

To install express

```
npm install --save express
````

To add babel to be able to use ES6

```
npm install --save-dev @babel/core @babel/node @babel/preset-env
```

Then add the .babelrc file with

```
{
  "presets": ["@babel/preset-env"]
}
```

## Initial Server

Over server.js create a mininimal server

```
import express from 'express';

const app = express();

app.get('/hello', (req, res)=> res.send('Hello!'));

app.listen(8000, () => console.log('Listeningn on port 8000'));
```

To run it:

```
npx babel-node src/server.js
```

For post requests install body parser

```
npm install --save body-parser
```

and import it at server.js

```
import bodyParser from 'body-parser';
```

Now install nodemon for hot reloading

```
npm install --save-dev nodemon
```

This will enable us to use nodemon to reload the npm babel instruction by running:

```
npx nodemon --exec npx babel-node src/server.js 
```

Finally to make this easier to read add it as an script at package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx nodemon --exec npx babel-node src/server.js"  
  },
```

## Mongo DB

Go to MongoDB site to find the latest instructions to install

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

```
brew tap mongodb/brew
brew install mongodb-community@5.0
```

And Start the service

```
brew services start mongodb-community@5.0
```

or to stop the service:

```
brew services stop mongodb-community@5.0
```

Once started create a db

´´´
mongo
use my-blog
´´´

To insert a document

```
db.articles.insert([{ name: 'learn-react', 
... upvotes: 0,
... comments: [],
... }, {
... name: 'learn-node',
... upvotes: 0,
... comments: [],
... }, {
... name: 'my-thoughts-on-resumes',
... upvotes: 0,
... comments: [],
... }])
```

To check the insertion

```
db.articles.find({})
db.articles.find({name: 'learn-react'}).pretty()
```

control + c to exit

Now install the dependency to express

```
npm install --save mongodb
```
