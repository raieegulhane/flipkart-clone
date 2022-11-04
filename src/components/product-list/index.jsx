import "./product-list.css";
import { products } from "../../backend/db";
import { ProductCard } from "..";
import { useFilter } from "../../context/filter-context";
import { getProductsFunction } from "../../utils";

export const ProductList = () => {
    const { filterState, filterDispatch } = useFilter();

    const productList = getProductsFunction(products, filterState);

    return(
        <div className="pl-wr fx-c">
            <header className="pl-header fx-c">
                <h2 className="pl-head">Clothing And Accessories</h2>
                <div className="pl-sort fx-r">
                    <h4 className="sort-head">Sort By </h4>
                    <button 
                        className="sort-criteria"
                        onClick={() => filterDispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })}
                    >
                        Price -- Low to High
                    </button>
                    <button 
                        className="sort-criteria"
                        onClick={() => filterDispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })}
                    >
                        Price -- High to Low
                    </button>
                </div>
            </header>
            <div className="pl-cn fx-r">
            {
                productList.map((item) => {
                    return(
                        <ProductCard product={item} />

                    );
                })
            }
            </div>
        </div>
    );
}

