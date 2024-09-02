import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewItem() {

    const [item, setItem] = useState({
        name: "",
        description: "",
        category: "",
        price: 0.0,
        quantity: 0,
        imageUrl: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadItem();
    }, []); 

    const loadItem = async () => {
        const result = await axios.get(`http://localhost:8083/item-api/items/${id}`);
        console.log(result.data); 
        setItem(result.data);
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Item Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of item id:
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Item Name:</b> {item.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Description:</b> {item.description}
                                </li>
                                <li className="list-group-item">
                                    <b>Category:</b> {item.category}
                                </li>
                                <li className="list-group-item">
                                    <b>Price:</b> {item.price}
                                </li>
                                <li className="list-group-item">
                                    <b>Quantity:</b> {item.quantity}
                                </li>
                                <li className="list-group-item">
                                    <b>Image URL:</b> {item.imageUrl}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to="/items">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}