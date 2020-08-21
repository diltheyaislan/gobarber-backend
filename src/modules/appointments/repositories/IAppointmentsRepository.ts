import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import IFindAllByMonthFromProviderDTO from '@modules/appointments/dtos/IFindAllByMonthFromProviderDTO';
import IFindAllByDayFromProviderDTO from '@modules/appointments/dtos/IFindAllByDayFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>;
  findAllByMonthFromProvider(
    data: IFindAllByMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllByDayFromProvider(
    data: IFindAllByDayFromProviderDTO,
  ): Promise<Appointment[]>;
}
