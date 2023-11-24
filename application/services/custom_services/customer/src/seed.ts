import * as mongoose from 'mongoose';
import { appointmentsSchema } from './models/daomodels/appointments';
import * as mongoose from 'mongoose';
import { invoiceSchema } from './models/daomodels/invoice';
import * as mongoose from 'mongoose';
import { customerSchema } from './models/daomodels/customer';

const customerModel = mongoose.model('customer', customerSchema);

export class Seed {

    constructor() {

    }

    

}
