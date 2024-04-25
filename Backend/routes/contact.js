const express = require('express');
const Contact = require('../models/Contact'); // Assuming Contact model from your schema
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Creating a Contact
router.post('/contacts', [
    // Validation middleware using express-validator
    body('name').notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
    body('phoneNumber').notEmpty().trim(),
    body('subject').notEmpty().trim(),
    body('message').notEmpty().trim()
],
    async (req, res) => {
        console.log('Contact Form Submission');
        try {
            const { name, email, phoneNumber, subject, message } = req.body;
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                // Return validation errors in the response
                return res.status(400).json({ errors: errors.array() });
            }

            // Creating a new Contact entry
            const newContact = new Contact({
                name,
                email,
                phoneNumber,
                subject,
                message
            });

            await newContact.save(); // Save the new contact to the database

            console.log(newContact);
            return res.status(200).json({ message: 'Message sent successfully' });
        } catch (error) {
            console.error('Error sending message:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

module.exports = router;
