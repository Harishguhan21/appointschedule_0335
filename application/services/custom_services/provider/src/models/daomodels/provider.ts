
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const providerSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   appointments: { type: String },
   city: { type: String },
   corporateworks: { type: String },
   email: { type: String },
   firstname: { type: String },
   ids: { type: Number },
   lastname: { type: String },
   mobile: { type: String },
   notifications: { type: String },
   passwords: { type: String },
   postcode: { type: String },
   retailworks: { type: String },
   roles: { type: String },
   username: { type: String },
   workingplan: { type: String },
   works: { type: String }
})

const providerModel = mongoose.model('provider', providerSchema, 'provider');
export default providerModel;
