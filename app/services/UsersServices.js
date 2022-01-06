const Users = require("../models/UserModel");
const mongoose = require("mongoose");
const config = require("../../config/app");

class UsersServices{

    create_user = async (data)=>{
        let result = {};
        let st_code = 400;
        try{
            mongoose.connect(config.url, { useUnifiedTopology: true, useNewUrlParser: true });

            let oldMan = await Users.findOne({nickname: data.nickname});
            if(oldMan){
                result = {message: "A user with such a nickname already exists "};
                st_code = 202
            }else{
                try{
                    result = await Users.create(data);
                    st_code = 201
                }catch (err){
                    result = {message: err.message};
                    st_code = 202;
                }
            }
        }catch (err){
            result = {message: err.message};
            st_code = 202;
        }
        finally {
            mongoose.disconnect();
        }
        return {result, st_code};
    }

    get_user_by_id = async (id)=>{

    }


    get_user = async (pl)=>{
        try{
            await mongoose.connect(config.url, { useUnifiedTopology: true, useNewUrlParser: true });

            let result = await Users.findOne(pl);
            if(result){
                return result;
            }else{
                return null
            }

        }catch(err){
            return null;
        }
        finally {
            await mongoose.disconnect();
        }

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
