import { Request, Response } from 'express';
import { customerService } from '../service/customerService';
import { CustomLogger } from '../config/Logger'
let customer = new customerService();

export class customerController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    customer.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    customer.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    customer.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    customer.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    customer.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    customer.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    customer.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    customer.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpGetNounCreatedBy');
    })}


}