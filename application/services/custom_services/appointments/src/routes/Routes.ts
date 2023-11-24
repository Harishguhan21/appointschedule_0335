import { Request, Response, NextFunction } from "express";
import { appointmentsController } from '../controller/appointmentsController';


export class Routes {
    private appointments: appointmentsController = new appointmentsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/appointments/:id').delete(this.appointments.GpDelete);
app.route('/appointments/get/search').get(this.appointments.GpSearch);
app.route('/appointments/get/update').put(this.appointments.GpSearchForUpdate);
app.route('/appointments').put(this.appointments.GpUpdate);
app.route('/appointments/:id').get(this.appointments.GpGetEntityById);
app.route('/appointments').get(this.appointments.GpGetAllValues);
app.route('/appointments').post(this.appointments.GpCreate);
app.route('/appointments/userid/created_by').get(this.appointments.GpGetNounCreatedBy);
     }

}