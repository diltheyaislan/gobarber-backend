"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuidv = require("uuidv4");

var _dateFns = require("date-fns");

var _Appointment = _interopRequireDefault(require("../../infra/typeorm/entities/Appointment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AppointmentsRepository {
  constructor() {
    this.appointments = [];
  }

  async findByDate(date, provider_id) {
    const foundAppointment = this.appointments.find(appointment => (0, _dateFns.isEqual)(appointment.date, date) && provider_id === appointment.provider_id);
    return foundAppointment;
  }

  async findAllByMonthFromProvider({
    provider_id,
    month,
    year
  }) {
    const appointments = this.appointments.filter(appointment => appointment.provider_id === provider_id && (0, _dateFns.getMonth)(appointment.date) + 1 === month && (0, _dateFns.getYear)(appointment.date) === year);
    return appointments;
  }

  async findAllByDayFromProvider({
    provider_id,
    month,
    year,
    day
  }) {
    const appointments = this.appointments.filter(appointment => appointment.provider_id === provider_id && (0, _dateFns.getMonth)(appointment.date) + 1 === month && (0, _dateFns.getYear)(appointment.date) === year && (0, _dateFns.getDate)(appointment.date) === day);
    return appointments;
  }

  async create({
    provider_id,
    user_id,
    date
  }) {
    const appointment = new _Appointment.default();
    Object.assign(appointment, {
      id: (0, _uuidv.uuid)(),
      date,
      provider_id,
      user_id
    });
    this.appointments.push(appointment);
    return appointment;
  }

}

var _default = AppointmentsRepository;
exports.default = _default;