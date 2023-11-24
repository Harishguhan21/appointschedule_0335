
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const notificationSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   createdat: { type: Date },
   ids: { type: Number },
   message: { type: String },
   read: { type: Boolean },
   title: { type: String },
   url: { type: String },
   user: { type: String }
})

const notificationModel = mongoose.model('notification', notificationSchema, 'notification');
export default notificationModel;
