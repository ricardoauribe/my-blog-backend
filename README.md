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