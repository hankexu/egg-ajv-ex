const Ajv = require('ajv');

module.exports = app => {
  app.config.ajvEx = Object.assign({ }, {
    errorText: false,
    errorTextSeparator: '\n',
  }, app.config.ajvEx);
  app.validator = new Ajv(app.config.ajvEx);
};
