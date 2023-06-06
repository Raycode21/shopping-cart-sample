const express = require("express");
const cors = require("cors");


const mongoose = require("mongoose");
require("dotenv").config({ path:'./.env' });

const app = express();


app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
	res.send("Welcome to our maries bakery API...")

});


const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;

app.listen(port, console.log(`Server running on port ${port}`));

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,	
})
.then(() => console.log("Mongodb connection succesful..."))
.catch((error) => console.error("Mongodb connection failed...:", error.message));