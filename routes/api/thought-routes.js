const router = require('express').Router();
const {getAllThoughts, getThoughtById, createNewThought,editThought, deleteThought, addReaction, removeReaction}= require("../../controllers/thought-controllers"); 


//3000/api/thoughts//
router.route("/").get(getAllThoughts).post(createNewThought);

//3000/api/thoughts/:thoughtId//
router.route("/:thoughtId").get(getThoughtById).put(editThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction); 
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports=router;
