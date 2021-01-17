const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const { validation } = require("../../utils/constants");

const {
  nameMaxLength,
  nameMinLength,
  nameMinMaxLength,
  passwordMinMaxLength,
  nameRegexp,
  nameRequired,
  passwordMinLength,
  passwordMaxLength,
  passwordRequired,
  emailRegexp,
} = validation;

const {
  authLogin,
  authLogout,
  authRegister,
} = require("../handlers/auth.handler");

const router = Router();

router.post(
  "/login",
  [
    check("email").isEmail().withMessage(emailRegexp).normalizeEmail(),

    check("password")
      .isLength({ min: 8, max: 32 })
      .withMessage(passwordMinMaxLength)
  ],
  (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    const hasError = !error.isEmpty();

    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }
  },
  authLogin
);
router.get("/logout", authLogout);
router.post(
  "/register",
  [
    check("fullName")
      .isLength({ min: 2, max: 50 })
      .withMessage(nameMinMaxLength)
      .trim(),
    check("email").isEmail().withMessage(emailRegexp).normalizeEmail(),

    check("password")
      .isLength({ min: 8, max: 32 })
      .withMessage(passwordMinMaxLength)
      .matches(/\d/)
      .withMessage("Password should have at least one number"),
  ],
  (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    const hasError = !error.isEmpty();

    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }
  },
  authRegister
);

module.exports = router;
