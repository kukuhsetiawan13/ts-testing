import express, { Router } from "express";
import config from "../../configs/index";
import { Route } from "../../interfaces/routes/index";

const router: Router = express.Router();

const defaultRoutes: Route[] = [];

// const devRoutes = [
//   // routes available only in development mode
//   {
//     path: "/docs",
//     route: docsRoute,
//   },
// ];

defaultRoutes.forEach((route: Route) => {
  router.use(route.path, route.route);
});

if (config.env === "development") {
  //   devRoutes.forEach((route) => {
  //     router.use(route.path, route.route);
  //   });
}

export default router;
