import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddItem(){

    let navigate= useNavigate()
    
    const [item, setItem]= useState({
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

    const onSubmit =async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8083/item-api/items", item)
        navigate("/items")
    }
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register Item</h2>

                <form action="" onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" placeholder="Enter item name" name="name"   value={name} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Description" className="form-label">
                            Description
                        </label>
                        <input type="text" className="form-control" placeholder="Enter item description" name="description"   value={description} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Category" className="form-label">
                            Category
                        </label>
                        <input type="text" className="form-control" placeholder="Enter item category" name="category"         value={category} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Price" className="form-label">
                            Price
                        </label>
                        <input type="text" className="form-control" placeholder="Enter item price" name="price"         value={price} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Quantity" className="form-label">
                            Quantity
                        </label>
                        <input type="text" className="form-control" placeholder="Enter item quantity" name="quantity"         value={quantity} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Image path" className="form-label">
                            Image path
                        </label>
                        <input type="text" className="form-control" placeholder="Enter item image path(optional)" name="imageUrl"         value={imageUrl} onChange={(e)=>onInputChange(e)}/>
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