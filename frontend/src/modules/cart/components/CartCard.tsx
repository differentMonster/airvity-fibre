export default function CartCard() {
  return (
    <div className="table-responsive">
      <table className="table ps-table ps-table--shopping-cart">
        <thead>
          <tr>
            <th>Product</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="ps-product--sidebar">
                <div className="ps-product__thumbnail">
                  <a
                    className="ps-product__overlay"
                    href="product-default.html"
                  ></a>
                  <img src="" alt="" />
                </div>
                <div className="ps-product__content">
                  <a className="ps-product__title" href="product-default.html">
                    item.name
                  </a>
                  <p className="ps-product__price">T-Shirt</p>
                </div>
              </div>
            </td>
            <td>
              <div className="ps-color blue">
                <span className="ps-color__left">
                  <span className="ps-color__swatch"></span>
                </span>
              </div>
            </td>
            <td>M</td>
            <td>
              <strong>item.quaity</strong>
            </td>
            <td>
              <div className="form-group--number">
                <button
                  id="form-group-number--increase"
                  className="up"
                ></button>
                <button
                  id="form-group-number--decrease"
                  className="down"
                ></button>
                <input
                  id="form-group-number--quantity"
                  className="form-control"
                  type="text"
                />
              </div>
            </td>
            <td>
              <p>
                <strong>item.price</strong>
              </p>
            </td>
            <td>
              <a id="remove-cart-item" className="ps-icon">
                <i className="icon-cross"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
