import { Router } from "express";
import { Citizen } from "../models/citizen";

export const citizenRouter = Router();

citizenRouter.get("/", async (request, response) => {
    try {
        const citizenId = Number(request.query.id);
        if(citizenId) {
            const citizens = await Citizen.findByPk(citizenId);
            await setTimeout(() => {
                response.status(200).json(citizens); 
            }, 3000);
        }
        else {
            const citizens = await Citizen.findAll();
            await setTimeout(() => {
                response.status(200).json(citizens); 
            }, 3000);
        }
    }
    catch (error) {
        console.log("ERROR AT GET", error);
        response.status(500).json({error: "Internal Server Error"});
    }
});
