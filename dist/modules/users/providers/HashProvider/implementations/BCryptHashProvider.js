"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

class BCryptHashProvider {
  async generateHash(payload) {
    const payloadHash = await (0, _bcryptjs.hash)(payload, 8);
    return payloadHash;
  }

  async compareHash(payload, hashed) {
    const isEqual = await (0, _bcryptjs.compare)(payload, hashed);
    return isEqual;
  }

}

exports.default = BCryptHashProvider;