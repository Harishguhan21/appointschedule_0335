import { Request, Response, NextFunction } from "express";
import { worksController } from '../controller/worksController';


export class Routes {
    private works: worksController = new worksController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/works/:id').delete(this.works.GpDelete);
app.route('/works/get/search').get(this.works.GpSearch);
app.route('/works/get/update').put(this.works.GpSearchForUpdate);
app.route('/works').put(this.works.GpUpdate);
app.route('/works/:id').get(this.works.GpGetEntityById);
app.route('/works').get(this.works.GpGetAllValues);
app.route('/works').post(this.works.GpCreate);
app.route('/works/userid/created_by').get(this.works.GpGetNounCreatedBy);
     }

}