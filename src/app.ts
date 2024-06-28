import express from "express";
import { APP_SETTINGS } from "../env.local";
import { citizenRouter } from "./routes/citizenRoutes";

const app = express();
const port = APP_SETTINGS.PORT_NUMBER;

app.use("/citizen", citizenRouter)

app.get("/status", (request, response) => {
    const status = {
       status: "Running"
    };
    response.send(status);
});

async function startServer() {
    try {
        app.listen(port, () => {
            return console.log("Express has started up at port", port);
        });
    } catch (error) {
        console.error("FATAL ERROR", error);
    }
}

startServer();