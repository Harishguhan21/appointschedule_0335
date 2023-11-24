import { Request, Response } from 'express';
import { invoiceService } from '../service/invoiceService';
import { CustomLogger } from '../config/Logger'
let invoice = new invoiceService();

export class invoiceController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    invoice.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into invoiceController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from invoiceController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    invoice.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into invoiceController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from invoiceController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    invoice.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into invoiceController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from invoiceController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    invoice.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into invoiceController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from invoiceController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    invoice.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into invoiceController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from invoiceController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    invoice.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into invoiceController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from invoiceController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    invoice.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into invoiceController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from invoiceController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    invoice.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into invoiceController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from invoiceController.ts: GpGetNounCreatedBy');
    })}


}