const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const { validateListing } = require("../middleware/index.js");
const { validateReview } = require("../middleware/index.js");
const { isLoggedIn, isOwner } = require("../middelware.js");
const listingController = require("../controllers/Listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

router
  .route("/new")
  .get(isLoggedIn, wrapAsync(listingController.renderNewForm))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

// router.post(
//   "/listings/:id/reviews",
//   validateListing,
//   wrapAsync(async (req, res) => {
//     const newListing = new Listing(req.body.listing);
//     newListing.Owner = req.user._id;
//     await newListing.save();

//     req.flash("success", "New Listing Created!");
//     res.redirect("/listings");
//   })
// );

module.exports = router;
