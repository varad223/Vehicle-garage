const express = require('express');
const Booking = require('../models/Vbook'); // Assuming Booking model from your schema
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Creating a Booking
router.post('/vbook', [
    body('firstName').exists(),
    body('lastName').exists(),
    body('email', 'Enter valid Email').isEmail(),
    body('mobileNumber', 'Mobile number is required').exists(),
    // Booking Details validations
    body('pickupLocation').exists(),
    body('dropLocation').exists(),
    body('pickupDate').exists(),
    body('pickupTime').exists(),
    body('adults').exists(),
    body('children').exists(),
    // Payment Method validations
    body('paymentMethod').exists(),
],
    async (req, res) => {
        console.log('Booking Request');
        try {
            const {
                firstName,
                lastName,
                email,
                mobileNumber,
                // Booking Details
                pickupLocation,
                dropLocation,
                pickupDate,
                pickupTime,
                adults,
                children,
                specialRequest,
                // Payment Method
                paymentMethod
            } = req.body;
            const bookingId = Date.now().toString(); // Example: Using timestamp as a unique ID
            const errors = validationResult(req);

            console.log(errors);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            // Checking if booking already exists with same email (optional)
            // let existingBooking = await Booking.findOne({ email });
            // if (existingBooking) {
            //   return res.status(400).json({ error: 'Booking already exists with this email' });
            // }

            // Creating a new Booking
            const newBooking = await Booking.create({
                bookingId,
                firstName,
                lastName,
                email,
                mobileNumber,
                pickupLocation,
                dropLocation,
                pickupDate,
                pickupTime,
                adults,
                children,
                specialRequest,
                paymentMethod
            });

            console.log(newBooking);
            return res.status(200).json({ message: 'Booking created successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

module.exports = router;
