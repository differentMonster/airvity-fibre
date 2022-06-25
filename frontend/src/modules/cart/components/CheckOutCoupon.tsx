const CheckOutCoupon = () => {
	return (
		<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
			<div className="ps-block--checkout-action">
				<div className="ps-block__header">
					<span>enter your coupon code</span>
				</div>
				<div className="ps-block__content">
					<p>If you have a coupon code, please apply it below.</p>
					<div className="form-group">
						<input className="form-control" type="text" placeholder="Coupon" />
					</div>
					<div className="form-group submit">
						<button className="ps-btn ps-btn--black">Apply coupon</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CheckOutCoupon
