const { MongoClient } = require('mongodb');

require('dotenv').config();

const url = process.env.REACT_APP_MONGO_AUTH;

const client = new MongoClient(url);

const dbName = 'user_1';

async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    // Use the collection "people"
    const col = db.collection('people');
    // Construct a document
    let personDocument = {
      name: { first: 'Alan', last: 'Turing' },
      birth: new Date(1912, 5, 23), // May 23, 1912
      death: new Date(1954, 5, 7), // May 7, 1954
      contribs: ['Turing machine', 'Turing test', 'Turingery'],
      views: 1250000,
    };
    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(personDocument);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
