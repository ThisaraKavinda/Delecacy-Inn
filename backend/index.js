const express =  require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8090;

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const URL="";

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,

}); 

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB Connected");
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})