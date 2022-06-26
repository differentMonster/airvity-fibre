const CheckOutLogin = () => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
      <div className="ps-block--checkout-action">
        <div className="ps-block__header">
          <span>Click here to login</span>
        </div>

        <div className="ps-block__content">
          <p>
            If you have shopped with us before, please enter your details below.
            If you are a new customer, please proceed to the Billing & Shipping
            section.
          </p>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <div className="ps-checkbox">
              <input
                className="form-control"
                type="checkbox"
                id="remember"
                name="remember"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
          </div>

          <div className="form-group submit">
            <button className="ps-btn ps-btn--black">Login</button>
          </div>

          <a className="lost-password" href="#">
            Lost your password?
          </a>

          <p>Connect with</p>
          <ul className="ps-list--social">
            <li>
              <a className="facebook" href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a className="google-plus" href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheckOutLogin;
