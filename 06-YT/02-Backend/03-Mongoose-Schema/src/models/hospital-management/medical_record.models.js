import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
    visitDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    symptoms: {
        type: [String],
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
    },
    prescriptions: [
        {
            medicine: String,
            dosage: String,
            duration: String
        }
    ],
    labTests: {
        type: [String],
        required: true,
    },
    notes: {
        type: String,
    },
    followUpDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["Active", "Recovered", "Under Treatment", "Critical", "Discharged"],
        default: "Active"
    }
}, { timestamps: true });

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);