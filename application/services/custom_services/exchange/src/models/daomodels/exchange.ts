
import * as mongoose from 'mongoose';
import { Statuss } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const exchangeSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   ids: { type: String },
   requested: { type: String },
   requestor: { type: String },
   statuss: { type: String, enum: Statuss }
})

const exchangeModel = mongoose.model('exchange', exchangeSchema, 'exchange');
export default exchangeModel;
