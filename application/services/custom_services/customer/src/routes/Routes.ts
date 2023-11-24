import { Request, Response, NextFunction } from "express";
import { customerController } from '../controller/customerController';


export class Routes {
    private customer: customerController = new customerController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/customer/:id').delete(this.customer.GpDelete);
app.route('/customer/get/search').get(this.customer.GpSearch);
app.route('/customer/get/update').put(this.customer.GpSearchForUpdate);
app.route('/customer').put(this.customer.GpUpdate);
app.route('/customer/:id').get(this.customer.GpGetEntityById);
app.route('/customer').get(this.customer.GpGetAllValues);
app.route('/customer').post(this.customer.GpCreate);
app.route('/customer/userid/created_by').get(this.customer.GpGetNounCreatedBy);
     }

}