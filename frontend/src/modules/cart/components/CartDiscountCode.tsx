const CartDiscountCode = () => {
	return (
		<div className="ps-section__actions">
			<figure>
				<a className="ps-btn ps-btn--outline" href="checkout.html">
					Continue shopping
				</a>
				<a className="ps-btn ps-btn--outline" href="checkout.html">
					Update Cart
				</a>
			</figure>
			<div className="form-group">
				<label>Discount Code</label>
				<div className="form-group__content">
					<input className="form-control" type="text" placeholder="Enter your code" />
					<a href="#">Apply</a>
				</div>
			</div>
		</div>
	)
}

export default CartDiscountCode
