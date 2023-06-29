const mongoose = require("mongoose")
const {ModelUser} = require('../models/modelUser')
const bcrypt = require('bcrypt');


const controllerUser = mongoose.model("Users", ModelUser)

const addNewUser = async (req, res) => {
  try {
    const { password } = req.body;
    const hash = await bcrypt.hash(password, 13);

    const newUser = new controllerUser({
      ...req.body,
      password: hash
    });

    await newUser.save();
    
    res.json(newUser);
    console.log("Le document a été sauvegardé avec succès.");
    // Effectuez d'autres actions ici
  } catch (error) {
    console.error("Une erreur s'est produite lors de la sauvegarde du document :", error);
  }
};
const getUsers = (req, res) => {  
    controllerUser
      .find({})
      .then((user) => {
        res.json(user)
        console.log("Le document a été trouvé.");
        // Effectuez d'autres actions ici
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la sauvegarde du document :",
          error
        );
      });
  };

  
const getUserWithId = (req, res) => {  
    controllerUser
      .findById(req.params.userId)
      .then((user) => {
        res.json(user)
        console.log("L'utilisateur a été trouvé");
        // Effectuez d'autres actions ici
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la sauvegarde du document :",
          error
        );
      });
  };
const updateUser = (req, res) => {  
    controllerUser
      .findOneAndUpdate({_id:req.params.userId}, req.body,{new:true})
      .then((user) => {
        res.json(user)
        console.log("Le contact a été modifié");
        // Effectuez d'autres actions ici
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la sauvegarde du document :",
          error
        );
      });
  };

const deleteUser = (req, res) => {  
    controllerUser
      .findByIdAndRemove({_id:req.params.userId})
      .then((user) => {
        res.json({message : "Effacer contact avec succès"})
        console.log("Le contact a été supprimé");
        // Effectuez d'autres actions ici
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la sauvegarde du document :",
          error
        );
      });
  };
  

module.exports = {addNewUser, getUsers, getUserWithId, updateUser, deleteUser}