import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  copyrightHolder?: string;
}

function Footer({ copyrightHolder = 'Company Name' }: Props): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="ps-footer--2">
        <div className="container">
          <div className="ps-footer__content">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                <aside className="widget widget_footer widget_align-right">
                  <h3 className="widget-title">Help & Information</h3>
                  <ul className="ps-list--line">
                    <li>
                      <a href="#">Track Order</a>
                    </li>
                    <li>
                      <a href="#">Delivery & Returns</a>
                    </li>
                    <li>
                      <a href="#">Premier Delivery</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                <aside className="widget widget_footer widget_align-right">
                  <h3 className="widget-title">About Supro</h3>
                  <ul className="ps-list--line">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Coporate</a>
                    </li>
                    <li>
                      <a href="#">Investors</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                <aside className="widget widget_footer widget_align-right">
                  <h3 className="widget-title">Online Shop</h3>
                  <ul className="ps-list--line">
                    <li>
                      <a href="#">Shoes</a>
                    </li>
                    <li>
                      <a href="#">Bags</a>
                    </li>
                    <li>
                      <a href="#">Wallets</a>
                    </li>
                    <li>
                      <a href="#">Belts</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                <aside className="widget widget_footer widget_align-right">
                  <h3 className="widget-title">Language</h3>
                  <select className="ps-select">
                    <option value="1">English</option>
                    <option value="2">Italian</option>
                    <option value="3">Germany</option>
                    <option value="4">French</option>
                  </select>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                <aside className="widget widget_footer widget_align-right">
                  <h3 className="widget-title">Currency</h3>
                  <select className="ps-select">
                    <option value="1">USD</option>
                    <option value="2">GBP</option>
                  </select>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                <p>
                  <a className="ps-link--line" href="#">
                    Term of Use
                  </a>
                  <a className="ps-link--line" href="#">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                <div className="ps-list--social">
                  <li>
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'pinterest-square']} />
                      </i>
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                      </i>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'google-plus-square']} />
                      </i>
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                      </i>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                      </i>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                <p className="ps-footer__copyright">
                  <strong>
                    © {year} {copyrightHolder}.
                  </strong>
                  All rights reserved 2022 &copy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
