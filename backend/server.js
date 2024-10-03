import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js'; // Assuming Product model is imported correctly

dotenv.config();

const app = express();

app.use(express.json());

app.post('/api/products', async (req, res) => {
  const { name, price, image } = req.body; // Destructuring the request body

  // Validation for required fields
  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all fields' });
  }

  try {
    const newProduct = new Product({ name, price, image }); // Correct way to instantiate a new product document
    await newProduct.save(); // Save the product to the database
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error('Error in creating product:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'product deleted' });
  } catch (error) {
    res.status(404).json({ success :false, message: "product not found"});
  }
});

// Start the server and connect to the database
app.listen(5000, () => {
  connectDB();
  console.log('Server started at http://localhost:5000');
});
