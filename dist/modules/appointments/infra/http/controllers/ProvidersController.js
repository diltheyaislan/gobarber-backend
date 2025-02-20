"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _ListProvidersService = _interopRequireDefault(require("../../../services/ListProvidersService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderAppointmentsController {
  async index(request, response) {
    const listProvidersService = _tsyringe.container.resolve(_ListProvidersService.default);

    const providers = await listProvidersService.execute({
      user_id: request.user.id
    });
    return response.json((0, _classTransformer.classToClass)(providers));
  }

}

exports.default = ProviderAppointmentsController;