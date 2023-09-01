const express = require("express");
const bodyParser = require("body-parser");
const db=require("./models/db");
const Item=require("./models/items");

const app = express();
const port = 5000;
app.use(bodyParser.json());


// API Endpoints
app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/items", async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

app.put("/items/:id", async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedItem);
});

app.delete("/items/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
