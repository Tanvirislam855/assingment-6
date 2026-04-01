import { use } from "react";
import Product from "./product";

const Products = ({promiseData,cartData, setCartData}) => {
    const data =use(promiseData)
    console.log(data)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 container lg:max-w-7xl mx-auto ">
            {
                data.slice(0,6).map(item=><Product item={item} cartData={cartData} setCartData={setCartData} />)
            }
        </div>
    );
};

export default Products;