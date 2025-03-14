const validateUserInput = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
  
    if (error) {
      return res.status(400).json({ errors: error.details.map(err => err.message) });
    }
  
    req.body = value; // Use the sanitized data
    next();
};

export default validateUserInput;
  