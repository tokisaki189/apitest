const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
app.get("/", function (req, res) {
  res.json([
    {
      name: "John",
      age: 25,
      gender: "male",
      city: "New York",
      country: "USA",
      occupation: "Software Engineer",
      hobbies: ["reading", "coding", "traveling"],
      isStudent: false,
      grades: { math: 90, history: 85, english: 95 },
      languages: ["JavaScript", "Python", "Java"],
      hasPets: true,
    },
    {
      name: "Alice",
      age: 30,
      gender: "female",
      city: "London",
      country: "UK",
      occupation: "Data Scientist",
      hobbies: ["painting", "hiking", "cooking"],
      isStudent: false,
      grades: { math: 80, history: 95, english: 92 },
      languages: ["R", "Python", "SQL"],
      hasPets: false,
    },
    {
      name: "Michael",
      age: 22,
      gender: "male",
      city: "Sydney",
      country: "Australia",
      occupation: "Web Developer",
      hobbies: ["gaming", "music", "photography"],
      isStudent: true,
      grades: { math: 78, history: 88, english: 75 },
      languages: ["JavaScript", "HTML", "CSS"],
      hasPets: true,
    },
  ]);
});
app.listen(PORT, function () {
  console.log(`Server is running on localhost:${PORT}`);
});
