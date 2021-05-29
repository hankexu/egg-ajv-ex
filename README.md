# egg-ajv-ex

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-ajv-ex.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-ajv-ex
[travis-image]: https://img.shields.io/travis/eggjs/egg-ajv-ex.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-ajv-ex
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-ajv-ex.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-ajv-ex?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-ajv-ex.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-ajv-ex
[snyk-image]: https://snyk.io/test/npm/egg-ajv-ex/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-ajv-ex
[download-image]: https://img.shields.io/npm/dm/egg-ajv-ex.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-ajv-ex

<!--
Description here.
-->
<img align="right" alt="Ajv logo" width="160" src="https://ajv.js.org/img/ajv.svg">

&nbsp;

Ajv JSON schema validator based parameter validation plugin for egg.  
See [Ajv](https://ajv.js.org/) for more information
## Install

```bash
$ npm i egg-ajv-ex --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.ajvEx = {
  enable: true,
  package: 'egg-ajv-ex',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.ajvEx = {
  allErrors: true,
  messages: false,
  localize: 'zh',
  // errorText: true, // 
  // errorTextSeparator: ',',
};
```
see [config/config.default.js](config/config.default.js) for more detail.  
View all [ajv configurations](https://ajv.js.org/options.html).

## Validate Request Body

```js
// app/controller/home.js
class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const schema = {
      type: "object",
      properties: {
        foo: {type: "integer"},
        bar: {type: "string"}
      },
      required: ["foo"],
      additionalProperties: false
    }
    ctx.validate(schema); // will throw if invalid
    ctx.body = ctx.request.body;
  }
}
module.exports = HomeController;
```


## Questions & Suggestions

Please open an issue [here](https://github.com/hankexu/egg-ajv-ex/issues).

## License

[MIT](LICENSE)
