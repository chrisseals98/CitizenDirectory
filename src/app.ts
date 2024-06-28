import express from "express";
import { APP_SETTINGS } from "../application.properties";

const app = express();
const port = APP_SETTINGS.PORT_NUMBER;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    return console.log("Express has started up at port", port);
});
