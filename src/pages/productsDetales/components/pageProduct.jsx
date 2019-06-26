import React from "react";
import PropTypes from "prop-types";

const PageProduct = props => {
  const { product } = props;
  return (
    <div className="product-detales-container">
      <div className="container-product">
        <div className="image-product-container">
          <img alt="product" src={product.imgSrc} />
        </div>
      </div>
      <div className="right-container-product">
        <div className="button-admin-product">
          <button type="button">Удалить</button>
          <button type="button">Редактировать</button>
        </div>
        <div className="headline-conatiner">{product.title}</div>
        <div className="prices-product">
          <div className="prices-product-container">{product.price} ₸</div>
        </div>
        <div className="bottom-container-product">
          <button type="button">В корзину</button>
          <button type="button">Купить в кредит</button>
        </div>
        <div className="text-area-container">{product.textarea}</div>
      </div>
    </div>
  );
};

PageProduct.propTypes = {
  product: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    textarea: PropTypes.string.isRequired
  }).isRequired
};

export default PageProduct;