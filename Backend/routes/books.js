const express = require('express');
const Bookings = require('../models/Service');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Creating a Booking
router.post('/service', [
    body('name').exists(),
    body('email').isEmail(),
    body('service').isIn(['Diagnostic Test', 'Engine Servicing', 'Tires Replacement', 'Oil Changing']),
    body('specialRequest').optional(),
],
    async (req, res) => {
        try {
            const { name, email, service, specialRequest } = req.body;
            const bookingId = Date.now().toString();

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const newBooking = await Bookings.create({
                bookingId,
                name,
                email,
                service,
                specialRequest
            });

            console.log(newBooking);
            return res.status(200).json({ message: 'Booking created successfully', token: newBooking.bookingId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

module.exports = router;