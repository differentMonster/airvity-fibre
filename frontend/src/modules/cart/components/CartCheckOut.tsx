const CartCheckOut = ({ total }) => {
  return (
    <div className="ps-block__top">
      <h4>
        Subtotal <span>$ {total}</span>
      </h4>
      <div className="ps-block__shipping">
        <h5>Shipping</h5>
        <div className="ps-radio">
          <input
            className="form-control"
            type="radio"
            id="shipping-1"
            name="shipping"
          />
          <label htmlFor="shipping-1">
            Free Shipping <span>+$00.00</span>
          </label>
        </div>
        <div className="ps-radio">
          <input
            className="form-control"
            type="radio"
            id="shipping-2"
            name="shipping"
          />
          <label htmlFor="shipping-2">
            Flat Rate <span>+$10.00</span>
          </label>
        </div>
        <div className="ps-radio">
          <input
            className="form-control"
            type="radio"
            id="shipping-3"
            name="shipping"
          />
          <label htmlFor="shipping-3">
            Local Delivery <span>+$20.00</span>
          </label>
        </div>
      </div>
      <div className="ps-block__caculate">
        <h5>Calculate Shipping</h5>
        <div className="form-group">
          <select className="ps-select">
            <option value="1">Select Country</option>
            <option value="2">Malaysia</option>
            <option value="3">USA</option>
            <option value="4">Taiwan</option>
          </select>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Postcode / ZIP"
          />
        </div>
        <button className="ps-btn ps-btn--gray">Update Total</button>
      </div>
      <div className="ps-block__total">
        <h3>
          Total<span>$ {total}</span>
        </h3>
      </div>
    </div>
  );
};

export default CartCheckOut;
