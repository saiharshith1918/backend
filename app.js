const express = require("express");
const app = express();

const userModel = require(`./usermodel`);

app.get('/',(req,res) => {
    res.send("Hey");
})

app.get('/create', async (req,res)=>{
    let createduser = await userModel.create({
        name : "Harshith Reddy",
        username : "Spartan19",
        email : "harshith20@gmail.com"
    })
    res.send(createduser)
})

app.get('/read', async (req,res)=>{
    let finduser = await userModel.find({})
    res.send(finduser)
})

app.get('/delete', async (req,res)=>{
    let deleteuser = await userModel.findOneAndDelete({name : "Harshith Reddy"})
    res.send(deleteuser)
})

app.get('/update', async (req,res)=>{
    let updateduser = await userModel.findOneAndUpdate({name : "Harshith Reddy"},{username:"Spartan IV"},{new : true})
    res.send(updateduser)
})
 
app.listen(3000);