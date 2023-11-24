
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const userSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   city: { type: String },
   email: { type: String },
   firstname: { type: String },
   ids: { type: Number },
   lastname: { type: String },
   mobile: { type: String },
   notifications: { type: String },
   passwords: { type: String },
   postcode: { type: String },
   roles: { type: String },
   street: { type: String },
   username: { type: String }
})

const userModel = mongoose.model('user', userSchema, 'user');
export default userModel;
