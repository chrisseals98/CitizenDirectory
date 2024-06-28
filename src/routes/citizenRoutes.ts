import { Router } from "express";
import { Citizen } from "../models/citizen";

export const citizenRouter = Router();

citizenRouter.get("/", async (req, res) => {
    try {
        const citizens = await Citizen.findAll();
        res.status(200).json(citizens);
    }
    catch (error) {
        console.log("ERROR AT GET", error);
        res.status(500).json({error: "Internal Server Error"});
    }
});
