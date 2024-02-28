const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("form", { title: "Registration form" });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.render("form", { title: "Registration form" });
});

// router.post(
//   "/",
//   [
//     body("name").isLength({ min: 1 }).withMessage("Please enter a name"),
//     body("email").isLength({ min: 1 }).withMessage("Please enter a email"),
//   ],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (errors.isEmpty()) {
//       res.send("Thank you for registration");
//     } else {
//       res.render("form", {
//         title: "Registration form",
//         errors: errors.array(),
//         data: req.body,
//       });
//     }
//   }
// );

module.exports = router;
