const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }]
});

const Clinic = mongoose.model('Clinic', clinicSchema);

module.exports = Clinic;
