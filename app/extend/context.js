const localize = require('ajv-i18n');

module.exports = {
  validate(scahema, data) {
    data = data || this.request.body;
    const validate = this.app.validator.compile(scahema);
    const valid = validate(data);
    const { localize: local, errorText, errorTextSeparator } = this.app.config.ajvEx;
    if (!valid) {
      if (local) {
        localize[local](validate.errors);
      }
      this.throw(422, 'Validation Failed', {
        code: 'invalid_param',
        errors: errorText ?
          this.app.validator.errorsText(validate.errors, { separator: errorTextSeparator })
          : validate.errors,
      });
    }
  },
};
