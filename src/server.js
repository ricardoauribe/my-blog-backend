import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
const app = express();

//This will tell the app that the requests may have a body to be parsed
app.use(bodyParser.json());

//Function to handle DB connection
//This will handle regular DB connection and validation and will receive a function to execute an operation over the DB
//The function itself is async and will requiere an await on the received function (operations)
//The function also receives the res object to be able to send the response over the catch section
const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true});
    const db = client.db('my-blog');

    await operations(db);
    client.close();

  } catch (error) {
    res.status(500).json({message: 'Error connecting to db', error});
  }
}


//Get data from a given document in Mongo DB
//This calls  withDB and sends a function to query the received article through params
app.get('/api/articles/:name', async (req, res) => {

  withDB( async (db) => {

    const articleName = req.params.name;
    const articlesInfo = await db.collection('articles').findOne({name: articleName});
    res.status(200).json(articlesInfo);
  
  }, res);
})

//End point to store upvotes at the MongoDB 
app.post('/api/articles/:name/upvote', async (req, res) => {

  withDB( async (db) => {
    const articleName = req.params.name;

    //We get the object to be modified
    const articlesInfo = await db.collection('articles').findOne({ name: articleName});

    //And execute the update
    await db.collection('articles').updateOne({ name: articleName }, {
      '$set': {
        upvotes: articlesInfo.upvotes + 1,
      },
    }, res);

    //Finally return the updated object
    const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName});
    res.status(200).json(articlesInfo);
  });
})


//End point to add comments to a given article
//This will use withDB sending a function that retrieves the received article through params 
//and the adds a comment from the received req body and uses it to update the comments section at the DB
app.post('/api/articles/:name/add-comment', (req, res) => {
  
  const {username, text} = req.body;
  const articleName = req.params.name;
  
  withDB( async(db) => {
    const articleInfo = await db.collection('articles').findOne({name: articleName});
    await db.collection('articles').updateOne({name: articleName}, {
      '$set': {
        comments: articleInfo.comments.concat({username, text}),
      },
    });

    const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});
    res.status(200).json(updatedArticleInfo)
  }, res);
  

  

})

app.listen(8000, () => console.log('Listeningn on port 8000'));