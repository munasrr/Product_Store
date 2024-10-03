import mongoose from 'mongoose';

const productSchema = mongoose.schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //createdat,updatedAt
  }
);

const product = mongoose.model('Product', productSchema);

export default product;
