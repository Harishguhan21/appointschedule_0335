import * as mongoose from 'mongoose';
import invoiceModel from '../models/daomodels/invoice';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class invoiceDao {
    private invoice = invoiceModel;
    constructor() { }
    
    public async GpDelete(invoiceId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into invoiceDao.ts: GpDelete');

    

    
    
    
    this.invoice.findByIdAndRemove(invoiceId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from invoiceDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(invoiceData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into invoiceDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(invoiceData).forEach(
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
    this.invoice.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from invoiceDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(invoiceData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into invoiceDao.ts: GpSearchForUpdate');

    

    
    
    
    this.invoice.findOneAndUpdate({ _id: invoiceData._id }, invoiceData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from invoiceDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(invoiceData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into invoiceDao.ts: GpUpdate');

    

    
    
    
    this.invoice.findOneAndUpdate({ _id: invoiceData._id }, invoiceData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from invoiceDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(invoiceId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into invoiceDao.ts: GpGetEntityById');

    

    
    
    
    this.invoice.findById(invoiceId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from invoiceDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into invoiceDao.ts: GpGetAllValues');

    

    
    
    
    this.invoice.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from invoiceDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(invoiceData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into invoiceDao.ts: GpCreate');

    let temp = new invoiceModel(invoiceData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from invoiceDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(invoiceData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into invoiceDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.invoice.aggregate(([
                        { $match: { $and: [{ created_by: invoiceData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from invoiceDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}