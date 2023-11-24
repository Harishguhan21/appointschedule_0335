
export interface appointments 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   canceler: { type: String },
   chatmessages: { type: String },
   customer: { type: String },
   end: { type: String },
   canceledat: { type: Date },
   statuss: { type: Statuss },
   work: { type: String },
   exchangerequest: { type: String },
   ids: { type: String },
   invoice: { type: String },
   provider: { type: String },
   start: { type: String }
}


export enum Statuss {
   CANCELED = 'canceled',
   CONFIRMED = 'confirmed',
   DENIED = 'denied',
   EXCHANGE_REQUESTED = 'exchange_requested',
   FINISHED = 'finished',
   INVOICED = 'invoiced',
   REJECTED = 'rejected',
   REJECTION_REQUESTED = 'rejection_requested',
   SCHEDULED = 'scheduled'
}



