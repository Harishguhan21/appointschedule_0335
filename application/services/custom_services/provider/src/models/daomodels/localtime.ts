
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const localtimeSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   hour: { type: Number },
   minute: { type: Number },
   nano: { type: Number },
   second: { type: Number }
})

const localtimeModel = mongoose.model('localtime', localtimeSchema, 'localtime');
export default localtimeModel;
