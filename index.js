const express = require("express");

const {json} = require("express");

const flight = require("./router/flightRoute")

const app = express();

app.use(json());

app.use("/flight", flight);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Booking Flight API Task")
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));