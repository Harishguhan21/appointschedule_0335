import * as mongoose from 'mongoose';
import exchangeModel from '../models/daomodels/exchange';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class exchangeDao {
    private exchange = exchangeModel;
    constructor() { }
    
    public async GpDelete(exchangeId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into exchangeDao.ts: GpDelete');

    

    
    
    
    this.exchange.findByIdAndRemove(exchangeId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from exchangeDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(exchangeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into exchangeDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(exchangeData).forEach(
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
    this.exchange.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from exchangeDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(exchangeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into exchangeDao.ts: GpSearchForUpdate');

    

    
    
    
    this.exchange.findOneAndUpdate({ _id: exchangeData._id }, exchangeData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from exchangeDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(exchangeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into exchangeDao.ts: GpUpdate');

    

    
    
    
    this.exchange.findOneAndUpdate({ _id: exchangeData._id }, exchangeData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from exchangeDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(exchangeId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into exchangeDao.ts: GpGetEntityById');

    

    
    
    
    this.exchange.findById(exchangeId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from exchangeDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into exchangeDao.ts: GpGetAllValues');

    

    
    
    
    this.exchange.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from exchangeDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(exchangeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into exchangeDao.ts: GpCreate');

    let temp = new exchangeModel(exchangeData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from exchangeDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(exchangeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into exchangeDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.exchange.aggregate(([
                        { $match: { $and: [{ created_by: exchangeData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from exchangeDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}