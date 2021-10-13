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
import { Express } from "express";

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
