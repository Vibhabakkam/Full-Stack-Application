import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const [userProduct, setUserProduct] = useState({ name: "", image: "", price: "" })
  const router = useNavigate()
  const handleChange = (event) => {
    setUserProduct({ ...userProduct, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userProduct.name && userProduct.image && userProduct.price) {
      const response = await axios.post("http://localhost:8000/add-product", {
        name: userProduct.name,
        image: userProduct.image,
        price: userProduct.price
      });
      if (response.data.status == 200) {
        setUserProduct({ name: "", image: "", price: "" })
        router('/allproduct');
        alert("Product added successfully.")
      } else {
        alert("Error please try again..")
      }
    } else {
      alert("Please fill the all fields..")
    }
  }

  return (
    <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <div style={{border:"2px solid black" , height:"400px" , width:"400px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , marginTop:"100px"}}>
      <h1>Add Products </h1> 
      <form onSubmit={handleSubmit}>
        <label>Name </label><br />
        <input onChange={handleChange} type='text' name='name' /><br />
        <label>Price </label><br />
        <input onChange={handleChange} type='number' name='price' /><br />
        <label>Image </label><br />
        <input onChange={handleChange} type='text' name='image' /><br />
        <input type='submit' value="Add Product" /><br />
      </form>
      </div>
    </div>
  )
}

export default AddProduct