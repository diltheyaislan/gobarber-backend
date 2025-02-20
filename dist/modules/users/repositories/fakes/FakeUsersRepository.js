"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuidv = require("uuidv4");

var _User = _interopRequireDefault(require("../../infra/typeorm/entities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FakeUsersRepository {
  constructor() {
    this.users = [];
  }

  async findById(id) {
    const foundUser = this.users.find(user => user.id === id);
    return foundUser;
  }

  async findByEmail(email) {
    const foundUser = this.users.find(user => user.email === email);
    return foundUser;
  }

  async create(userData) {
    const user = new _User.default();
    Object.assign(user, {
      id: (0, _uuidv.uuid)()
    }, userData);
    this.users.push(user);
    return user;
  }

  async save(user) {
    const userIndex = this.users.findIndex(findUser => findUser.id === user.id);
    this.users[userIndex] = user;
    return user;
  }

  async findAllProviders({
    except_user_id
  }) {
    let {
      users
    } = this;

    if (except_user_id) {
      users = users.filter(user => user.id !== except_user_id);
    }

    return users;
  }

}

var _default = FakeUsersRepository;
exports.default = _default;