import asyncHandler from '../middleware/asynchandler.js';
import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const getallProducts = await Product.find({});
     res.json(getallProducts);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    const getproduct= await Product.findById(req.params.id);
    if(getproduct){
       return  res.json(getproduct);
    }
    res.status(404);
    throw new Error('Product not found');
  });

  export {getProducts,getProductById};