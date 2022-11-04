const router = require('express').Router();

const controllers = require("../controllers/flightController")

router
    .post("/", controllers.createFlight)
    .get("/", controllers.getFlights)
    .get("/:id", controllers.getFlight)
    .put("/:id", controllers.updateFlight)
    .delete("/:id", controllers.deleteFlight);

module.exports = router;