const CheckOutOrder = ({ cart, total }) => {
  return (
    <div className="col-md-6">
      <div className="ps-form__orders">
        <h3>Your order</h3>
        <div className="ps-block--checkout-order">
          <div className="ps-block__content">
            <figure>
              <figcaption>
                <strong>Product</strong>
                <strong>total</strong>
              </figcaption>
            </figure>
            <figure className="ps-block__items">
              {cart.map((item, index) => (
                <div className="ps-block__items" key={`checkoutcart-${index}`}>
                  <a href="#">
                    <strong>
                      {item.name} <span>x {item.quantity} </span>
                    </strong>
                    <small>$ {item.price}</small>
                  </a>
                </div>
              ))}
            </figure>
            <figure>
              <figcaption>
                <strong>Subtotal</strong>
                <small>$ {total}</small>
              </figcaption>
            </figure>
            <figure className="ps-block__shipping">
              <h3>Shipping</h3>
              <p>Enter your address to view shipping options.</p>
            </figure>
            <figure className="ps-block__total">
              <figcaption>
                Total<span>$ {total}</span>
              </figcaption>
            </figure>
            <figure className="ps-block__payment-methods">
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our
                <a href="#"> privacy policy.</a>
              </p>
            </figure>
          </div>
          <div className="ps-block__footer">
            <button
              type="submit"
              id="checkoutorder__footer--submit"
              className="ps-btn ps-btn--fullwidth ps-btn--black"
            >
              Process to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutOrder;
