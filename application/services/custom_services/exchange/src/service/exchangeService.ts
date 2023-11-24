import { Request, Response } from 'express';
import {exchangeDao} from '../dao/exchangeDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let exchange = new exchangeDao();

export class exchangeService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into exchangeService.ts: GpDelete')
     let  exchangeId = req.params.id;
     exchange.GpDelete(exchangeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from exchangeService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into exchangeService.ts: GpSearch')
     let  exchangeData = req.query;
     exchange.GpSearch(exchangeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from exchangeService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into exchangeService.ts: GpSearchForUpdate')
     let  exchangeData = req.body;
     exchange.GpSearchForUpdate(exchangeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from exchangeService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into exchangeService.ts: GpUpdate')
     let  exchangeData = req.body;
     exchange.GpUpdate(exchangeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from exchangeService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into exchangeService.ts: GpGetEntityById')
     let  exchangeId = req.params.id;
     exchange.GpGetEntityById(exchangeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from exchangeService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into exchangeService.ts: GpGetAllValues')
     
     exchange.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from exchangeService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into exchangeService.ts: GpCreate')
     let  exchangeData = req.body;
     exchange.GpCreate(exchangeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from exchangeService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into exchangeService.ts: GpGetNounCreatedBy')
     let  exchangeData = { created_by: req.query.createdby };
     exchange.GpGetNounCreatedBy(exchangeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from exchangeService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}