import Link from 'next/link'

export default function CheckOut() {
	return (
		<div className="ps-page--default">
			<div className="container">
				<div className="ps-page__header">
					<h3>Checkout</h3>
					<ul className="ps-breadcrumb">
						<li className="active">
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>Cart</li>
						<li>Checkout</li>
					</ul>
				</div>
				<div className="ps-page__content">
					<div className="ps-checkout">
						<div className="ps-section__actions">
							<div className="row"></div>
						</div>
						<div className="row"></div>
					</div>
				</div>
			</div>
		</div>
	)
}
