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
        console.log(data)
        //let result = await user_services.create_user({nickname: "Tom", email: "Tom@gmail.com", password: "tom_tom"});
        response.status(201).json({ok: "ok"});
    }

    async authenticationUser(request, response){
        let data = request.query;
        response.status(200).json(data);
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