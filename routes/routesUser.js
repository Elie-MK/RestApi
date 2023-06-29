const {addNewUser,getUsers, getUserWithId, updateUser, deleteUser}= require("../controller/controllerUser")

const routes = (app)=>{
    app.route('/users')
    .get((req, res, next)=>{
        //middleware
        console.log(`Request de : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, getUsers)

    .post(addNewUser);

    app.route('/users/:userId')
    //Contact with id
    .get(getUserWithId)

    //mise à jour contact
    .put(updateUser)

    //supprimer
    .delete(deleteUser)
}

module.exports = {routes};