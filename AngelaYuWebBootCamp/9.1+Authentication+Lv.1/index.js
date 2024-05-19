import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "admin1234",
  port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkIfUserExists = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (checkIfUserExists.rows.length > 0){
      res.send("User already exists. Try logging in!");
    }else{
      const results = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password]);
      console.log(results);
      res.render("secrets.ejs");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkIfUserExists = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (checkIfUserExists.rows.length > 0){
      const storedPassword = checkIfUserExists.rows[0].password;


      if (storedPassword == password) {
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect Password");
      }
      
    }else{
      res.send("User not found :(");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
