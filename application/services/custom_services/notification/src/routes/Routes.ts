import { Request, Response, NextFunction } from "express";
import { notificationController } from '../controller/notificationController';


export class Routes {
    private notification: notificationController = new notificationController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/notification/:id').delete(this.notification.GpDelete);
app.route('/notification/get/search').get(this.notification.GpSearch);
app.route('/notification/get/update').put(this.notification.GpSearchForUpdate);
app.route('/notification').put(this.notification.GpUpdate);
app.route('/notification/:id').get(this.notification.GpGetEntityById);
app.route('/notification').get(this.notification.GpGetAllValues);
app.route('/notification').post(this.notification.GpCreate);
app.route('/notification/userid/created_by').get(this.notification.GpGetNounCreatedBy);
     }

}