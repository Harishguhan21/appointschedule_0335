import { Request, Response } from 'express';
import {providerDao} from '../dao/providerDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let provider = new providerDao();

export class providerService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into providerService.ts: GpDelete')
     let  providerId = req.params.id;
     provider.GpDelete(providerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from providerService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into providerService.ts: GpSearch')
     let  providerData = req.query;
     provider.GpSearch(providerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from providerService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into providerService.ts: GpSearchForUpdate')
     let  providerData = req.body;
     provider.GpSearchForUpdate(providerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from providerService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into providerService.ts: GpUpdate')
     let  providerData = req.body;
     provider.GpUpdate(providerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from providerService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into providerService.ts: GpGetEntityById')
     let  providerId = req.params.id;
     provider.GpGetEntityById(providerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from providerService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into providerService.ts: GpGetAllValues')
     
     provider.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from providerService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into providerService.ts: GpCreate')
     let  providerData = req.body;
     provider.GpCreate(providerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from providerService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into providerService.ts: GpGetNounCreatedBy')
     let  providerData = { created_by: req.query.createdby };
     provider.GpGetNounCreatedBy(providerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from providerService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}