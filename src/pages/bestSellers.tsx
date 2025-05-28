import bestSeller1 from "../assets/images/bestSeller/bestSeller-1.png";
import bestSeller2 from "../assets/images/bestSeller/bestSeller-2.png";
import bestSeller3 from "../assets/images/bestSeller/bestSeller-3.png";
import { NextSvg, PreviousSvg } from "../assets/svg/exportSvg";
import { useState } from "react";

const BestSellers = () => {
  const bestSellers = [
    {
      productImage: bestSeller1,
      productName: "Vitamin abc serum 1",
      price: 23,
    },
    {
      productImage: bestSeller2,
      productName: "Vitamin abc serum 2",
      price: 23,
    },
    {
      productImage: bestSeller3,
      productName: "Vitamin abc serum 3",
      price: 23,
    },
    {
      productImage: bestSeller1,
      productName: "Vitamin abc serum 4",
      price: 23,
    },
    {
      productImage: bestSeller2,
      productName: "Vitamin abc serum 5",
      price: 23,
    },
    {
      productImage: bestSeller3,
      productName: "Vitamin abc serum 6",
      price: 23,
    },
    {
      productImage: bestSeller1,
      productName: "Vitamin abc serum 7",
      price: 23,
    },
    {
      productImage: bestSeller2,
      productName: "Vitamin abc serum 8",
      price: 23,
    },
    {
      productImage: bestSeller3,
      productName: "Vitamin abc serum 9",
      price: 23,
    },
  ];

  // State to track current page
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 3;

  // Calculate which products to display based on current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = bestSellers.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Scroll to the product section
  const scrollToProductSection = () => {
    const productSection = document.getElementById("productSection");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle the previous page click
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToProductSection();
    }
  };

  // Function to handle the next page click
  const handleNextPage = () => {
    if (currentPage < Math.ceil(bestSellers.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
      scrollToProductSection();
    }
  };

  return (
    <div className="bestSellers-container section">
      <div className="header">Bestsellers</div>
      <div className="shop">SHOP NOW</div>

      {/* Product Section */}
      <div className="bestSeller-product" id="productSection">
        {currentProducts.map((product, index) => (
          <div className="bestseller-product-wrapper" key={index}>
            <img src={product.productImage} alt="No Product" />
            <div className="productName">{product.productName}</div>
            <div className="addToCard">
              <div className="addToCard-section">add to cart</div>
              <div className="price">₹ {product.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <div className="icon" onClick={handlePreviousPage}>
          <PreviousSvg />
        </div>
        <div className="icon" onClick={handleNextPage}>
          <NextSvg />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
