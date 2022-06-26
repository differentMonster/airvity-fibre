import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import shallow from 'zustand/shallow';

// Components
const CartCart = dynamic(() => import('../components/CartCard'));
const CartDiscountCode = dynamic(
  () => import('../components/CartDiscountCode')
);
const CartCheckOut = dynamic(() => import('../components/CartCheckOut'));

// Styles
import styles from '../../../scss/pages/cart.module.scss';

// Store
import useCart from '../store/cart';

export default function Cart() {
  const { total, cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useCart(
      (state) => ({
        total: state.total,
        cart: state.cartContent,
        incrementQuantity: state.incrementQuantity,
        decrementQuantity: state.decrementQuantity,
        removeFromCart: state.removeFromCart,
      }),
      shallow
    );

  const [mycart, setCart] = useState([]);
  const [mytotal, setTotal] = useState<number | undefined>();

  useEffect(() => {
    setCart(cart);
    setTotal(total);
  }, [cart, total]);

  console.log('mycart:', mycart);
  return (
    <div className="ps-page--default">
      <div className="container">
        <div className="ps-page__header">
          <h3>Cart</h3>
          <ul className="ps-breadcrumb">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/cart/">
                <a>cart</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="ps-page__content">
          <div className="ps-shopping-cart">
            <CartCart
              cart={mycart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeFromCart={removeFromCart}
            />
            <div className="ps-section__content">
              <CartDiscountCode />
              <div className="ps-block--checkout-total">
                <CartCheckOut total={mytotal} />
                <div className="ps-block__bottom">
                  <div className="ps-btn ps-btn--black">
                    <Link href="/cart/checkout">
                      <a>Proceed to checkout</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
