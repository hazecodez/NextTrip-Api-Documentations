const express = require("express");
const app = express();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NextTrip API",
      version: "1.0.0",
      description: "API Documentations",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use("/", swaggerUI.serve, swaggerUI.setup(specs));

// Use Traveler API routes
const travelerRoute = require("./routes/travelerRoute");
app.use("/traveler-api", travelerRoute);

// Use Admin API routes
const adminRoute = require("./routes/adminRoute");
app.use("/admin", adminRoute);

// Use Host API routes
const hostRoute = require("./routes/hostRoute");
app.use("/host", hostRoute);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
