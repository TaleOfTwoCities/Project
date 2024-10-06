const express = require("express");
const router = express.Router();
const app = express();
const { check, validationResult } = require("express-validator");
const mongoose = require('mongoose');
const Registration = mongoose.model('Registration');


router.get("/", (req, res) => {
  res.render("form", { title: "Registration form" });
});



router.post('/',
  [
   check("name")
   .isLength({ min: 1 })
   .withMessage("Please enter a name"),
    check("email")
    .isLength({ min: 1 })
    .withMessage("Please enter a email"),
  ],

  (req, res) => {
    const errors = validationResult(req);


    if (errors.isEmpty()) {
      const registration = new Registration(req.body);
      registration.save()
      .then(()=>{res.send("Thank you for registration!")})
      .catch(()=>{
        console.log(err);
        res.send('Sorry! Something went wrong.');
      });

    } else {
      res.render("form", {
        title: "Registration form",
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);



module.exports = router;
