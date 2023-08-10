import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct() { 
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    async function createProduct(ev) { 
        ev.preventDefault(); 
        const data = {title,description,price};
        await axios.post('/api/products',data)
     }
    return(
        <Layout>
            <form className="" onSubmit={createProduct}>
                <h1>Product Details</h1>
                <label>Product Name</label>
                <input 
                    type="text" 
                    placeholder="Product name"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <label>Description</label>
                <textarea 
                    className="pb-0 mb-0"
                    placeholder="Description" 
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}    
                />
                <label>Price</label>
                <input 
                    type="number" 
                    placeholder="Price"
                    value={price}
                    onChange={ev => setPrice(ev.target.value)}    
                />
                <button 
                    type="submit" 
                    className="btn-primary mt-2">Save
                </button>
            </form>
        </Layout>
    )
 }