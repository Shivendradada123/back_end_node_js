// routes/notes.js
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/notes.json");

// GET all notes
router.get("/", (req, res) => {
  const notes = JSON.parse(fs.readFileSync(dataPath));
  res.json(notes);
});

// POST a new note
router.post("/", (req, res) => {
  const { title, content } = req.body;
  const notes = JSON.parse(fs.readFileSync(dataPath));

  const newNote = {
    id: Date.now(),
    title,
    content,
  };

  notes.push(newNote);
  fs.writeFileSync(dataPath, JSON.stringify(notes, null, 2));
  res.status(201).json(newNote);
});

// PUT (update) a note
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  let notes = JSON.parse(fs.readFileSync(dataPath));
  let noteIndex = notes.findIndex((n) => n.id == id);

  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes[noteIndex] = { ...notes[noteIndex], title, content };
  fs.writeFileSync(dataPath, JSON.stringify(notes, null, 2));
  res.json(notes[noteIndex]);
});

// DELETE a note
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let notes = JSON.parse(fs.readFileSync(dataPath));

  const filteredNotes = notes.filter((n) => n.id != id);
  fs.writeFileSync(dataPath, JSON.stringify(filteredNotes, null, 2));
  res.json({ message: "Note delet" });
});

module.exports = router;
