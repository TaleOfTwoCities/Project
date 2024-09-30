const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const mongoose = require('mongoose');
const Registration = mongoose.model('Registration');


router.get("/", (req, res) => {
  res.render("form", { title: "Registration form" });
});



router.post(
  "/",
  [
    body("name").isLength({ min: 1 }).withMessage("Please enter a name"),
    body("email").isLength({ min: 1 }).withMessage("Please enter a email"),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      // Create a new registration entry
      const registration = new (require('../models/Registration'))(req.body);
      
      try {
        await registration.save(); // Save to the database
        return res.send("Thank you for registration");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    } else {
      return res.render("form", {
        title: "Registration form",
        errors: errors.array(),
        data: req.body,


  // (req, res) => {
  //   const errors = validationResult(req);


  //   if (errors.isEmpty()) {

    
  //     const registration = new Registration(req.body);
  //     registration.save();
  
  //     res.send("Thank you for registration");
  //   } else {
  //     res.render("form", {
  //       title: "Registration form",
  //       errors: errors.array(),
  //       data: req.body,
      });
    }
  }
);



module.exports = router;
