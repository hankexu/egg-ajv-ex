
const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
  },
  required: [ 'foo', 'bar' ],
  additionalProperties: false,
};

module.exports = app => {
  const { router } = app;
  router.post('/validate.json', ctx => {
    ctx.validate(schema);
    ctx.body = ctx.request.body;
  });
};
