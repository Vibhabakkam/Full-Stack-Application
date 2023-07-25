import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axios.get("http://localhost:8000/all-product");
            setProducts(response.data)
        }
        getData();
    }, [])
    return (
        <div>
              <h1>Display Products</h1>
            <div style={{ display: 'flex', justifyContent: "space-around", flexWrap: 'wrap' }}>
                {products.map((pro) => (
                    <div style={{ width: "30%", height: "6w00px", border: "2px solid black" , marginTop:"50px"  }}>
                        <img style={{ width: "100%", height: "70%" }} src={pro.image} />
                        <h1>Name : {pro.name}</h1>
                        <h2>Price : {pro.price}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllProducts