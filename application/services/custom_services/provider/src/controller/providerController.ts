import { Request, Response } from 'express';
import { providerService } from '../service/providerService';
import { CustomLogger } from '../config/Logger'
let provider = new providerService();

export class providerController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    provider.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into providerController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from providerController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    provider.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into providerController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from providerController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    provider.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into providerController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from providerController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    provider.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into providerController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from providerController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    provider.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into providerController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from providerController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    provider.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into providerController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from providerController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    provider.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into providerController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from providerController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    provider.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into providerController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from providerController.ts: GpGetNounCreatedBy');
    })}


}