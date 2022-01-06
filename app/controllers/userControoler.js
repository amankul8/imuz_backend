let user_services = require("./../services/UsersServices");


class UserController{

    async getAllUsers(request, response){
        let result = await user_services.get_all_users();
        response.json(result);
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
        let user = {id: 1, name: ""};
        response.status(200).json(user);
    }

    async getAllFriends(request, response){
        let friends = {friends: []}
        response.status(200).json(friends);
    }

    async addToFriend(request, response){
        let friends = {friends: []}
        response.status(200).json(friends);
    }
}

module.exports = new UserController();