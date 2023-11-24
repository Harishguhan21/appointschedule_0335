import { Request, Response } from 'express';
import {customerDao} from '../dao/customerDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let customer = new customerDao();

export class customerService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into customerService.ts: GpDelete')
     let  customerId = req.params.id;
     customer.GpDelete(customerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from customerService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into customerService.ts: GpSearch')
     let  customerData = req.query;
     customer.GpSearch(customerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from customerService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into customerService.ts: GpSearchForUpdate')
     let  customerData = req.body;
     customer.GpSearchForUpdate(customerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from customerService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into customerService.ts: GpUpdate')
     let  customerData = req.body;
     customer.GpUpdate(customerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from customerService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into customerService.ts: GpGetEntityById')
     let  customerId = req.params.id;
     customer.GpGetEntityById(customerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from customerService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into customerService.ts: GpGetAllValues')
     
     customer.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from customerService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into customerService.ts: GpCreate')
     let  customerData = req.body;
     customer.GpCreate(customerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from customerService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into customerService.ts: GpGetNounCreatedBy')
     let  customerData = { created_by: req.query.createdby };
     customer.GpGetNounCreatedBy(customerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from customerService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}