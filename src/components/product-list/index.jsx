import "./product-list.css";
import { products } from "../../backend/db";
import { ProductCard } from "..";

export const ProductList = () => {
    return(
        <div className="pl-wr fx-r">
        {
            products.map((item) => {
                return(
                    <ProductCard product={item} />

                );
            })
        }
        </div>
    );
}

