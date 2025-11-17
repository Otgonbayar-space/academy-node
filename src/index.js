import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/shine-medee-list", (req, res) => {
  const query = req.query;

  const news = [{ title: "1" }, { title: "2" }];

  if (query.searchValue) {
    const foundNews = news.filter((value) => {
      return value.title == query.searchValue;
    });

    res.json(foundNews);
  }

  res.json(news);
});

app.get("/shine-medee/:id", (req, res) => {
  const params = req.params;

  const news = [
    { title: "Hi", id: "1" },
    { title: "Bye", id: "2" },
  ];

  const foundNews = news.find((value) => {
    return value.id == params.id;
  });

  if (foundNews) {
    return res.json(foundNews);
  }
  res.send("Medee oldsongui");
});

app.post("/medee-nemeh", (req, res) => {
  const body = req.body;

  res.send("Medee nemeh");
});

app.post("/medee-zasah/:id", (req, res) => {
  const params = req.params;

  const news = [
    { title: "Hi", id: "1" },
    { title: "Bye", id: "2" },
  ];

  const foundNews = news.find((value) => {
    return value.id == params.id;
  });

  if (foundNews) {
    return res.json(foundNews);
  }
  res.send("Medee oldsongui");
});

// app.post("/", (req, res) => {
//   res.send("Hello World!!!!!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//get => r

//post => action
