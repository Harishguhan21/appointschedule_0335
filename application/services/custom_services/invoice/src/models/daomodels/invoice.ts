
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const invoiceSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   ids: { type: String },
   appointments: { type: String },
   issued: { type: String },
   numbers: { type: String },
   statuss: { type: String },
   totalamount: { type: Number }
})

const invoiceModel = mongoose.model('invoice', invoiceSchema, 'invoice');
export default invoiceModel;
