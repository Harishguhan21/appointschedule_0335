import * as mongoose from 'mongoose';
import customerModel from '../models/daomodels/customer';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class customerDao {
    private customer = customerModel;
    constructor() { }
    
    public async GpDelete(customerId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into customerDao.ts: GpDelete');

    

    
    
    
    this.customer.findByIdAndRemove(customerId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from customerDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(customerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into customerDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(customerData).forEach(
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
    this.customer.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from customerDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(customerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into customerDao.ts: GpSearchForUpdate');

    

    
    
    
    this.customer.findOneAndUpdate({ _id: customerData._id }, customerData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from customerDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(customerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into customerDao.ts: GpUpdate');

    

    
    
    
    this.customer.findOneAndUpdate({ _id: customerData._id }, customerData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from customerDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(customerId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into customerDao.ts: GpGetEntityById');

    

    
    
    
    this.customer.findById(customerId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from customerDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into customerDao.ts: GpGetAllValues');

    

    
    
    
    this.customer.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from customerDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(customerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into customerDao.ts: GpCreate');

    let temp = new customerModel(customerData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from customerDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(customerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into customerDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.customer.aggregate(([
                        { $match: { $and: [{ created_by: customerData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from customerDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}