const express = require('express');
const Bookings = require('../models/Sbook'); // Assuming Booking model from your schema
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Creating a Booking
router.post('/sbook', [
    body('name').exists(),
    body('email', 'Enter a valid Email').isEmail(),
    body('service').isIn(['Diagnostic Test', 'Engine Servicing', 'Tires Replacement', 'Oil Changing']), // Validate service against enum values
    body('specialRequest').optional(), // Special request is optional
],
    async (req, res) => {
        console.log('Booking Request');
        try {
            const { name, email, service, specialRequest } = req.body;
            const bookingId = Date.now().toString(); // Example: Using timestamp as a unique ID
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            // Creating a new Booking
            const newBooking = await Bookings.create({
                bookingId,
                name,
                email,
                service,
                specialRequest
            });

            console.log(newBooking);
            return res.status(200).json({ message: 'Booking created successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

module.exports = router;
