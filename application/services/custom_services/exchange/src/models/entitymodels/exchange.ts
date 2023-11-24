
export interface exchange 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   ids: { type: String },
   requested: { type: String },
   requestor: { type: String },
   statuss: { type: Statuss }
}


export enum Statuss {
   ACCEPTED = 'accepted',
   EXPIRED = 'expired',
   PENDING = 'pending',
   REJECTED = 'rejected'
}



