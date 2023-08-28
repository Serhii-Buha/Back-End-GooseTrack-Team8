const {
  Review,
} = require("../../models/reviewModel");

const AppError = require("../../helpers/AppError");

module.exports = async (req, res) => {
  const result = await Review.findOne({
    owner: req.user._id,
  });

  if (!result) {
    throw AppError(404, "Not found");
  }

  res.json(result);
};
