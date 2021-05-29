const mm = require('egg-mock');
const assert = require('assert');

describe('test/validate.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'validate',
    });
    return app.ready();
  });
  after(() => app.close());

  describe('validate', () => {
    it('should return invalid_param when body empty', () => {
      return app.httpRequest()
        .post('/validate.json')
        .expect(422)
        .expect(res => {
          assert(res.body.code === 'invalid_param');
          assert(res.body.message === 'Validation Failed');
          assert.deepStrictEqual(res.body.errors, [{
            instancePath: '',
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: 'foo' },
            message: '应当有必需属性 foo',
          }, {
            instancePath: '',
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: 'bar' },
            message: '应当有必需属性 bar',
          }]);
        });
    });
    it('should all pass', () => {
      return app.httpRequest()
        .post('/validate.json')
        .send({
          foo: 1,
          bar: 'hello',
        })
        .expect({
          foo: 1,
          bar: 'hello',
        })
        .expect(200);
    });
  });
});
