import express from "express";
// const helmet = require("helmet");
// const xss = require("xss-clean");
// const mongoSanitize = require("express-mongo-sanitize");
// const compression = require("compression");
// const cors = require("cors");
// const passport = require("passport");
import httpStatus from "http-status";
// const config = require("./config/config");
// const morgan = require("./config/morgan");
// const { jwtStrategy } = require("./config/passport");
// const { authLimiter } = require("./middlewares/rateLimiter");
import routes from "./routes/v1";
import { errorConverter, errorHandler } from "./middlewares/error";
import ApiError from "./utils/ApiError";
import config from "./configs";

const createApp = () => {
  const app = express();

  // if (config.env !== "test") {
  //   app.use(morgan.successHandler);
  //   app.use(morgan.errorHandler);
  // }

  // // set security HTTP headers
  // app.use(helmet());

  // parse json request body
  app.use(express.json());

  // parse urlencoded request body
  app.use(express.urlencoded({ extended: true }));

  // // sanitize request data
  // app.use(xss());
  // app.use(mongoSanitize());

  // // gzip compression
  // app.use(compression());

  // // enable cors
  // app.use(cors());
  // app.options("*", cors());

  // // jwt authentication
  // app.use(passport.initialize());
  // passport.use("jwt", jwtStrategy);

  // // limit repeated failed requests to auth endpoints
  // if (config.env === "production") {
  //   app.use("/v1/auth", authLimiter);
  // }

  // v1 api routes
  app.use("/v1", routes);

  app.use("/health", (req, res) => {
    res.status(httpStatus.OK).json({
      timestamp: new Date(),
      environment: config.env,
      port: config.port,
    });
  });

  // send back a 404 error for any unknown api request
  app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
  });

  // convert error to ApiError, if needed
  app.use(errorConverter);

  // handle error
  app.use(errorHandler);

  return app;
};

export default createApp;
