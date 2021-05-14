const express = require("express");
const app = express();

app.use(express.json());

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "successfully got users. nice!",
    users: req.params.id,
  });
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyThKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "password and username match!",
      token: "encrypted token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "password and username do not match",
    });
  }
});

app.listen(8000, function () {
  console.log("Server up and running at http://localhost:8000/");
});
