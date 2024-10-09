const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema(
  {
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      rating: [
        {
          type: Schema.Types.ObjectId,
          ref: "Rating",
        },
      ],
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
