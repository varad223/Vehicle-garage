const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    // Personal Details
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // Service Details
    service: {
        type: String,
        enum: ['Diagnostic Test', 'Engine Servicing', 'Tires Replacement', 'Oil Changing'], // Adjust enum values as needed
        required: true
    },
    specialRequest: {
        type: String
    },
    // Booking Details
    bookingId: {
        type: String,
        unique: true,
        required: true,
        default: () => Date.now().toString() // Example: Using timestamp as a unique ID
    }
});

const Bookings = mongoose.model('Bookings', bookingSchema);

module.exports = Bookings;
