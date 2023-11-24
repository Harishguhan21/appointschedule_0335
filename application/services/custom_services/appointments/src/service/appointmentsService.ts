import { Request, Response } from 'express';
import {appointmentsDao} from '../dao/appointmentsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let appointments = new appointmentsDao();

export class appointmentsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appointmentsService.ts: GpDelete')
     let  appointmentsId = req.params.id;
     appointments.GpDelete(appointmentsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appointmentsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appointmentsService.ts: GpSearch')
     let  appointmentsData = req.query;
     appointments.GpSearch(appointmentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appointmentsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appointmentsService.ts: GpSearchForUpdate')
     let  appointmentsData = req.body;
     appointments.GpSearchForUpdate(appointmentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appointmentsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appointmentsService.ts: GpUpdate')
     let  appointmentsData = req.body;
     appointments.GpUpdate(appointmentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appointmentsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appointmentsService.ts: GpGetEntityById')
     let  appointmentsId = req.params.id;
     appointments.GpGetEntityById(appointmentsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appointmentsService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appointmentsService.ts: GpGetAllValues')
     
     appointments.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from appointmentsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appointmentsService.ts: GpCreate')
     let  appointmentsData = req.body;
     appointments.GpCreate(appointmentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appointmentsService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into appointmentsService.ts: GpGetNounCreatedBy')
     let  appointmentsData = { created_by: req.query.createdby };
     appointments.GpGetNounCreatedBy(appointmentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from appointmentsService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}