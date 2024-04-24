import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const _dirname = dirname(fileURLToPath(import.meta.url));
let bandName = "";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

function generateBandName(req, res, next) {
  bandName = `${req.body.street}${req.body.pet}`;
  next();
}

app.use(generateBandName);

app.get("/", (req, res)=>{
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res)=>{
  let pageHTML = `<h1>Your band name is </h1> </br> <h2> ${bandName}</h2>`;
  res.send(pageHTML);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
