import * as mongoose from 'mongoose';
import notificationModel from '../models/daomodels/notification';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class notificationDao {
    private notification = notificationModel;
    constructor() { }
    
    public async GpDelete(notificationId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into notificationDao.ts: GpDelete');

    

    
    
    
    this.notification.findByIdAndRemove(notificationId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from notificationDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(notificationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into notificationDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(notificationData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.notification.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from notificationDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(notificationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into notificationDao.ts: GpSearchForUpdate');

    

    
    
    
    this.notification.findOneAndUpdate({ _id: notificationData._id }, notificationData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from notificationDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(notificationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into notificationDao.ts: GpUpdate');

    

    
    
    
    this.notification.findOneAndUpdate({ _id: notificationData._id }, notificationData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from notificationDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(notificationId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into notificationDao.ts: GpGetEntityById');

    

    
    
    
    this.notification.findById(notificationId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from notificationDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into notificationDao.ts: GpGetAllValues');

    

    
    
    
    this.notification.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from notificationDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(notificationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into notificationDao.ts: GpCreate');

    let temp = new notificationModel(notificationData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from notificationDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(notificationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into notificationDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.notification.aggregate(([
                        { $match: { $and: [{ created_by: notificationData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from notificationDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}