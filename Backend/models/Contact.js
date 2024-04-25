const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure unique emails
    },
    phoneNumber: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now // Default to current date/time
    }
    // Add more fields if needed
});

contactSchema.index({ email: 1 });

// Virtual example
contactSchema.virtual('fullName').get(function () {
    return `${this.name}`;
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
