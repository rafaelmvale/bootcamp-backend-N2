"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'rafael@rmvsolutionssp.com.br',
      name: 'Rafael da RMV Solutions'
    }
  }
};
exports.default = _default;