const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
const { createJSONToken } = require("../util/auth");

router.post("/signup", async (req, res) => {
	const { username } = req.body;

	try {
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ error: "User with this username already exists" });
		}

		const user = new User(req.body);
		await user.save();

		res.status(201).json({ user });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		const isMatch = password == user.password;
		if (!isMatch) {
			return res.status(400).json({ error: "Invalid username or password" });
		}
		const authToken = createJSONToken(user.username, user.role);
		res.json({ authToken, user });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

router.post("/logout", async (req, res) => {
	const { token } = req.body;
	res.status(200).send({ token, message: "Token Expired" });
});

router.get("/get-all-users", async (req, res) => {
	try {
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;
		const skip = (page - 1) * limit;

		const searchQuery = req.query.search ? req.query.search.trim() : "";

		const totalDocuments = await User.countDocuments({
			name: { $regex: searchQuery, $options: "i" },
		});
		const totalPages = Math.ceil(totalDocuments / limit);

		const users = await User.find({
			name: { $regex: searchQuery, $options: "i" },
		})
			.skip(skip)
			.limit(limit);

		const hasNextPage = page < totalPages;

		res.status(200).json({
			users: users,
			currentPage: page,
			hasNextPage: hasNextPage,
			totalDocuments: totalDocuments,
			totalPages: totalPages,
		});
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json(user);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json(user);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		res.json({ message: "User deleted" });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

module.exports = router;
