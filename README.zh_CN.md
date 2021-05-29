# egg-ajv-ex

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-ajv-ex.svg
[npm-url]: https://npmjs.org/package/egg-ajv-ex
[travis-image]: https://www.travis-ci.com/hankexu/egg-ajv-ex.svg?branch=master
[travis-url]: https://www.travis-ci.com/hankexu/egg-ajv-ex
[codecov-image]: https://codecov.io/gh/hankexu/egg-ajv-ex/branch/master/graph/badge.svg?token=Hkb6TYLqXb
[codecov-url]: https://codecov.io/gh/hankexu/egg-ajv-ex
[david-image]: https://img.shields.io/david/hankexu/egg-ajv-ex.svg
[david-url]: https://david-dm.org/hankexu/egg-ajv-ex
[snyk-image]: https://snyk.io/test/npm/egg-ajv-ex/badge.svg
[snyk-url]: https://snyk.io/test/npm/egg-ajv-ex
[download-image]: https://img.shields.io/npm/dm/egg-ajv-ex.svg
[download-url]: https://npmjs.org/package/egg-ajv-ex

<!--
Description here.
-->
<img align="right" alt="Ajv logo" width="160" src="https://ajv.js.org/img/ajv.svg">

&nbsp;

一个基于Ajv JSON schema validator 的参数校验插件。  
[Ajv的文档](https://ajv.js.org/) 
## 开启插件

```js
// config/plugin.js
exports.ajvEx = {
  enable: true,
  package: 'egg-ajv-ex',
};
```


## 插件配置

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
查看 [config/config.default.js](config/config.default.js) 详情。  
查看`ajv`的 [全部配置参数](https://ajv.js.org/options.html) 。

## 校验请求参数

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
    ctx.validate(schema); // 会抛出异常
    ctx.body = ctx.request.body;
  }
}
module.exports = HomeController;
```

## 提问交流

请到 [egg-ajv-ex issues](https://github.com/hankexu/egg-ajv-ex/issues) 异步交流。

## License

[MIT](LICENSE)
