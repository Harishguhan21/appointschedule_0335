import { Request, Response } from 'express';
import {worksDao} from '../dao/worksDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let works = new worksDao();

export class worksService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into worksService.ts: GpDelete')
     let  worksId = req.params.id;
     works.GpDelete(worksId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from worksService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into worksService.ts: GpSearch')
     let  worksData = req.query;
     works.GpSearch(worksData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from worksService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into worksService.ts: GpSearchForUpdate')
     let  worksData = req.body;
     works.GpSearchForUpdate(worksData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from worksService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into worksService.ts: GpUpdate')
     let  worksData = req.body;
     works.GpUpdate(worksData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from worksService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into worksService.ts: GpGetEntityById')
     let  worksId = req.params.id;
     works.GpGetEntityById(worksId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from worksService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into worksService.ts: GpGetAllValues')
     
     works.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from worksService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into worksService.ts: GpCreate')
     let  worksData = req.body;
     works.GpCreate(worksData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from worksService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into worksService.ts: GpGetNounCreatedBy')
     let  worksData = { created_by: req.query.createdby };
     works.GpGetNounCreatedBy(worksData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from worksService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}