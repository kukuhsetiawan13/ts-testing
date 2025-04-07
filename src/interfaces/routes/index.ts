import { Router } from "express";

export interface Route {
  path: string;
  route: Router;
}

export interface Health {
  timestamp: Date;
  environment: string;
  port: number;
}
