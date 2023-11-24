
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const workingPlanSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   friday: { type: String },
   ids: { type: Number },
   monday: { type: String },
   provider: { type: String },
   saturday: { type: String },
   sunday: { type: String },
   thursday: { type: String },
   tuesday: { type: String },
   wednesday: { type: String }
})

const workingPlanModel = mongoose.model('workingPlan', workingPlanSchema, 'workingPlan');
export default workingPlanModel;
