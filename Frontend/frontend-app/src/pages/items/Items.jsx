import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ItemNavbar from '../../layout/items/ItemNavbar';

export default function Items(){
    const [items, setItems]=useState([]);
    const {id}= useParams()

    useEffect(()=>{
        console.log("code with binal");
        loadItems();
    }, [])

    const loadItems= async () => {
        const result =await axios.get("http://localhost:8083/item-api/items");
        console.log(result.data); 
        setItems(result.data);
    }

    const deleteItem= async(id)=>{
        await axios.delete(`http://localhost:8083/item-api/items/${id}`)
        loadItems();
    }

    return(

        <>
        <ItemNavbar/>
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
                <thead>
                <tr>
                    <th scope="col">Item ID</th>
                    <th scope="col">name</th>
                    <th scope="col">category</th>
                    <th scope="col">description</th>
                    <th scope="col">price</th>
                    <th scope="col">quantity</th>
                    <th scope="col">image path</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, index)=>(
                                            <tr key={index}>
                                                <th scope="row">{index+1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.category}</td>
                                                <td>{item.description}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.imageUrl}</td>
                                                <td>
                                                    <Link className='btn btn-primary mx-2' to={`/items/view/${item.id}`}>
                                                        View
                                                    </Link>
                                                    <Link className="btn btn-outline-primary mx-2" to={`/items/edit/${item.id}`}>
                                                        Edit
                                                    </Link>
                                                    <button className='btn btn-danger mx-2' onClick={()=>deleteItem(item.id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                            )) 
                }
                </tbody>
            </table>
            </div>
        </div>
        </>
    );
}