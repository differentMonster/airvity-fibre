import Link from 'next/link';

function ShopHeader({ category }) {
  return (
    <div>
      <div className="ps-shop__header">
        <div className="ps-shop__left">
          <h1>Shop</h1>
          <ul className="ps-breadcrumb">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/">
                <a>shop</a>
              </Link>
            </li>
            <li>
              <Link href={`/shop/${category}`}>
                <a>{category}</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="ps-shop__right">
          <p>
            <strong>25</strong> Products Found
          </p>
          <div className="ps-shop__actions">
            <div className="ps-shop__filter">
              <a className="ps-shop__filter-toggle" href="#">
                Filter<i className="fa fa-angle-down"></i>
              </a>
            </div>
            <div className="ps-shop__sorting">
              <span>Sortby</span>
              <select className="ps-select">
                <option value="1">Default</option>
                <option value="2">Avarage rating</option>
                <option value="3">Newest</option>
                <option value="4">Oldest</option>
              </select>
            </div>
            <div className="ps-shop__layouts">
              <a className="active" href="shop-fullwidth.html">
                <i className="icon-icons2"></i>
              </a>
              <a href="shop-fullwidth-2.html">
                <i className="icon-list4"></i>
              </a>
            </div>
            <a
              className="ps-shop__filter-toggle--mobile ps-shop__filter-toggle"
              href="#"
            >
              <i className="icon-equalizer"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="ps-shop__filter-panel" id="shop-filter">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
              <aside className="widget widget_shop">
                <h3 className="widget-title">Sort By</h3>
                <div className="widget__content">
                  <ul className="ps-list--under">
                    <li>
                      <a href="#">Default</a>
                    </li>
                    <li>
                      <a href="#">Popularity</a>
                    </li>
                    <li>
                      <a href="#">Average rating</a>
                    </li>
                    <li>
                      <a href="#">Newest</a>
                    </li>
                    <li>
                      <a href="#">Price: low to high</a>
                    </li>
                    <li>
                      <a href="#">Price: high to low</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
              <aside className="widget widget_shop">
                <h3 className="widget-title">Color</h3>
                <div className="widget__content">
                  <div className="widget__colors">
                    <div className="ps-color black active">
                      <span className="ps-color__left">
                        <span className="ps-color__swatch"></span>
                        <i> Black</i>
                      </span>
                    </div>
                    <div className="ps-color blue">
                      <span className="ps-color__left">
                        <span className="ps-color__swatch"></span>
                        <i> Blue</i>
                      </span>
                    </div>
                    <div className="ps-color gold">
                      <span className="ps-color__left">
                        <span className="ps-color__swatch"></span>
                        <i> Gold</i>
                      </span>
                    </div>
                    <div className="ps-color nude">
                      <span className="ps-color__left">
                        <span className="ps-color__swatch"></span>
                        <i> Nude</i>
                      </span>
                    </div>
                    <div className="ps-color orange">
                      <span className="ps-color__left">
                        <span className="ps-color__swatch"></span>
                        <i> Orange</i>
                      </span>
                    </div>
                    <div className="ps-color red">
                      <span className="ps-color__left">
                        <span className="ps-color__swatch"></span>
                        <i> Red</i>
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
              <aside className="widget widget_shop">
                <h3 className="widget-title">Price</h3>
                <div className="widget__content">
                  <ul className="ps-list--under">
                    <li>
                      <a href="#">£0.00 - £10.00</a>
                    </li>
                    <li>
                      <a href="#">£10.00 - £20.00</a>
                    </li>
                    <li>
                      <a href="#">£20.00 - £30.00</a>
                    </li>
                    <li>
                      <a href="#">£30.00 - £40.00</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
              <aside className="widget widget_shop widget_tags">
                <h3 className="widget-title">Tags</h3>
                <div className="widget__content">
                  <a href="shop-default.html">All</a>
                  <a href="shop-default.html">Bag</a>
                  <a href="shop-default.html">Clothing</a>
                  <a href="shop-default.html">Cotion</a>
                  <a href="shop-default.html">Men</a>
                  <a href="shop-default.html">Shoes</a>
                  <a href="shop-default.html">T-Shirt</a>
                  <a href="shop-default.html">Woman</a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopHeader;
