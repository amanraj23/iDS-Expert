import { Schema, model, models } from "mongoose";

const faqSchema = new Schema(
  {
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true, trim: true },
    category: { type: String, trim: true, index: true },
    published: { type: Boolean, default: true, index: true },
    order: { type: Number, default: 0, index: true }
  },
  { timestamps: true }
);

export const FAQ = models.FAQ || model("FAQ", faqSchema);
