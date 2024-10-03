import product from '../models/product.model.js'
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
  try {
    const products = await product.find({});
    res.status(200).json({ success: true, data: products });
  } catch {
    console.log('error in fetching products:', error.message);
    res.status(500).json({ success: false, message: 'server Error' });
  }
};

export const createProduct = async (req, res) => {
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
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const productData = req.body; // This contains the new product data from the request body

  // Check if the provided id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'Invalid product ID' });
  }

  try {
    // Find the product by ID and update it with the new data
    const updatedProduct = await Product.findByIdAndUpdate(id, productData, {
      new: true, // This option ensures the returned document is the updated one
    });

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'product deleted' });
  } catch (error) {
    console.log('error in deleteing product:', error.message);
    res.status(404).json({ success: false, message: 'product not found' });
  }
};