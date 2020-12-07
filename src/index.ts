import express, { Request, Response } from "express";
import { sayHello } from "./handlers/smoke-handlers";

const app = express();

app.get('/hello', sayHello);

app.listen(7000,()=>{console.log("started server")});