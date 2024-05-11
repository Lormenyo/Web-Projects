import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let visitedCountries = [];


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "admin1234",
  port: 5432,
});

db.connect();

async function checkVisitedCountries() {
  const results = await db.query("SELECT country_code from visited_countries");
  let countries = [];

  results.rows.forEach((row) => {
    countries.push(row.country_code);
  });
  return countries;
}



app.get("/", async (req, res) => {
  visitedCountries = await checkVisitedCountries();
  res.render("index.ejs", {
    countries: visitedCountries,
    total: visitedCountries.length,
  });
});

app.post("/add", async (req, res) => {
  const country = req.body.country;

try {
    const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [country]);
    const countryCode = result.rows[0].country_code;
    try {  
        await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
        res.redirect("/");
    } catch (error) {
      visitedCountries = await checkVisitedCountries();
      res.render("index.ejs", {
        countries: visitedCountries,
        total: visitedCountries.length,
        error: "Country has already been added, try again.",
      });
    }
} catch (error) {
  visitedCountries = await checkVisitedCountries();
  res.render("index.ejs", {
    countries: visitedCountries,
    total: visitedCountries.length,
    error: "Country name does not exist, try again.",
  });
}


});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
