const express = require("express");
const postRouter = require("./routes/post");
const db = require("./models");
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.get("/", (req, res) => {
  // POST /post
  res.send("hello express");
});

app.get("/", (req, res) => {
  // DELETE /post
  res.send("hello api");
});

app.use("post", postRouter);

app.listen(3065, () => {
  console.log("서버 실행 중!!");
});
