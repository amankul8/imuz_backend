const Users = require("../models/UserModel");
const mongoose = require("mongoose");
const config = require("../../config/app");

class UsersServices{

    create_user = async (data)=>{
        let result = {body: '', st_code: ''};
        try{
            mongoose.connect(config.url, { useUnifiedTopology: true, useNewUrlParser: true });
            try{
                result.body = await Users.create(data);
                result.st_code = 201
            }catch (err){
                result.body = err.message;
                result.st_code = err.status;
            }
        }catch (err){
            result.body = err.message;
            result.st_code = err.status;
        }
        finally {
            mongoose.disconnect();
        }
        return result;
    }
    get_user_by_id = async (id)=>{

    }
    get_user = async (data)=>{

    }
    delete_user_by_id = async (id)=>{

    }
    update_user_by_id = async (id)=>{

    }
    get_all_users = async ()=>{
        let result = {body: '', st_code: ''};
        try{
            mongoose.connect(config.url, { useUnifiedTopology: true, useNewUrlParser: true });
            result.body = await Users.find({});
            result.st_code = 201;
        }catch (err){
            result.body = err;
            result.st_code = err.status;
        }
        finally {
            mongoose.disconnect();
        }
        return result;
    }

    //----------------------------

}

module.exports = new UsersServices();
