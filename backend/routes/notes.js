const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
// Route1: to fetch all  notes using header auth-token
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal SErver Error");
  }
});

// Route2: to create a new note using header auth-token
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter A Valid Title!").isLength({ min: 5 }),
    body("description", "Enter A Valid Description!").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route3: to edit a note an existing note using header auth-token
router.put(
  "/updatenote/:id",
  fetchuser,
  async (req, res) => {
    try {
      const{title, description, tag} = req.body;
      //create a newNote object
      const newNote = {};
      if(title){newNote.title = title}
      if(description){newNote.description = description}
      if(tag){newNote.tag = tag}
      //find a note to be updatedand update it 
       
      let note = await Notes.findById(req.params.id);
      if(!note){res.status(404).send("Note Not FOund")}

      if(note.user.toString() !== req.user.id){
        return res.status(401).send("Your Are Accessing a unauthorized note");
      }

      note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});
      res.json(note);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route4: to Delete a note an existing note using header auth-token
router.put(
  "/deletenote/:id",
  fetchuser,
  async (req, res) => {
    try {
      const{title, description, tag} = req.body;
      
      //find a note to be Deleted and Delete it 
       
      let note = await Notes.findById(req.params.id);
      if(!note){res.status(404).send("Note Not FOund")}

      if(note.user.toString() !== req.user.id){
        return res.status(401).send("Your Are Accessing a unauthorized note");
      }

      note = await Notes.findByIdAndDelete(req.params.id);
      res.json({Success: "The Note Has Been Deleted", note: note});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;


