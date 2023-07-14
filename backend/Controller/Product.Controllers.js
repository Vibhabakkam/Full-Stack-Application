import Product from "../Model/Product.Schema.js";

 export const addProduct = async (req,res) => {
    try {
        const {name, price, image } = req.body;
        if(!name || !price || !image) return res.send("All filled are Required");
        const newProduct =  new Product ({name,price,image});
        await newProduct.save();
        return res.send("product added")   
    } catch (error) {
        return  res.send(error)
    }
}

 export const allProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        return res.send(products);
        
    } catch (error) {
        return res.send(error)
    }
 }
