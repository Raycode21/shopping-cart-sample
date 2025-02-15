const express = require("express");
const cors = require("cors");

const bakedProducts = require('./bakedProducts');
const mongoose = require("mongoose");
const register = require('./routes/register');
const login = require('./routes/login');

require("dotenv").config({ path:'./.env' });

const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);


app.get("/", (req, res) => {
	res.send("Welcome to our maries bakery API...")

});

app.get("/bakedProducts", (req, res) => {
  res.send(bakedProducts);
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