import { Schema, model, models } from "mongoose";

const serviceSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true, trim: true },
    icon: { type: String, trim: true },
    published: { type: Boolean, default: true, index: true },
    order: { type: Number, default: 0, index: true }
  },
  { timestamps: true }
);

export const Service = models.Service || model("Service", serviceSchema);
