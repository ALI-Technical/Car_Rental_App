const ProductModel = require("../models/product");
const { validationResult } = require("express-validator");

//// product create////
module.exports.createProduct = async (req, res) => {
    const errors = validationResult(req);
    
    const { title, description, price, status  } = req.body;
         
        if (errors.isEmpty()) {
          await ProductModel.create({ title, description, price, status})

          return res.status(201).json({ message: 'Your product has created successfully!!!' })
            
        } else {
            return res.status(401).json({ errors: errors.array() })
        }

};

//// get all products////

module.exports.getProducts = async (req, res) => {
    const page = req.params.page;
    const perPage = 5;
    const skip = (page - 1) * perPage;
    try {
        const count = await ProductModel.find({}).countDocuments();
        const response = await ProductModel.find({}).skip(skip).limit(perPage).sort({ updatedAt: - 1 })
        return res.status(200).json({ products: response, perPage, count })
    } catch (error) {
        console.log(error.message)
    }
};


///// get single product////

module.exports.getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await ProductModel.findById({ _id: id });
        console.log(response)
        return res.status(200).json({ product: response });
    } catch (error) {
        console.log(error.message);
    }
};


//// update product/////

module.exports.updateProduct = async (req, res) => {
    const errors = validationResult(req);
    const { id } = req.params;
    const { title, description, price, status} = req.body;
    if (errors.isEmpty()) {

        await ProductModel.updateOne({ _id: id }, { $set: { title, description, price, status} })
        return res.status(201).json({ message: 'Your product has updated successfully!!!' })

    } else {
        return res.status(401).json({ errors: errors.array() })
    }
};


//// delete product ////

module.exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await ProductModel.deleteOne({ _id: id });
        return res.status(200).json({ message: 'Product has deleted successfully' })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('server initernal error')
    }
};
