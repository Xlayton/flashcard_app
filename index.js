const xpress = require("express");
const route = require("./routes/routes");
const path = require("path");

const app = xpress();

app.set("view engine", "pug");  
app.set("views", `${__dirname}/views`);
app.use(xpress.static(path.join(`${__dirname}/public`)));

app.get("/", route.index);
app.get("/manage", route.manage);
app.get("/cards", route.view);

app.listen(81);
