/**
 * @swagger
 * components:
 *   schemas:
 *     Citizen:
 *       type: object
 *       required:
 *         - id
 *         - ssn
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the citizen
 *         ssn:
 *           type: string
 *           description: The Social Security Number of the citizen
 *         first_name:
 *           type: string
 *           description: The citizen's firstname
 *         last_name:
 *           type: string
 *           description: The citizen's lastname
 *         email:
 *           type: string
 *           format: email
 *           description: The citizen's email address
 *         birth_date:
 *           type: string
 *           format: date
 *           description: The citizen's birth date in EPOC
 *         gender:
 *           type: string
 *           description: The citizen's birth gender
 *         race:
 *           type: string
 *           description: The citizen's race
 *         language:
 *           type: string
 *           description: The citizen's known languages
 *         job_title:
 *           type: string
 *           description: The citizen's job title
 *         phone_number:
 *           type: string
 *           format: phone
 *           description: The citizen's phone number
 *         street_address:
 *           type: string
 *           description: The citizen's street address
 *         city:
 *           type: string
 *           description: The citizen's city
 *         state:
 *           type: string
 *           description: The citizen's state
 *         favorite_color:
 *           type: string
 *           description: The citizen's favorite color
 *         credit_card_number:
 *           type: string
 *           description: The citizen's credit card number
 *         credit_card_type:
 *           type: string
 *           description: The citizen's credit card type
 *         bank_balance:
 *           type: string
 *           description: The citizen's bank balance
 *         social_score:
 *           type: integer
 *           description: The citizen's assigned social score
 *       example:
 *         id: 1
 *         ssn: "123-45-6789"
 *         first_name: "John"
 *         last_name: "Doe"
 *         email: "john.doe@example.com"
 *         birth_date: "1688178792"
 *         gender: "Male"
 *         race: "Caucasian"
 *         language: "English"
 *         job_title: "Software Engineer"
 *         phone_number: "555-555-5555"
 *         street_address: "123 Main St"
 *         city: "Anytown"
 *         state: "CA"
 *         favorite_color: "Blue"
 *         credit_card_number: "5108752878071014"
 *         credit_card_type: "Visa"
 *         bank_balance: "$10,000"
 *         social_score: 86
 */

/**
 * @swagger
 * tags:
 *   name: Citizens
 *   description: The citizens managing API
 * /citizen:
 *   get:
 *     summary: Lists all citizens from the database or just lists one if a query is provided
 *     tags: [Citizens]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: false
 *         description: The id of the citizen to retrieve
 *     responses:
 *       200:
 *         description: The list of the citizens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Citizen'
 *   post:
 *     summary: Create a new citizen - NOT CREATED YET
 *     tags: [Citizens]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Citizen'
 *     responses:
 *       200:
 *         description: The created citizen.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Citizen'
 *       500:
 *         description: Some server error
 */

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
