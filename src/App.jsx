import { useState } from "react"
import Header from './components/Header'
import Products from './components/Products'
import AddProduct from "./components/AddProduct";
import './App.css'

function App() {
    const [products, setProducts] = useState([
        {
            "id": 1,
            "name": "Milk",
            "category": "diary",
            "quantity": 1
        },
        {
            "id": 2,
            "name": "Bread",
            "category": "bread",
            "quantity": 1
        },
        {
            "id": 3,
            "name": "Apples",
            "category": "fruit&vagetables",
            "quantity": 2
        }
    ])

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id))
    }

    const addProduct = (product) => {
        const id = products.length + 1
        const newProduct = { id, ...product }
        setProducts([...products, newProduct])
    }

    return (
        <div className="App">
            <Header title="Shopping list" />
            <AddProduct onAdd={addProduct} />
            {products.length > 0 ?
                <Products products={products} onDelete={deleteProduct} />
                : <p>No products :/</p>}
        </div>
    )
}
export default App
