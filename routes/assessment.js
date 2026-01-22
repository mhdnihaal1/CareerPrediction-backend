import express from "express";
import { questions } from "../data/questions.js";

const router = express.Router();

router.get("/questions", (req, res) => {
  res.json(questions);
});

router.post("/submit", (req, res) => {
  const answers = req.body;
  const scores = {};

  answers.forEach(({ trait, score }) => {
    scores[trait] = (scores[trait] || 0) + score;
  });

  let career = "Undecided";
  if (scores.technical >= 8 && scores.analytical >= 8) {
    career = "Software Engineer";
  }

  res.json({ scores, career });
});

export default router;
