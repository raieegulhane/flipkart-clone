import { v4 as uuid } from "uuid";
import "./product-card.css";

export const ProductCard = () => {
    const product = {
        _id: uuid(),
        id: 1,
        productName: "Flared Women Blue Jeans",
        brand: "Lewis",
        originalPrice: 1999,
        discountedPrice: 499,
        discount: 75,
        category: "women",
        stars: 4,
        ratings: 4983,
        reviews: 571,
        sizes: ["S", "L", "XL"],
        inStock: true,
        flipkartAssured: true,
        productImg: "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/w/k/3/26-kttladiesjeans686-kotty-original-imafxf8cxvausb5z-bb.jpeg?q=70",
    }

    const {
        productName,
        brand,
        originalPrice,
        discountedPrice,
        discount,
        category,
        stars,
        ratings,
        reviews,
        sizes,
        inStock,
        flipkartAssured,
        productImg
    } = product;

    return(
        <div className="pc-wr fx-c">
            <i className="pc-wishlist fa-solid fa-heart"></i>
            <img 
                className="pc-img"
                src={productImg}
                alt={productName}
            />
            <p className="pc-brand txt-bold">{brand}</p>
            <p className="pc-head">{productName}</p>
            {
                flipkartAssured &&
                <img
                    className="pc-fa"
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt="flipkart assured"
                />
            }
            <p className="pc-price fx-r">
                <span className="txt-bold disc-price">₹{discountedPrice} </span> 
                <span className="txt-14 ori-price">₹{originalPrice} </span>
                <span className="txt-14 disc txt-bold">{discount}% off</span>
            </p>
            <p className="txt-14">
                <span className="pc-size">Size:  </span>
                {
                    sizes.map((item, index) => {
                        return(
                            <span>{item} {index < sizes.length - 1 && ", "}</span>
                        )
                    })
                }
            </p>
        </div>
    );
}