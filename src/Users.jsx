import React, { Component } from "react"
import axios from "axios"

class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            products: []
        }
    }
    render() {
        return (
            <div>
                <h2>hello from users component</h2>
                <ul>
                    {this.state.products.map((product) => {
                        // return <li key={product}>{product.title}</li>
                        return <li><img src={product.image} alt="" /></li>
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        let URL = "https://jsonplaceholder.typicode.com/users";
        let FAKESTORE_PRODUCTS_URL = "https://fakestoreapi.com/products";
        axios.get(FAKESTORE_PRODUCTS_URL).then((res) => {
            console.log(res.data)
            let newState = { ...this.state }
            newState["products"] = res.data;
            this.setState(newState);
        })

    }
}
export default Users