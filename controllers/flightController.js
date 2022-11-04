const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");

//to add/book new flights
exports.createFlight = async (req, res) => {
    try {
        // const flight = await req.body;
        const {title, time, price, date } = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date
        }
        // flight.id = uuid;

        Flights.push(newFlight);
        res.status(201).json({
            message: "Your Flight has successfully been booked.",
            newFlight,
        })
    }
    catch (err) {
        res.status(500).json({message: err.mesage});
    }
}

//to get all flights
exports.getFlights = async (req, res) => {
    try {
        const flights = Flights;
        res.status(200).json({
            message: "Available flights.",
            flights,
        })
    } catch (err) {
        res.status(500).json ({message: err});
    }
}

//to get single flight
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200).json({
            message: "Flight is available",
            flight,
        })
    }
    catch (err) {
        res.status(500).json ({message: err});
    }
}

//to update/edit flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const {title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json ({
            message: "Flight successfully updated.",
            flight,
        })
    }
    catch (err) {
        res.status(500).json ({message:err})
    }
}

//to delete a created flight
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message:"Flight successfully deleted.",
            flight,
        })
    }
    catch (err) {
        res.status(500).json({message: err})
    }
}