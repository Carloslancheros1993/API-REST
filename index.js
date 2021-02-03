const express = require("express");
require("dotenv").config();
const {Payments, Memberships, Clients, Clients_Classes, Classes} = require("./models")

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.get("/payments", async (req, res) => {
   const results = await Payments.findAll({
       include: [Memberships, Clients]
   });
   res.json(results);
});

app.get("/clients", async (req, res) => {
    const results = await Clients.findAll({
        include: [Classes]
    });
    res.json(results);
 });

 app.get("/classes/clients", async (req, res) => {
    const results = await Clients.findAll({
        include: [Classes]
    });
    res.json(results);
 });

app.get("/memberships", async (req, res) => {
    const results = await Memberships.findAll({
        include: [Payments]
    });
    res.json(results);
 });

 
app.get("/clients/:id", async (req, res) => {
    try{
        const results = await Clients.findOne({where: {id: req.params.id}});
        res.json(results);
    }catch(error){
        console.log(error);
    }
});

app.get("/memberships/:id", async (req, res) => {
    try{
        const results = await Memberships.findOne({where: {id: req.params.id}});
        res.json(results);
    }catch(error){
        console.log(error);
    }
});

 app.post("/client", async (req, res) => {
    const data = req.body;
    try{
        const results = await Clients.create(data);
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
});

app.post("/membership", async (req, res) => {
    const data = req.body;
    try{
        const results = await Memberships.create(data);
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
});

app.post("/payment", async (req, res) => {
    const data = req.body;
    try{
        const results = await Payments.create(data);
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log("Servidor",PORT)
});