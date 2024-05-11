import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "admin1234",
  port: 5432,
});

db.connect();

let items = [
  // { id: 1, title: "Buy milk" },
  // { id: 2, title: "Finish homework" },
];

async function getItems() {
  let todoItems = [];
  try {
    const result = await db.query("SELECT * FROM items");
    result.rows.forEach((item)=>{
      todoItems.push(item);
    });
  } catch (error) {
    console.error("Error", error);
  }
return todoItems;
}

app.get("/", async (req, res) => {
  items = await getItems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  // items.push({ title: item });
  try {
    await db.query("INSERT INTO items (title) VALUES ($1);", [item])
    await getItems();
    res.redirect("/");
  } catch (error) {
    console.error("Error", error);
  }
});

app.post("/edit", async (req, res) => {
  const itemId = req.body.updatedItemId;
  const itemTitle = req.body.updatedItemTitle;

  try {
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [itemTitle, itemId]);
    getItems();
    res.redirect("/");
  } catch (error) {
    console.error("Error", error);
  }
});

app.post("/delete", async (req, res) => {
  const itemId = req.body.deleteItemId;

  try {
    await db.query("DELETE FROM items WHERE id = $1", [itemId]);
    getItems();
    res.redirect("/");
  } catch (error) {
    console.error("Error", error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
