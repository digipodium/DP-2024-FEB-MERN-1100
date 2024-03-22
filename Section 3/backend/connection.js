const mongoose = require('mongoose');

const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mydatabase7634?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous functions - return Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected successfully');
})
.catch((err) => {
    console.log(err);
});

console.log('another line');