import { Request, Response, NextFunction } from "express";
import { exchangeController } from '../controller/exchangeController';


export class Routes {
    private exchange: exchangeController = new exchangeController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/exchange/:id').delete(this.exchange.GpDelete);
app.route('/exchange/get/search').get(this.exchange.GpSearch);
app.route('/exchange/get/update').put(this.exchange.GpSearchForUpdate);
app.route('/exchange').put(this.exchange.GpUpdate);
app.route('/exchange/:id').get(this.exchange.GpGetEntityById);
app.route('/exchange').get(this.exchange.GpGetAllValues);
app.route('/exchange').post(this.exchange.GpCreate);
app.route('/exchange/userid/created_by').get(this.exchange.GpGetNounCreatedBy);
     }

}