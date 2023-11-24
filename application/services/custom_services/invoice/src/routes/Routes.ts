import { Request, Response, NextFunction } from "express";
import { invoiceController } from '../controller/invoiceController';


export class Routes {
    private invoice: invoiceController = new invoiceController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/invoice/:id').delete(this.invoice.GpDelete);
app.route('/invoice/get/search').get(this.invoice.GpSearch);
app.route('/invoice/get/update').put(this.invoice.GpSearchForUpdate);
app.route('/invoice').put(this.invoice.GpUpdate);
app.route('/invoice/:id').get(this.invoice.GpGetEntityById);
app.route('/invoice').get(this.invoice.GpGetAllValues);
app.route('/invoice').post(this.invoice.GpCreate);
app.route('/invoice/userid/created_by').get(this.invoice.GpGetNounCreatedBy);
     }

}