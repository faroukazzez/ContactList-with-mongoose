const express = require("express");
const mongoose=require('mongoose')
const app = express();

app.use(express.json())

const db="mongodb+srv://farouk:farouk@clustercontactlist-vwdyr.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(db, { useUnifiedTopology: true,useNewUrlParser: true  }, (err) => {
  if (err) throw err;
  else 
    console.log("db connected");
});
   
app.use("/api/contacts",require('./Routes/contactRoutes'));

app.listen(5000, (err) => {
  if (err) console.log(err);
  else console.log("Server running on port 5000");
});