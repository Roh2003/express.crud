import express from 'express';
const app = express()
app.use(express.json())

const port = 3000;

let teaData = [];
let nextId = 1

app.post('/about' , (req,res) => {
    const {name , price} = req.body ;
    const newTea = {id : nextId++ , name , price}
    teaData.push(newTea);
    res.status(200).send(newTea)
} )

app.get('/about' , (req,res) => {
    res.status(200).send(teaData)
})

app.get('/about/:id', (req,res) => {
    const tea = teaData.find( t => t.id === parseInt(req.params.id) )
    if (!tea) {
        res.status(404).send("Tea not found")
    }
    res.status(200).send(tea)
})

app.delete('/about/:id', (req,res) => {
    const Index = teaData.findIndex( t => t.id === parseInt(req.params.id) )
    if (Index === -1) {
        res.status(404).send("Tea not found")
    };
    teaData.splice(Index, 1);
    return res.status(201).send("deleted")
});

app.put('/about/:id', (req,res) => {
    const tea = teaData.find( t => t.id === parseInt(req.params.id) )
    if (!tea) {
        res.status(404).send("Tea not found")
    }
    const {name , price} = req.body ;
    tea.name = name;
    tea.price = price;
    res.status(200).send(tea)
} )

app.get('/' , (req,res) => {
    res.send("hello this is my homepage");
})

app.listen(port , () => {
    console.log(`your port is running on port: ${port}`);   
})