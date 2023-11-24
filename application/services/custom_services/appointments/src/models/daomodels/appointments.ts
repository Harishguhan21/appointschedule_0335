
import * as mongoose from 'mongoose';
import { Statuss } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const appointmentsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   canceler: { type: String },
   chatmessages: { type: String },
   customer: { type: String },
   end: { type: String },
   canceledat: { type: Date },
   statuss: { type: String, enum: Statuss },
   work: { type: String },
   exchangerequest: { type: String },
   ids: { type: String },
   invoice: { type: String },
   provider: { type: String },
   start: { type: String }
})

const appointmentsModel = mongoose.model('appointments', appointmentsSchema, 'appointments');
export default appointmentsModel;
