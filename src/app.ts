import express from "express";
import { APP_SETTINGS } from "../env.local";

const app = express();
const port = APP_SETTINGS.PORT_NUMBER;

app.get("/status", (request, response) => {
    const status = {
       status: "Running"
    };
    response.send(status);
});

app.listen(port, () => {
    return console.log("Express has started up at port", port);
});
