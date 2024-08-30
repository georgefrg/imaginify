import { model, models, Schema } from "mongoose";

export interface Image extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl?: URL;
  width?: number;
  height?: number;
  config?: Record<string, any>; // Assuming config is a generic object
  transformationUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: {
    _id: string;
    first_name: string;
    last_name: string;
  }; // Reference to User object
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Image = models?.Image || model("Image");

export default Image;
