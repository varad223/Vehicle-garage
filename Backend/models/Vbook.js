const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    // Personal Details
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensures unique email for each booking
    },
    mobileNumber: {
        type: String,
        required: true
    },

    // Booking Details
    pickupLocation: {
        type: String,
        required: true
    },
    dropLocation: {
        type: String,
        required: true
    },
    pickupDate: {
        type: Date,
        required: true
    },
    pickupTime: {
        type: String,  // You might want to change this to Date if time format is important
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true
    },
    specialRequest: {
        type: String
    },

    // Payment Method
    paymentMethod: {
        type: String,
        required: true,
        enum: ['paypal', 'directCheck', 'bankTransfer'] // Ensures valid payment method
    },
    bookingId: {
        type: String,
        unique: true,
        required: true,
        default: () => Date.now().toString() // Example: Using timestamp as a unique ID
    }
}
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;