import * as mongoose from 'mongoose';
import appointmentsModel from '../models/daomodels/appointments';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class appointmentsDao {
    private appointments = appointmentsModel;
    constructor() { }
    
    public async GpDelete(appointmentsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appointmentsDao.ts: GpDelete');

    

    
    
    
    this.appointments.findByIdAndRemove(appointmentsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appointmentsDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(appointmentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appointmentsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(appointmentsData).forEach(
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
    this.appointments.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appointmentsDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(appointmentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appointmentsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.appointments.findOneAndUpdate({ _id: appointmentsData._id }, appointmentsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appointmentsDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(appointmentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appointmentsDao.ts: GpUpdate');

    

    
    
    
    this.appointments.findOneAndUpdate({ _id: appointmentsData._id }, appointmentsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appointmentsDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(appointmentsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appointmentsDao.ts: GpGetEntityById');

    

    
    
    
    this.appointments.findById(appointmentsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appointmentsDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into appointmentsDao.ts: GpGetAllValues');

    

    
    
    
    this.appointments.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appointmentsDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(appointmentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appointmentsDao.ts: GpCreate');

    let temp = new appointmentsModel(appointmentsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appointmentsDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(appointmentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into appointmentsDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.appointments.aggregate(([
                        { $match: { $and: [{ created_by: appointmentsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from appointmentsDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}