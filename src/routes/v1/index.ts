import express from "express";
import config from "../../configs/index";

const router = express.Router();

const defaultRoutes: any = [];

// const devRoutes = [
//   // routes available only in development mode
//   {
//     path: "/docs",
//     route: docsRoute,
//   },
// ];

defaultRoutes.forEach((route: any) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  //   devRoutes.forEach((route) => {
  //     router.use(route.path, route.route);
  //   });
}

export default router;
