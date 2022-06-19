import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Components
const CartCart = dynamic(() => import('../components/CartCard'))

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
					</div>
				</div>
			</div>
		</div>
	)
}
