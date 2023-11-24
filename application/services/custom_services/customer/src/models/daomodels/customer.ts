
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const customerSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   appointments: [{ type: Schema.Types.ObjectId, ref: 'appointments' }],
   city: { type: String },
   email: { type: String },
   firstname: { type: String },
   ids: { type: Number },
   lastname: { type: String },
   mobile: { type: String },
   notifications: { type: String },
   passwords: { type: String },
   postcode: { type: String },
   roles: [{ type: Schema.Types.ObjectId, ref: 'role' }],
   street: { type: String },
   type: { type: String },
   username: { type: String }
})

const customerModel = mongoose.model('customer', customerSchema, 'customer');
export default customerModel;
