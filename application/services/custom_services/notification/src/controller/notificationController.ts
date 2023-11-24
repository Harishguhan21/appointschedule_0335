import { Request, Response } from 'express';
import { notificationService } from '../service/notificationService';
import { CustomLogger } from '../config/Logger'
let notification = new notificationService();

export class notificationController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    notification.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into notificationController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from notificationController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    notification.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into notificationController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from notificationController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    notification.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into notificationController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from notificationController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    notification.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into notificationController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from notificationController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    notification.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into notificationController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from notificationController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    notification.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into notificationController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from notificationController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    notification.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into notificationController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from notificationController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    notification.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into notificationController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from notificationController.ts: GpGetNounCreatedBy');
    })}


}