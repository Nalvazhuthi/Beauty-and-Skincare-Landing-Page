import productImage1 from "../assets/images/newArrivals/product-1.png";
import productImage2 from "../assets/images/newArrivals/product-2.png";
import productImage3 from "../assets/images/newArrivals/product-3.png";
import productImage4 from "../assets/images/newArrivals/product-4.png";
import productImage5 from "../assets/images/newArrivals/product-5.png";
import productImage6 from "../assets/images/newArrivals/product-6.png";
import { ArrowSvg } from "../assets/svg/exportSvg";

const NewArrivals = () => {

  const products = [
    {
      id: "1",
      image: productImage1,
      productName: "Vitamin E Serum",
      oldPrice: 17,
      newPrice: 10,
    },
    {
      id: "2",
      image: productImage2,
      productName: "Vitamin C Serum",
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: "3",
      image: productImage3,
      productName: "Hyaluronic Acid",
      oldPrice: 15,
      newPrice: 9,
    },
    {
      id: "4",
      image: productImage4,
      productName: "Niacinamide Serum",
      oldPrice: 18,
      newPrice: 11,
    },
    {
      id: "5",
      image: productImage5,
      productName: "Retinol Cream",
      oldPrice: 20,
      newPrice: 13,
    },
    {
      id: "6",
      image: productImage6,
      productName: "Glow Boost Serum",
      oldPrice: 16,
      newPrice: 10,
    },
  ];

  const handleQuickAdd = (product: any) => {
  
  };

  return (
    <div className="newArrivals-container section">
      <div className="header">
        <div className="head">NEW ARRIVALS</div>
        <div className="viewAllProducts">
          Shop All
          <div className="icon">
            <ArrowSvg />
          </div>
        </div>
      </div>
      <div className="products-container">
        {products.map((product, index) => (
          <div className="products-wrapper" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt="Product" />
              <div className="buy-btn" onClick={() => handleQuickAdd(product)}>
                QUICK ADD
              </div>
            </div>
            <div className="product-details">
              <div className="product-name">{product.productName}</div>
              <div className="product-price-details">
                <div className="old-price">₹ {product.oldPrice}</div>
                <div className="new-price">₹ {product.newPrice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
