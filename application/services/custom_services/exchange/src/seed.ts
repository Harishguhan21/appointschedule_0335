import * as mongoose from 'mongoose';
import { appointmentsSchema } from './models/daomodels/appointments';
import * as mongoose from 'mongoose';
import { invoiceSchema } from './models/daomodels/invoice';
import * as mongoose from 'mongoose';
import { customerSchema } from './models/daomodels/customer';
import * as mongoose from 'mongoose';
import { notificationSchema } from './models/daomodels/notification';
import * as mongoose from 'mongoose';
import { providerSchema } from './models/daomodels/provider';
import * as mongoose from 'mongoose';
import { worksSchema } from './models/daomodels/works';
import * as mongoose from 'mongoose';
import { exchangeSchema } from './models/daomodels/exchange';

const exchangeModel = mongoose.model('exchange', exchangeSchema);

export class Seed {

    constructor() {

    }

    

}
