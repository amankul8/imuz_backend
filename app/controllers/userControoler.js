let user_services = require("./../services/UsersServices");
const e = require("express");


class UserController{

    async getAllUsers(request, response){
        let result = await user_services.get_all_users();
        if(result){
            response.status(200).json(result);
        }else{
            response.status(500).json({message: "Error"});
        }
    }

    async getUserById(request, response){
        let user = {id: 1, name: ""};
        response.status(200).json(user);
    }

    async getUser(request, response){
        let user = {id: 1, name: ""};
        response.status(200).json(user);
    }

    async createUser(request, response){
        let data = request.body;
        if(data.nickname!=="" && data.email!=="" && data.password!==""){
            let result = await user_services.create_user({nickname: data.nickname, email: data.email, password: data.password});
            if(result.st_code === 201){
                response.status(201).json(result.result);
            }else{
                response.status(202).json(result.result);
            }
        }else{
            response.status(400).json({message: "Data is incomplete !"});
        }
    }

    async authenticationUser(request, response){
        if(request.body.nickname!=="" && request.body.password!==""){
            let result = await user_services.get_user(request.body);
            if(result!==undefined){
                response.status(200).json(result);
            }else{
                response.status(400).json({message: "Error"});
            }
        }else{
            response.status(400);
        }
    }

    async forgetUserPassword(request, response){
        if(request.body.email!==""){
            let result = await user_services.update_user_password(request.body);
            if(result){
                response.status(200).json("Success");
            }else{
                response.status(400).json({message: "Error"});
            }
        }else{
            response.status(400).json("Error");
        }
    }

    async getAllFriends(request, response){
        let result = await user_services.get_all_friends(request.query.id);
        if(result){
            response.status(200).json(result);
        }else{
            response.status(500).json({message: "Error"});
        }
    }

    async addToFriend(request, response){
        let result = await user_services.add_friend(request.body.id, request.body.friends);
        if(result){
            response.status(200).json(result);
        }else{
            response.status(500).json({message: "Error"});
        }
    }
}

module.exports = new UserController();