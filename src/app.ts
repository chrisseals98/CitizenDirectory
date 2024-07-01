import express from "express";
import cors from "cors";
import { APP_SETTINGS } from "../env.local";
import { citizenRouter } from "./routes/citizenRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./appsettings";

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

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.listen(port, () => {
    console.log("Express has started up at port", port);
});