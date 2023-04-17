const Product = require('../models/product');


module.exports.createProduct =async function(req,res){
    try {
        console.log(req.body);
         let product = await Product.create({name:req.body.name,quantity:req.body.quantity});
        console.log("new product created");
        res.status(201).json({ data: { product } });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }

}

module.exports.getProducts=async function(req,res){
    let products = await Product.find({});
    res.status(200).json({
        data:{products}
    })
}

module.exports.deleteProduct=async function(req,res){
    try{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

}


module.exports.updateProduct=async function(req,res){
    try {
        const { id } = req.params;
        const { number } = req.query;
        const product = await Product.findById(id);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        const newQuantity = product.quantity + parseInt(number);
        product.quantity = newQuantity;
        await product.save();
        res.json({
            data:product, 
            message: 'Product quantity updated successfully'
         });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    
}