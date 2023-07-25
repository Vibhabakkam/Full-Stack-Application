import Product from "../Model/Product.Schema.js";

export const addProduct = async (req, res) => {
  try {
      const { name, price, image } = req.body;
      console.log(typeof (price), "-check")
      if (!name || !price || !image) return res.send("Fields are unfilled..")
      const newProduct = new Product({ name, price: parseInt(price), image });
      await newProduct.save();
      return res.json({ status: 200, message: "Product added" })
  } catch (error) {
      return res.send(error)
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
