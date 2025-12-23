import { MongoClient, ObjectId } from "mongodb";

const uri =
  "mongodb+srv://AIMAR_db_user:zkViL15SB6P0BQxpß@cluster0.c5uvlyc.mongodb.net/sample_mflix?appName=Cluster0";

const client = new MongoClient(uri);

const run = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("sample_mflix").command({ ping: 1 });

    const aa = await client.db("sample_mflix").collection("movies").findOne();
    console.log(aa);

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

run();
