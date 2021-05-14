const express = require("express");
const app = express();

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "successfully got users. nice!",
    users: req.params.id,
  });
});

app.listen(8000, function () {
  console.log("Server up and running at http://localhost:8000/");
});
