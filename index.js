import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("hello this is my home page")
})
app.get("/contact", (req,res) => {
    res.send("this is my contact page")
})
app.get("/help", (req,res) => {
    res.send("heyy.... can i help you")
})

app.listen(port, () => {
    console.log(`server is running at port:${port}...`);
    
})