import { Request, Response } from 'express';
import {notificationDao} from '../dao/notificationDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let notification = new notificationDao();

export class notificationService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into notificationService.ts: GpDelete')
     let  notificationId = req.params.id;
     notification.GpDelete(notificationId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from notificationService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into notificationService.ts: GpSearch')
     let  notificationData = req.query;
     notification.GpSearch(notificationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from notificationService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into notificationService.ts: GpSearchForUpdate')
     let  notificationData = req.body;
     notification.GpSearchForUpdate(notificationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from notificationService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into notificationService.ts: GpUpdate')
     let  notificationData = req.body;
     notification.GpUpdate(notificationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from notificationService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into notificationService.ts: GpGetEntityById')
     let  notificationId = req.params.id;
     notification.GpGetEntityById(notificationId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from notificationService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into notificationService.ts: GpGetAllValues')
     
     notification.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from notificationService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into notificationService.ts: GpCreate')
     let  notificationData = req.body;
     notification.GpCreate(notificationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from notificationService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into notificationService.ts: GpGetNounCreatedBy')
     let  notificationData = { created_by: req.query.createdby };
     notification.GpGetNounCreatedBy(notificationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from notificationService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}