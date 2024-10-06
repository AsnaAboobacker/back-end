//importing
var express = require("express")
require("./connection")
var empModel=require("./model/employe")
var cors = require('cors')
//initialization
var app = express()
app.use(cors())
//midd
app.use(express.json())

//api creation
app.get('/trail', (req, res) => {
    res.send('Message for trail')
})

app.get('/asna', (req, res) => {
    res.send('Hy Asna...')
})

//add api
app.post('/add', async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: 'Employee added successfully' })
    }
    catch (error) {
        console.log(error)
    }
})
    
//viw api
app.get('/view', async (req, res) => { 
    try {
        var data = await empModel.find()
        res.send(data)
    }
    catch (error)
    {
        console.log(error)
        
    }
})


//delete api
app.delete('/remove/:id', async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message: "Deleted succesfully!!"})
    }
    catch (error) {
        console.log(error)

    }
})

//update api
app.put('/update/:id', async (req, res) => { 
    try { 
        var data = await empModel.findByIdAndUpdate(req.params.id, req.body)
        
        res.send({ message: "Updated succesfully!!" ,data})
    }
    catch (error) {
        console.log(error)
    }
})


//port setting
app.listen(3004,()=> {
    console.log("port is running")
})