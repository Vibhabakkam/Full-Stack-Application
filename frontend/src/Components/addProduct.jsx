import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const router = useNavigate();

  //*Product Data
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: 0,
  });

  const handelChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const submitProduct = async (event) => {
    event.preventDefault();

    // console.log(product);
    const response = await axios.post(
      "http://localhost:8000/addProduct",
      {
        productName: product.name,
        Image: product.image,
        Price: product.price,
      }
    );

    if (response.data.status === 200) {
      alert(response.data.message);
      setProduct({ productName: "", image: "", price: 0 });
      router("/");
    } else if (response.data.status === 400) {
      alert(response.data.message);
    }
  };

  return (
    <>
      <div onSubmit={submitProduct}>
        <div>
          <h1>Add Product</h1>
          <form  onSubmit={onsubmit}>
            <div>
              <label>Product Name</label>
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                onChange={handelChange}
              />
            </div>

            <div>
              <label>Image</label>
              <input
                type="text"
                placeholder="Image Url"
                name="image"
                onChange={handelChange}
              />
            </div>

            <div >
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                onChange={handelChange}
              />
            </div>

            <div >
              <input type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
