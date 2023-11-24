
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const timeperoidSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   end: { type: String },
   start: { type: String }
})

const timeperoidModel = mongoose.model('timeperoid', timeperoidSchema, 'timeperoid');
export default timeperoidModel;
