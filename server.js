const express = require("express");
const mongoose = require("mongoose");
const { routes } = require("./routes/routesUser");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB}`,
    {
      useNewUrlParser: true,
    }
  )
  .then(console.log("Database connect "))
  .catch(console.error());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Server Start on port ${port}`);
});
routes(app);

app.listen(port, () => console.log(`Server Start on port ${port}`));
