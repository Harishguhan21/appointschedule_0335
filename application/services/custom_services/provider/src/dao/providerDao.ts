import * as mongoose from 'mongoose';
import providerModel from '../models/daomodels/provider';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class providerDao {
    private provider = providerModel;
    constructor() { }
    
    public async GpDelete(providerId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into providerDao.ts: GpDelete');

    

    
    
    
    this.provider.findByIdAndRemove(providerId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from providerDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(providerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into providerDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(providerData).forEach(
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
    this.provider.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from providerDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(providerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into providerDao.ts: GpSearchForUpdate');

    

    
    
    
    this.provider.findOneAndUpdate({ _id: providerData._id }, providerData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from providerDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(providerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into providerDao.ts: GpUpdate');

    

    
    
    
    this.provider.findOneAndUpdate({ _id: providerData._id }, providerData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from providerDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(providerId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into providerDao.ts: GpGetEntityById');

    

    
    
    
    this.provider.findById(providerId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from providerDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into providerDao.ts: GpGetAllValues');

    

    
    
    
    this.provider.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from providerDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(providerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into providerDao.ts: GpCreate');

    let temp = new providerModel(providerData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from providerDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(providerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into providerDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.provider.aggregate(([
                        { $match: { $and: [{ created_by: providerData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from providerDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}