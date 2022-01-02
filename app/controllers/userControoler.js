
class UserController{

    async getAllUsers(request, response){
        let users = {users: []}
        response.status(200).json(users);
    }

    async getUserById(request, response){
        let user = {id: 1, name: ""};
        response.status(200).json(user);
    }

    async createUser(request, response){
        let user = {id: 1, name: ""};
        response.status(200).json(user);
    }

    async authenticationUser(request, response){
        let user = {id: 1, name: ""};
        response.status(200).json(user);
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