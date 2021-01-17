const express = require("express");
const passport = require("passport");
// const morgan = require("morgan");
const sequelize = require("./DB/index");
const cors = require("cors");
const session = require("express-session");
const helmet = require("helmet");
const config = require("config");
const rateLimit = require("express-rate-limit");
const path = require("path");
const { json, urlencoded } = require("body-parser");
const authRoute = require("./api/routes/auth.route");
const workspaceRoute = require("./api/routes/workspace.route");
const { checkSession } = require("./api/middlewares/checkSession");

const app = express();

app.use(helmet());
app.use(
  rateLimit({
    windowMS: 1 * 60 * 1000, //1minute
    max: 200, //limit each IP to 100 requests per windowMS
  })
);

if (process.env.NODE_ENV !== "production") {
  app.use("/", express.static(path.join(__dirname, "client", "public")));
  app.use(require("morgan")("dev"));
}

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
require("./api/middlewares/passport.middleware")(passport);
app.use(cors());

app.use(
  session({
    secret: "garage masters",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(checkSession);

app.use("/api/auth", authRoute);
app.use("/api/workspace", workspaceRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || config.get("port") || 5000;

(async () => {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    app.listen(PORT, err => {
      if (err) {
        console.log(err.message);
      }
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
})();
