import { Request, Response } from 'express';
import { exchangeService } from '../service/exchangeService';
import { CustomLogger } from '../config/Logger'
let exchange = new exchangeService();

export class exchangeController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    exchange.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into exchangeController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from exchangeController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    exchange.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into exchangeController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from exchangeController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    exchange.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into exchangeController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from exchangeController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    exchange.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into exchangeController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from exchangeController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    exchange.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into exchangeController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from exchangeController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    exchange.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into exchangeController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from exchangeController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    exchange.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into exchangeController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from exchangeController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    exchange.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into exchangeController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from exchangeController.ts: GpGetNounCreatedBy');
    })}


}