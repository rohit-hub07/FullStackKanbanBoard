import {validationResult} from 'express-validator'
import {ApiError} from "../utils/api-error.js"

const validator = (req, res, next) => {
  const errors = validationResult(req)
  console.log("In the validator folder: ", errors)
  if(errors.isEmpty()){
    return next()
  }
  const extractedError = []
  errors.array().map((err) => extractedError.push({
    [err.path] : err.msg
  }))

  throw new ApiError(422, "Recieved data is not valid", extractedError)
}

export {validator}