import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useCart } from '../store'

// Components
const CartCart = dynamic(() => import('../components/CartCard'))
const CartDiscountCode = dynamic(() => import('../components/CartDiscountCode'))
const CartCheckOut = dynamic(() => import('../components/CartCheckOut'))

// Styles
import styles from '../../../scss/pages/cart.module.scss'

export default function Cart() {
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
						<CartCart />
						<div className="ps-section__content">
							<CartDiscountCode />
							<div className="ps-block--checkout-total">
								<CartCheckOut />
								<div className="ps-block__bottom">
									<div className="ps-btn ps-btn--black">
										<Link href="/cart/checkout">Proceed to checkout</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
