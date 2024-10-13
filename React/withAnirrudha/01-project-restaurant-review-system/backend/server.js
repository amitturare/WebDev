const express = require("express");
const cors = require("cors");
const config = require("./app/config/db.config");
const dotenvConfig = require("dotenv").config;
const restRoutes = require("./app/routes/restaurant");
const authRoutes = require("./app/routes/auth");
const ratingRoutes = require("./app/routes/ratings");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

dotenvConfig();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
	() => {
		console.log("Database is connected");
	},
	(err) => {
		console.log("Can not connect to the database" + err);
	}
);

app.use(authRoutes);
app.use("/restaurant", restRoutes);
app.use("/rating", ratingRoutes);

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
	next();
});

app.use((error, req, res, next) => {
	const status = error.status || 500;
	const message = error.message || "Something went wrong.";
	res.status(status).json({ message: message });
});

app.listen(8081, () => console.log("SERVER LISTENING AT 8081"));
