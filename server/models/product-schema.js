import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
  },
  { timestamps: true }
);

// this below line is creating product collection in our MongoDb Database
export const Product = mongoose.model('Product', productSchema);