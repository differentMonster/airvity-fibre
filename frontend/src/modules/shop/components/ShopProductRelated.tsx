import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ShopProductRelated() {
  return (
    <div className="ps-related-products">
      <h3>Related Products</h3>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
            <div className="ps-product">
              <div className="ps-product__thumbnail">
                <img
                  className="ps-product__image"
                  src="/img/product/default/4.jpg"
                  alt=""
                />
                <img
                  className="ps-product__image-alt"
                  src="/img/product/default/4.jpg"
                  alt=""
                />
                <a
                  className="ps-product__overlay"
                  href="product-default.html"
                ></a>
                <div className="ps-product__actions">
                  <a href="shopping-cart.html"> Add to cart</a>
                  <ul>
                    <li>
                      <a href="#">
                        <i>
                          <FontAwesomeIcon icon={['far', 'heart']} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FontAwesomeIcon icon={['fas', 'expand']} />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ps-product__content">
                <a className="ps-product__title" href="product-default.html">
                  Aviator Sunglasses
                </a>
                <p className="ps-product__price">
                  <span>£</span> 9.90
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
            <div className="ps-product">
              <div className="ps-product__thumbnail">
                <img
                  className="ps-product__image"
                  src="/img/product/default/4.jpg"
                  alt=""
                />
                <img
                  className="ps-product__image-alt"
                  src="/img/product/default/4.jpg"
                  alt=""
                />
                <a
                  className="ps-product__overlay"
                  href="product-default.html"
                ></a>
                <div className="ps-product__actions">
                  <a href="shopping-cart.html"> Add to cart</a>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-frame-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ps-product__content">
                <a className="ps-product__title" href="product-default.html">
                  Contrast Backpack
                </a>
                <p className="ps-product__price">
                  <span>£</span> 69.90
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
            <div className="ps-product">
              <div className="ps-product__thumbnail">
                <img
                  className="ps-product__image"
                  src="/img/product/default/3.jpg"
                  alt=""
                />
                <img
                  className="ps-product__image-alt"
                  src="/img/product/default/3.jpg"
                  alt=""
                />
                <a
                  className="ps-product__overlay"
                  href="product-default.html"
                ></a>
                <div className="ps-product__actions">
                  <a href="shopping-cart.html"> Add to cart</a>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-frame-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ps-product__content">
                <a className="ps-product__title" href="product-default.html">
                  Embroidered Flowy Jacket
                </a>
                <p className="ps-product__price">
                  <span>£</span> 56.89
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
            <div className="ps-product">
              <div className="ps-product__thumbnail">
                <img
                  className="ps-product__image"
                  src="/img/product/default/4.jpg"
                  alt=""
                />
                <img
                  className="ps-product__image-alt"
                  src="/img/product/default/4.jpg"
                  alt=""
                />
                <a
                  className="ps-product__overlay"
                  href="product-default.html"
                ></a>
                <div className="ps-product__actions">
                  <a href="shopping-cart.html"> Add to cart</a>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-frame-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ps-product__content">
                <a className="ps-product__title" href="product-default.html">
                  Floral Short Jumpsuit
                </a>
                <p className="ps-product__price">
                  <span>£</span> 97.99
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
