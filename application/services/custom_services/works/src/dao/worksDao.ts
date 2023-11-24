import * as mongoose from 'mongoose';
import worksModel from '../models/daomodels/works';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class worksDao {
    private works = worksModel;
    constructor() { }
    
    public async GpDelete(worksId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into worksDao.ts: GpDelete');

    

    
    
    
    this.works.findByIdAndRemove(worksId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from worksDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(worksData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into worksDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(worksData).forEach(
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
    this.works.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from worksDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(worksData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into worksDao.ts: GpSearchForUpdate');

    

    
    
    
    this.works.findOneAndUpdate({ _id: worksData._id }, worksData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from worksDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(worksData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into worksDao.ts: GpUpdate');

    

    
    
    
    this.works.findOneAndUpdate({ _id: worksData._id }, worksData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from worksDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(worksId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into worksDao.ts: GpGetEntityById');

    

    
    
    
    this.works.findById(worksId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from worksDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into worksDao.ts: GpGetAllValues');

    

    
    
    
    this.works.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from worksDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(worksData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into worksDao.ts: GpCreate');

    let temp = new worksModel(worksData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from worksDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(worksData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into worksDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.works.aggregate(([
                        { $match: { $and: [{ created_by: worksData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from worksDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}