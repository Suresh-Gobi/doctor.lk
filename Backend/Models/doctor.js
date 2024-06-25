const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  availability: [{
    day: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true }
  }],
  clinic: { type: mongoose.Schema.Types.ObjectId, ref: 'Clinic' }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
