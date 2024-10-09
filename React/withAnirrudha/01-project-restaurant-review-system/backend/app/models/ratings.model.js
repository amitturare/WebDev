const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		restaurant: {
			type: Schema.Types.ObjectId,
			ref: "Restaurant",
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		score: {
			type: Number,
			required: true,
			min: 1,
			max: 5,
		},

		review: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Rating = mongoose.model("Rating", RatingSchema);
module.exports = Rating;
