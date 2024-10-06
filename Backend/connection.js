var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://asnasiddiqp:asna@cluster0.oxenw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("MongoDB connected")
    
    })
    .catch((err) => {
        console.log(err)
    })