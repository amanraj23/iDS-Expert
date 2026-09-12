import { Schema, model, models } from "mongoose";

const governmentJobSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
    organization: { type: String, required: true, trim: true },
    department: { type: String, trim: true, index: true },
    category: { type: String, trim: true, index: true },
    location: { type: String, trim: true, index: true },
    vacancies: { type: String, trim: true },
    qualification: { type: String, trim: true },
    ageLimit: { type: String, trim: true },
    applicationFee: { type: String, trim: true },
    salary: { type: String, trim: true },
    selectionProcess: { type: String, trim: true },
    startDate: { type: Date },
    lastDate: { type: Date, index: true },
    status: { type: String, enum: ["NEW", "OPEN", "CLOSING SOON", "CLOSED"], default: "OPEN", index: true },
    officialNotificationUrl: { type: String, trim: true },
    officialApplicationUrl: { type: String, trim: true },
    requiredDocuments: [{ type: String, trim: true }],
    description: { type: String, trim: true },
    published: { type: Boolean, default: true, index: true }
  },
  { timestamps: true }
);

governmentJobSchema.index({ title: "text", department: "text", category: "text", qualification: "text", location: "text" });

export const GovernmentJob = models.GovernmentJob || model("GovernmentJob", governmentJobSchema);
