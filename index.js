const express=require('express')
// cross origin resource sharing
const cors=require('cors')
const { find, save } = require('./db')

const app=express()
app.use(express.json())
app.use(cors())

// List
app.get('/',async (req,res)=>{
    const all=find()
    res.json(all)
})

// Create
app.post('/',async (req,res)=>{
    const tec={
        fullname:req.body.fullname,
        contact:req.body.contact,
        expert:req.body.expert,
        experience:req.body.experience,
        commercials:req.body.commercials
    }
    const data=save(tec)
    res.json(data)
})

// //Update
// app.put('/',async (req,res)=>{
    
//     //const data=await model.findOneAndUpdate(id=req.body._id,req.body,{new:true})
//     const data=await model.updateOne({"expert":req.body.expert},req.body)
//     res.json(data)
// })

// //Read
// app.get('/:id',async(req,res)=>{
//     const data=await model.findById(id=req.params.id)
//     res.json(data)
// })

// // Delete
// app.delete('/:id',async(req,res)=>{
//     const data=await model.findById(id=req.params.id)
//     await model.findByIdAndDelete(id=req.params.id)
//     res.json(data.fullname+" has deleted");
// })

app.listen(8000);