import { Request, Response } from 'express';
import { worksService } from '../service/worksService';
import { CustomLogger } from '../config/Logger'
let works = new worksService();

export class worksController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    works.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into worksController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from worksController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    works.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into worksController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from worksController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    works.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into worksController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from worksController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    works.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into worksController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from worksController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    works.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into worksController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from worksController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    works.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into worksController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from worksController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    works.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into worksController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from worksController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    works.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into worksController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from worksController.ts: GpGetNounCreatedBy');
    })}


}