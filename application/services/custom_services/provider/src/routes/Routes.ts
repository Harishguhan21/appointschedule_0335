import { Request, Response, NextFunction } from "express";
import { providerController } from '../controller/providerController';


export class Routes {
    private provider: providerController = new providerController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/provider/:id').delete(this.provider.GpDelete);
app.route('/provider/get/search').get(this.provider.GpSearch);
app.route('/provider/get/update').put(this.provider.GpSearchForUpdate);
app.route('/provider').put(this.provider.GpUpdate);
app.route('/provider/:id').get(this.provider.GpGetEntityById);
app.route('/provider').get(this.provider.GpGetAllValues);
app.route('/provider').post(this.provider.GpCreate);
app.route('/provider/userid/created_by').get(this.provider.GpGetNounCreatedBy);
     }

}