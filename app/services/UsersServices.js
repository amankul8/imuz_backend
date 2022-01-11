const Users = require("../models/UserModel");
const mongoose = require("mongoose");
const config = require("../../config/app");
const nodemailer = require("nodemailer");

class UsersServices{

    create_user = async (data)=>{
        let result = {};
        let st_code = 400;
        try{
            await mongoose.connect(config.url, { useUnifiedTopology: true, useNewUrlParser: true });
            let mail = await Users.findOne({email: data.email});
            let name = await Users.findOne({nickname: data.nickname});
            if(mail){
                result = {message: "A user with such a Email already exists "};
                st_code = 202;
            }else if(name){
                result = {message: "A user with such a Nickname already exists "};
                st_code = 202;
            }else{
                try{
                    result = await Users.create(data);
                    st_code = 201;
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

    update_user_password = async (data)=>{
        let result=false;
        let pass = Math.random().toString(36).slice(-7);
        try{
            await mongoose.connect(config.url, { useUnifiedTopology: true, useNewUrlParser: true });
            let user = await Users.findOne({email: data.email});
            if(user){
                let a = await Users.updateOne({email: user.email}, {password: pass});
                let b = await this.sendMailer(data.email, pass);
                if(a && b){
                    result = true
                }
            }
        }catch (err){
            result=false;
        }
        finally {
            mongoose.disconnect();
        }
        return result;
    }

    get_all_users = async ()=>{
        let result = {};
        try{
            await mongoose.connect(config.url, { useUnifiedTopology: true, useNewUrlParser: true });
            result = await Users.find({}, {_id: 1, nickname: 1, image: 1});
        }catch (err){
            result = false;
        }
        finally {
            mongoose.disconnect();
        }
        return result;
    }

    add_friend = async (id, friends)=>{
        let result = {};
        try{
            if(friends.length!==0){
                await mongoose.connect(config.url, { useUnifiedTopology: true, useNewUrlParser: true });
                await Users.findOneAndUpdate({_id: id}, {friends: friends});
                result = await Users.findOne({_id: id});
            }else{
                console.log("Array empty");
                result = false;
            }
        }catch (err){
            result = false;
        }
        finally {
            mongoose.disconnect();
        }
        return result;
    }

    get_all_friends = async (id)=>{
        let result = {};
        try{
            await mongoose.connect(config.url, { useUnifiedTopology: true, useNewUrlParser: true });
            let user = await Users.findOne({'_id': id}, {_id: 1, nickname: 1, friends: 1});
            if(user.friends.length === 0){
                result = {}
            }else{
                result = await Users.find({'_id': {$in: user.friends}}, {_id: 1, nickname: 1, image: 1});
            }
        }catch (err){
            result = false;
        }
        finally {
            mongoose.disconnect();
        }
        return result;
    }

    //----------------------------Mailer-----------------------------

    sendMailer = async (email, message)=> {

        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                name: "imuz imuz",
                user: "imuz.test.0@gmail.com", // generated ethereal user
                pass: "12345678imuz", // generated ethereal password
            },
        });

        const option = {
            from: 'imuz',
            to: email,
            subject: 'Password recovery',
            html: `<span>Your new password <strong>${message}</strong></span>`
        }

        try{
            let ans = await transporter.sendMail(option);
            if(ans){
                return true
            }else{
                return false
            }
        }catch(err){
            return false;
        }

    }
}


module.exports = new UsersServices();
