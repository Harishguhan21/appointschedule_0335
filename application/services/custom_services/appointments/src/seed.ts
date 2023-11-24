import * as mongoose from 'mongoose';
import { appointmentsSchema } from './models/daomodels/appointments';

const appointmentsModel = mongoose.model('appointments', appointmentsSchema);

export class Seed {

    constructor() {

    }

    

}
