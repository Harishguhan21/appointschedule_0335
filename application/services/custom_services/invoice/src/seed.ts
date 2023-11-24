import * as mongoose from 'mongoose';
import { appointmentsSchema } from './models/daomodels/appointments';
import * as mongoose from 'mongoose';
import { invoiceSchema } from './models/daomodels/invoice';

const invoiceModel = mongoose.model('invoice', invoiceSchema);

export class Seed {

    constructor() {

    }

    

}
