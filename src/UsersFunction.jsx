import { useEffect } from "react"
import { useState } from "react"
import React from "react"
import axios from "axios"

export const UserFunct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        let FAKESTORE_PRODUCTS_URL = "https://fakestoreapi.com/products";
        axios.get(FAKESTORE_PRODUCTS_URL).then(({ data }) => {
            console.log(data)
            setProducts(data)
        })

    }, [])

    const handleDelete = (product) => {
        // console.log(product)
        let balanceProducts = products.filter((prd) => prd.id  !== product.id);
        setProducts(balanceProducts);
    }

    return (
        <div>
            <h2>Hello from userFunction component</h2>
            <ul>
                {products.map((product) => {
                    return <li>
                        <img src={product.image} alt="" />
                        <button type="button" onClick={() => { handleDelete(product) }}>Delete Product</button>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default UserFunct