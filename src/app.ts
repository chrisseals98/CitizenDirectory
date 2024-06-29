import express from "express";
import cors from "cors";
import { APP_SETTINGS } from "../env.local";
import { citizenRouter } from "./routes/citizenRoutes";

const app = express();
const port = APP_SETTINGS.PORT_NUMBER;

app.use(cors());
app.use("/citizen", citizenRouter);

app.get("/status", async (request, response) => {
    const status = {
       status: "Running"
    };
    await setTimeout(() => {
        response.send(status);
    }, 1000);
    
});

app.listen(port, () => {
    console.log("Express has started up at port", port);
});