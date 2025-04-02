import { body } from "express-validator";
const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Email is invalid!")
      .notEmpty()
      .withMessage("Email can't be empty!"),
    body("username")
      .notEmpty()
      .withMessage("Username can't be empty!")
      .trim()
      .isLength({ min: 4 })
      .withMessage("Username is too short!")
      .isLength({ max: 13 })
      .withMessage("Username is too long!"),
    body("password")
      .trim()
      .notEmpty().withMessage("Password can not be empty!")
      .withMessage("Password can't be empty!")
      .isLength({ min: 6 })
      .withMessage("Password is too short")
      .isLength({ max: 12 })
      .withMessage("Password is too long!"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email")
      .isEmail().withMessage("Email should be valid!")
      .trim()
      .notEmpty().withMessage("Email can't be empty"),
    body("password")
      .notEmpty().withMessage("Password can not be empty!")
      .isLength({ min: 6 })
      .withMessage("Password is too short")
      .isLength({ max: 12 })
      .withMessage("Password is too long!"), 
  ]
}

export { userRegisterValidator, userLoginValidator };
