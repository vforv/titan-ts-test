import {IPingDataModel} from '../model/data/ping-data.model';

export function serviceLogic(id: string): { result: IPingDataModel } {
    return {
        result: {
            example: `ID: ${id}`,
        },
    };
}
