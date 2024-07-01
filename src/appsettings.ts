export const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Citizen Dictionary",
            version: "0.1.0",
            description: "This is an API created by the CGA to query the citizen database. Citizens are required to have level 3 Sensitive data access or higher to be authorized to use this service. Citizens with unauthorized access will be logged and fined appropriately.",
            license: {
                "name": "Apache 2.0",
                "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
            },
            contact: {
                name: "CGA",
                url: "https://cga.gov",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: [
        "./src/routes/*.ts"
    ],
    fialOnErrors: true,
};
