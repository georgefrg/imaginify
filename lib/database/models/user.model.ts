import { Schema, model, Document, Model } from "mongoose";

// Define the interface for the User document
export interface IUser extends Document {
  username: string;
  email: string;
  clerkId: string;
  photo: string;
  firstName: string;
  lastName: string;
  planId: number;
  creditBalance: number;
  createdAt: Date;
  updatedAt: Date;
}

// Create the User schema
const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  clerkId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String },
  planId: { type: Number, required: true, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

// Add a pre-save hook to update the `updatedAt` field before saving the document
UserSchema.pre<IUser>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

// Create the User model using the schema and interface
const User: Model<IUser> = model<IUser>("User", UserSchema);

export default User;
