const express = require("express")
const cors = require("cors")

const bakedProducts = require("./bakedProducts")

const app = express()

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
	res.send("Welcome to our maries bakery API...")

});

app.get("/bakedProducts", (req, res) => {
	res.send(bakedProducts);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
