import cors from "cors";
const path = require("path");
import "dotenv/config";
import express, { Application, Request, Response } from "express";

const app: Application = express();
/* middleware  */
app.use(cors());
app.use(express.json());

/* here will be all the imports routes */

/* here will be the all the routes */
app.get("/", (req: Request, res: Response) => {
          res.sendFile(path.join(__dirname, "../Views/index.html"));
});

/* Here is the User Routes */

// 404 response
app.all("*", (req: Request, res: Response) => {
  res.status(404).send({
    message: "Not Found",
    status: 404,
  });
});
export { app };
