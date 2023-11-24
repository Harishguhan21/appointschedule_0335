import { Request, Response } from 'express';
import { appointmentsService } from '../service/appointmentsService';
import { CustomLogger } from '../config/Logger'
let appointments = new appointmentsService();

export class appointmentsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    appointments.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appointmentsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appointmentsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    appointments.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appointmentsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appointmentsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    appointments.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appointmentsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appointmentsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    appointments.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appointmentsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appointmentsController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    appointments.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appointmentsController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appointmentsController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    appointments.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appointmentsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appointmentsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    appointments.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appointmentsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appointmentsController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    appointments.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into appointmentsController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from appointmentsController.ts: GpGetNounCreatedBy');
    })}


}