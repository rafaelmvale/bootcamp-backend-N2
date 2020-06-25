"use strict";

var _tsyringe = require("tsyringe");

var _HandleBarsMailTemplateProvider = _interopRequireDefault(require("./implementations/HandleBarsMailTemplateProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providers = {
  handlebars: _HandleBarsMailTemplateProvider.default
};

_tsyringe.container.registerSingleton('MailTemplateProvider', providers.handlebars);