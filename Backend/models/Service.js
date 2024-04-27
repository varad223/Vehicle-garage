const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, enum: ['Diagnostic Test', 'Engine Servicing', 'Tires Replacement', 'Oil Changing'], required: true },
    specialRequest: { type: String },
    bookingId: { type: String, unique: true, required: true, default: () => Date.now().toString() }
});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;