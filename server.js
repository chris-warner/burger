var express = require("express");
var PORT = process.env.PORT || 8080;
var route = require("./models/burger.js");
var app = express();
var exphbs = require("express-handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(route);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
