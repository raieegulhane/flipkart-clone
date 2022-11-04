import { 
    sortByfunction,
} from ".";

export const getProductsFunction = (allProducts, filterState) => {
    const {  
        sortBy 
    } = filterState;

    const sortedProducts = sortByfunction(allProducts, sortBy);
    return sortedProducts;
}