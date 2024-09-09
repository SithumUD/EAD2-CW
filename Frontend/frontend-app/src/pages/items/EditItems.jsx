import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditItem(){

    let navigate= useNavigate()


    const {id}= useParams()
    
    const [item, setItem] = useState({
        name: "",
        description: "",
        category: "",
        price: 0.0,
        quantity: 0,
        imageUrl: ""
    });

    const{name, description, category, price, quantity, imageUrl}=item

    const onInputChange=(e)=>{
        setItem({...item, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        loadItem();
    }, []); 

    const onSubmit =async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8083/item-api/items`, item)
        navigate("/items")
    }

    //to load the data into textboxes for the specific item for update
    const handleNull = (value, defaultValue) => value !== null ? value : defaultValue;

    const loadItem = async () => {
      try {
        const result = await axios.get(`http://localhost:8083/item-api/items/${id}`);
        const data = result.data;
    
        setItem({
          name: handleNull(data.name, ""),
          description: handleNull(data.description, ""),
          category: handleNull(data.category, ""),
          price: handleNull(data.price, 0.0),
          quantity: handleNull(data.quantity, 0),
          imageUrl: handleNull(data.imageUrl, "")
        });
      } catch (error) {
        console.error("Error loading item", error);
      }
    };
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit Item</h2>

                <form action="" onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" placeholder="Enter your name" name="name"   value={name} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Description" className="form-label">
                            Description
                        </label>
                        <input type="text" className="form-control" placeholder="Enter your description" name="description"   value={description} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Category" className="form-label">
                            Category
                        </label>
                        <input type="text" className="form-control" placeholder="Enter your category" name="category"         value={category} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Price" className="form-label">
                            Price
                        </label>
                        <input type="text" className="form-control" placeholder="Enter your price" name="price"         value={price} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Quantity" className="form-label">
                            Quantity
                        </label>
                        <input type="text" className="form-control" placeholder="Enter your quantity" name="quantity"         value={quantity} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ImageUrl" className="form-label">
                            ImageUrl
                        </label>
                        <input type="text" className="form-control" placeholder="Enter your image path" name="imageUrl"         value={imageUrl} onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>
                    <Link className="btn btn-outline-danger mx-2" to="/items">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    </div>
    )
}