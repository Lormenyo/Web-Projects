import express from "express";

const app = new express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
