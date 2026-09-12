import { Schema, model, models } from "mongoose";

const applicationRequestSchema = new Schema(
  {
    referenceNumber: { type: String, required: true, unique: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    applicantName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true, index: true },
    email: { type: String, trim: true, lowercase: true },
    city: { type: String, trim: true },
    applicationName: { type: String, required: true, trim: true, index: true },
    jobId: { type: Schema.Types.ObjectId, ref: "GovernmentJob" },
    qualification: { type: String, trim: true },
    dateOfBirth: { type: String },
    preferredContactMethod: { type: String, enum: ["WhatsApp", "Phone", "Email"], default: "WhatsApp" },
    message: { type: String, trim: true },
    status: {
      type: String,
      enum: ["REQUEST RECEIVED", "UNDER REVIEW", "DOCUMENTS REQUIRED", "FORM IN PROGRESS", "FORM COMPLETED", "SUBMITTED", "COMPLETED", "CANCELLED"],
      default: "REQUEST RECEIVED",
      index: true
    },
    adminNotes: [{ note: String, createdAt: { type: Date, default: Date.now } }]
  },
  { timestamps: true }
);

export const ApplicationRequest = models.ApplicationRequest || model("ApplicationRequest", applicationRequestSchema);
