const express = require("express");
const userController = require("./../app/controllers/userControoler");
const musicsController = require("./../app/controllers/musicsController");
const searchController = require("./../app/controllers/searchController")
const jsonParser = express.json();
const Router = express.Router;

const appRouter = new Router();
const userRouter = new Router();
const musicRouter = new Router();
const searchRouter = new Router();
const friendsRouter = new Router();
const plRouter = new Router();

//----------------------App-------------------------------
appRouter.get("/", musicsController.getHomeMusics);

appRouter.use("/users", userRouter);
appRouter.use("/musics", musicRouter);
appRouter.use("/my_play_list", plRouter);
appRouter.use("/search", searchRouter);
appRouter.use("/friends", friendsRouter);

//--------------------user----------------------------------
userRouter.get("/", userController.getAllUsers);
userRouter.get("/user/:id", userController.getUserById);


userRouter.post("/user/auth/authentication", jsonParser, userController.authenticationUser);
userRouter.post("/user/auth/registration", jsonParser, userController.createUser);
userRouter.post("/user/auth/forget_password", userController.forgetUserPassword);



//--------------------musics-------------------------------
musicRouter.get("/", musicsController.getAllMusics);
musicRouter.post("/add", musicsController.addMusic);

//-------------------playList------------------------------
plRouter.get("/", musicsController.getPlayListMusics);

//-------------------search-------------------------------
searchRouter.get("/", searchController.getGeneralSearchResult);

//------------------friends-------------------------------
friendsRouter.get("/", userController.getAllFriends);
friendsRouter.post("/add", jsonParser, userController.addToFriend);

appRouter.get("", (request,response)=>{
    response.send("Error 404");
});



module.exports = appRouter;

