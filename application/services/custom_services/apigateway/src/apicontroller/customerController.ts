import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class customerController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/customer/:id', this.GpDelete);
this.router.get('/customer/get/search', this.GpSearch);
this.router.put('/customer/get/update', this.GpSearchForUpdate);
this.router.put('/customer', this.GpUpdate);
this.router.get('/customer/:id', this.GpGetEntityById);
this.router.get('/customer', this.GpGetAllValues);
this.router.post('/customer', this.GpCreate);
this.router.get('/customer/userid/created_by', this.GpGetNounCreatedBy);
        this.router.get('/customer/get/searchrelationship', this.GpSearchRelationship);
        //#@ssofacebookapiroute@#
        //#@ssogithubapiroute@#
        //#@gepbankingapiroute@#
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpDelete');
        new ApiAdapter().delete(Constant.CUSTOMERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpSearch');
        new ApiAdapter().get(Constant.CUSTOMERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.CUSTOMERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpUpdate');
        new ApiAdapter().put(Constant.CUSTOMERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetEntityById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpGetEntityById');
        new ApiAdapter().get(Constant.CUSTOMERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpGetEntityById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.CUSTOMERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpCreate');
        new ApiAdapter().post(Constant.CUSTOMERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.CUSTOMERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    public GpSearchRelationship(req: Request, res: Response) 
                                            {
                                                   let response1:any;
                                                   let response2:any;
                                                   let response2arr:any[]=[];
                                                   let finalresponse:any;
                                                   let relURL = '/role/get/search?undefined='; 
                                                   new CustomLogger().showLogger('info', 'Enter into customerController.ts: GpSearch');
                                                   new ApiAdapter().get(Constant.CUSTOMERURL + `${req.url}`).then((res: any) => res.response.json()).then(async result => 
                                                   {
                                                      response1 = result;
                                                      new CustomLogger().showLogger('info', 'Exit from customerController.ts: GpSearch');
                                                      new CustomLogger().showLogger('info', 'Enter into roleController.ts: GpSearch');
                                                      for(const data of response1[0].roles)
                                                      {
                                                        await new ApiAdapter().get(`${Constant.CUSTOMERURL}` + `${relURL}` + data).then((res: any) => res.response.json()).then(result => 
                                                        {
                                                          response2 = result;
                                                          new CustomLogger().showLogger('info', 'Exit from roleController.ts: GpSearch')
                                                          response2arr.push(response2);
                                                        });
                                                      };
                                                      finalresponse = 
                                                      {
                                                        "response1" : response1,
                                                        "response2" : response2arr
                                                       }
                                                       req.baseUrl === '/mobile' ? res.send(finalresponse) :
                                                       req.baseUrl === '/web' ? res.send(finalresponse) : res.send(null);
                                                    }).catch(err => 
                                                       {
                                                         res.send(err);
                                                       });
                                            }

    //#@apifacebooklogin@#

    //#@apigithublogin@#

    //#@gepbankinglogin@#








}

  //#@gepbankinglogin@#








}

