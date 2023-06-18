const { HttpError } = require("../helpers");

const hasBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      console.log(error);
      next(HttpError(400, `missing field favorite`));
    }
    next();
  };
  return func;
};

module.exports = hasBody;
