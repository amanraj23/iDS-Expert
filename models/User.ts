import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true, index: true },
    phone: { type: String, required: true, trim: true, index: true },
    city: { type: String, trim: true },
    passwordHash: { type: String, select: false },
    authProvider: { type: String, default: "credentials" },
    role: { type: String, enum: ["user", "admin"], default: "user", index: true },
    disabled: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const User = models.User || model("User", userSchema);
