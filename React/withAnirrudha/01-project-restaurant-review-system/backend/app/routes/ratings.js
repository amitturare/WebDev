const express = require("express");
const router = express.Router();
const Rating = require("../models/ratings.model");
const Restaurant = require("../models/restaurants.model");

router.post("/", async (req, res) => {
	const { user, restaurant, score, review, title } = req.body;
	try {
		const newRating = new Rating({
			user: user,
			restaurant: restaurant,
			title,
			score,
			review,
		});

		const savedRating = await newRating.save();

		await Restaurant.findByIdAndUpdate(restaurant, {
			$push: { rating: savedRating._id },
		});

		res.status(201).json(savedRating);
	} catch (err) {
		console.log(err);
		res.status(400).json({ error: "Failed to add rating" });
	}
});

router.get("/get-all", async (req, res) => {
	try {
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;
		const skip = (page - 1) * limit;

		const totalDocuments = await Restaurant.countDocuments();
		const totalPages = Math.ceil(totalDocuments / limit);

		const result = await Restaurant.aggregate([
			{
				$lookup: {
					from: "ratings",
					localField: "_id",
					foreignField: "restaurant",
					as: "ratings",
				},
			},
			{
				$addFields: {
					totalRatings: { $size: "$ratings" },
					averageRating: {
						$cond: {
							if: { $eq: [{ $size: "$ratings" }, 0] },
							then: 0,
							else: { $ceil: { $avg: "$ratings.score" } },
						},
					},
				},
			},
			{ $skip: skip },
			{ $limit: limit },
		]);

		const hasNextPage = page < totalPages;

		res.status(200).json({
			restaurants: result,
			currentPage: page,
			hasNextPage: hasNextPage,
			totalDocuments: totalDocuments,
			totalPages: totalPages,
		});
	} catch (error) {
		res.status(400).json({ error: "Error fetching restaurants: " + error.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const rating = await Rating.findById(req.params.id).populate("user restaurant");

		if (!rating) {
			return res.status(404).json({ error: "Rating not found" });
		}

		res.status(200).json(rating);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const updatedRating = await Rating.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		}).populate("user restaurant");

		if (!updatedRating) {
			return res.status(404).json({ error: "Rating not found" });
		}

		res.status(200).json(updatedRating);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const deletedRating = await Rating.findByIdAndDelete(req.params.id);

		if (!deletedRating) {
			return res.status(404).json({ error: "Rating not found" });
		}

		res.status(200).json({ message: "Rating deleted successfully" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.get("/user/:userId", async (req, res) => {
	try {
		const { userId } = req.params;
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;
		const skip = (page - 1) * limit;

		const totalDocuments = await Rating.countDocuments({ user: userId });
		const totalPages = Math.ceil(totalDocuments / limit);

		const ratings = await Rating.find({ user: userId }).populate("restaurant").skip(skip).limit(limit);

		const hasNextPage = page < totalPages;

		res.status(200).json({
			ratings: ratings,
			currentPage: page,
			hasNextPage: hasNextPage,
			totalDocuments: totalDocuments,
			totalPages: totalPages,
		});
	} catch (error) {
		res.status(400).json({ error: "Error fetching user ratings: " + error.message });
	}
});

router.get("/restaurant/:restaurantId", async (req, res) => {
	try {
		const { restaurantId } = req.params;
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;
		const skip = (page - 1) * limit;

		const totalDocuments = await Rating.countDocuments({ restaurant: restaurantId });
		const totalPages = Math.ceil(totalDocuments / limit);

		const ratings = await Rating.find({ restaurant: restaurantId })
			.populate("user restaurant")
			.skip(skip)
			.limit(limit);

		const hasNextPage = page < totalPages;

		res.status(200).json({
			ratings: ratings,
			currentPage: page,
			hasNextPage: hasNextPage,
			totalDocuments: totalDocuments,
			totalPages: totalPages,
		});
	} catch (error) {
		res.status(400).json({ error: "Error fetching ratings: " + error.message });
	}
});

module.exports = router;
