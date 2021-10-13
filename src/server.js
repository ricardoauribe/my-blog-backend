import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
  'learn-react': {
      upvotes: 0,
  },
  'learn-node': {
      upvotes: 0,
  },
  'my-thoughts-on-resumes': {
      upvotes: 0,
  },
}

const app = express();

//This will tell the app that the requests may have a body to be parsed
app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].upvotes += 1;

  res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
})

app.listen(8000, () => console.log('Listeningn on port 8000'));