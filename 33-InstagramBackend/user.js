const express = require("express");
var bodyParser = require("body-parser");
require("./src/config/db");
const routes = require("./src/routes/userRoute");
const user = express();
const port = 3000;

user.use(bodyParser.json());

user.use("/api", routes);

user.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// let users = [
//   {
//     id: 1,
//     name: "gunel",
//     surname: "ehmedzade",
//     username: "gnnlw",
//     email: "gunel@gmail.com",
//     password: "maddyv0201",
//     gender: "female",
//     age: 18,
//     bio: "Nevermind",
//     profilePhoto:
//       "https://unsplash.com/photos/russian-blue-cat-wearing-yellow-sunglasses-yMSecCHsIBc",
//   },
//   {
//     id: 2,
//     name: "vusala",
//     surname: "salimova",
//     username: "svvusala",
//     email: "vusala@gmail.com",
//     password: "2004v1984",
//     gender: "female",
//     age: 19,
//     bio: "Busy",
//     profilePhoto:
//       "https://unsplash.com/photos/grayscale-photo-of-black-car-wdxb9OOMQOs",
//   },
//   {
//     id: 3,
//     name: "habiba",
//     surname: "balakisiyeva",
//     username: "whoishabiba",
//     email: "habiba@gmail.com",
//     password: "habiba2005",
//     gender: "female",
//     age: 17,
//     bio: "soon or later it is over",
//     profilePhoto:
//       "https://unsplash.com/photos/a-record-player-sitting-on-top-of-a-table-BlUl2i3ZLvM",
//   },
//   {
//     id: 4,
//     name: "shahnaz",
//     surname: "rustamli",
//     username: "theshahnaz",
//     email: "shahnaz@gmail.com",
//     password: "shahnaz2004",
//     gender: "female",
//     age: 20,
//     bio: "coder",
//     profilePhoto:
//       "https://unsplash.com/photos/a-record-player-sitting-on-top-of-a-table-BlUl2i3ZLvM",
//   },
// ];

// user.get("/", (req, res) => {
//   res.send(users);
// });

// user.get("/:id", (req, res) => {
//   let findElem = users.find((elem) => elem.id == req.params.id);
//   res.send(findElem);
// });

// user.delete("/:id", (req, res) => {
//   let findElems = users.filter((elem) => elem.id != req.params.id);
//   res.send(findElems);
// });

// user.post("/", (req, res) => {
//   users.push(req.body);
//   res.send("Post olundu");
// });

// user.put("/:id", (req, res) => {
//   let id = req.params.id;
//   let obj = req.body;

//   let elem = users.findIndex((el) => el.id == id);
//   console.log(elem);

//   users[elem] = { id: id, ...obj };
//   res.send(users);
// });

// user.patch("/:id", (req, res) => {
//   let id = req.params.id;
//   let obj = req.body;

//   let elemIndex = users.findIndex((el) => el.id == id);
//   let elem = users.find((el) => el.id == id);
//   console.log(elem);

//   users[elemIndex] = { ...elem, ...obj };
//   res.send(users);
// });
