import Product from "@/component/Product";
import { cache } from "react";

const getProducts=async()=>{
    const res =await fetch('http://127.0.0.1:5000/products',{cache: 'no-store'})
    return res.json()
}

const Productspage = async() => {
    const products = await getProducts()
    return (
        <div>
            <h2 className="text-3xl font-bold">Products:{products.length}</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    products.map(product=><Product key={product.id} product={product}>
                        
                    </Product>)
                }
            </div>
        </div>
    );
};

export default Productspage;