const express = require("express");
const router = express.Router({ mergeParams: true });
const Review = require("../models/review");
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middelware.js");

const reviewController = require("../controllers/Reviewss.js");

//Post Review Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

//DELETE REVIEW ROUTE
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
