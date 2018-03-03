import { Service } from 'typedi';
import { serviceLogic } from './service.logic';
import { IPingDataModel } from '../model/data/ping-data.model';
import { IPingRepository } from '../model/infrastructure/service';

@Service('ping.logic')
export class PingLogic implements IPingRepository {

    public serviceMethod(id: string): { result: IPingDataModel } {

        return serviceLogic(id);
    }
}
