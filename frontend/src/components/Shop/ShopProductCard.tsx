import Link from 'next/link'

function ShopProductCard({ props, handleCheck }) {
	const product = props.$on['SimpleProduct']
	return (
		<div className="ps-tabs" onClick={() => handleCheck(product.slug)}>
			<div className="ps-tab active" id="tab-1">
				<div className="row row--5-columns">
					<div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
						<div className="ps-product">
							<div className="ps-product__thumbnail">
								<img className="ps-product__image" src={`${product.image.sourceUrl()}`} alt="" />
								{/* <nuxt-link :to="'/shop/'+ `${product.categories[0].slug}` + '/' + `${product.id}`" className="ps-product__overlay"></nuxt-link> */}
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
									{product.name}
								</a>
								<p className="ps-product__price">
									<span>£</span>
									{product.price()}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShopProductCard

/* <div key={`${product.id}`} onClick={() => viewProductDeatails(product.slug)}> */
/* 	<h3>{product.name}</h3> */
/* 	<h3>{product?.$on['SimpleProduct'].price()}</h3> */
/* 	<img src={product?.$on['SimpleProduct'].image.sourceUrl()} /> */
/* </div> */
