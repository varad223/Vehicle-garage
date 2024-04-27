const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SIGNATURE = 'JDFUASHUYRHEGLJKADRGNAJKRFGNJKAESGUKLAHBLSDUFHLAERFEF';


// Create a new Contact
router.post('/contact', [
    body('name').exists(),
    body('email', 'Enter a valid email').isEmail(),
    body('phone').exists(),
    body('subj').exists(),
    body('message').exists()
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Extract form data from request body
    const { name, email, phone, subj, message } = req.body;

    try {
        // Create a new Contact document
        const newContact = new Contact({
            name,
            email,
            phone,
            subj,
            message
        });

        // Save the new contact to the database
        await newContact.save();

        return res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Error saving contact:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
