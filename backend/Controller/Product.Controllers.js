import Product from "../Model/Product.Schema.js";

//  export const addProduct = async (req,res) => {
//     try {
//         const {name, price, image } = req.body;
//         if(!name || !price || !image) return res.send("All filled are Required");
//         const newProduct =  new Product ({name, price, image});
//         await newProduct.save();
//         return res.send("product added")   
//     } catch (error) {
//         return  res.send(error)
//     }
// }

// import Products from "../Models/product.model.js";

export const addProduct = async (req, res) => {
  try {
    const { name, image, price } = req.body;

    const newProduct = new Product({
      name,
      image,
      price,
    });

    await newProduct.save();

    return res.json({ status: 200, message: "Product is added" });
  } catch (err) {
    return res.json({ status: 400, message: `${err}` });
  }
};

 export const allProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        return res.send(products);
        
    } catch (error) {
        return res.send(error)
    }
 }
