
import express from "express";
import { check, validationResult } from "express-validator";
import Register from "../model/User.js";
let router = express.Router();

router.post(
  "/",
  check("firstName").notEmpty().withMessage("firstname is required"),
  check("lastName").notEmpty().withMessage("firstname is required"),
  check("gender").notEmpty().withMessage("gender is required"),
  check("motherName").notEmpty().withMessage("mother's name is required"),
  check("motherNationality").notEmpty().withMessage("mother's is required"),
  check("fatherName").notEmpty().withMessage("mother's is required"),
  check("fatherNationality").notEmpty().withMessage("mother's is required"),
  check("nationality").notEmpty().withMessage("mother's is required"),
  check("nationality").isIdentityCard().withMessage("Ghana Card, Passport or Birth cerificate numbers is not valid"),
  check("email").notEmpty().withMessage("email is required"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("contactNumber").notEmpty().withMessage("contact number is required"),
  check("city").notEmpty().withMessage("city is required"),
  check("address").notEmpty().withMessage("address is required"),
  check("dateOfBirh").notEmpty().withMessage("Date of birth is required"),
  check("dateOfBirth").notEmpty().withMessage("provide a valid date of birth"),
  check("password").notEmpty().withMessage("Password required"),
  check("password").isLength({ min: 8 }).withMessage("not a strong password"),
  check("dateOfRegistration").notEmpty().withMessage("Date is required"),
  
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    const loginDataCount = await Register.create(
   req.body)
    if (loginDataCount) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  }
);

export default router;
