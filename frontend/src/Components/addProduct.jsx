import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
    const [userProduct, setUserProduct] = useState({ name: "", price: "", image: "" });
    const router = useNavigate();

    const handleChange = (event) => {
        setUserProduct({ ...userProduct, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (userProduct.name && userProduct.price && userProduct.image) {
            const response = await axios.post("http://localhost:8000/addProduct", {
                name: userProduct.name,
                email: userProduct.price,
                password: userProduct.image
            })
            console.log(response, "- response")
            if (response.data.status == 200) {
                alert(response.data.message)
            } else {
                alert("Error..")
            }
        } else {
            alert("Please fill all the fields.")
        }

    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input onChange={handleChange} type='text' name="name" value={userProduct.name} /><br />
                <label>Price</label><br />
                <input onChange={handleChange} type='number' name="price" value={userProduct.price} /><br />
                <label>Image</label><br />
                <input onChange={handleChange} type='text' name="image" value={userProduct.image} /><br />
                <input type='submit' value='AddProduct' /><br />
            </form>
        </div>
    )
}

export default AddProduct