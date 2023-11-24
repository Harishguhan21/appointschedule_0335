
export interface customer 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   appointments: [{ type: ObjectId, ref: 'appointments' }],
   city: { type: String },
   email: { type: String },
   firstname: { type: String },
   ids: { type: Number },
   lastname: { type: String },
   mobile: { type: String },
   notifications: { type: String },
   passwords: { type: String },
   postcode: { type: String },
   roles: [{ type: ObjectId, ref: 'role' }],
   street: { type: String },
   type: { type: String },
   username: { type: String }
}



