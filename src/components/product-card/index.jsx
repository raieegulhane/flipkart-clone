import "./product-card.css";

export const ProductCard = ({ product }) => {
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
            {
                flipkartAssured &&
                <img
                    className="pc-fa"
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt="flipkart assured"
                />
            }
            <i className="pc-wishlist fa-solid fa-heart"></i>
            <img 
                className="pc-img"
                src={productImg}
                alt={productName}
            />
            <div className="pc-cn fx-c">
                <p className="pc-brand txt-bold">{brand}</p>
                <p className="pc-head">{productName}</p>
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
        </div>
    );
}