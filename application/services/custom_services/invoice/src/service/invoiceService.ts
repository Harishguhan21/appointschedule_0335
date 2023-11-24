import { Request, Response } from 'express';
import {invoiceDao} from '../dao/invoiceDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let invoice = new invoiceDao();

export class invoiceService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into invoiceService.ts: GpDelete')
     let  invoiceId = req.params.id;
     invoice.GpDelete(invoiceId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from invoiceService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into invoiceService.ts: GpSearch')
     let  invoiceData = req.query;
     invoice.GpSearch(invoiceData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from invoiceService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into invoiceService.ts: GpSearchForUpdate')
     let  invoiceData = req.body;
     invoice.GpSearchForUpdate(invoiceData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from invoiceService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into invoiceService.ts: GpUpdate')
     let  invoiceData = req.body;
     invoice.GpUpdate(invoiceData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from invoiceService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into invoiceService.ts: GpGetEntityById')
     let  invoiceId = req.params.id;
     invoice.GpGetEntityById(invoiceId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from invoiceService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into invoiceService.ts: GpGetAllValues')
     
     invoice.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from invoiceService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into invoiceService.ts: GpCreate')
     let  invoiceData = req.body;
     invoice.GpCreate(invoiceData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from invoiceService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into invoiceService.ts: GpGetNounCreatedBy')
     let  invoiceData = { created_by: req.query.createdby };
     invoice.GpGetNounCreatedBy(invoiceData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from invoiceService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}