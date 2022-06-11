import Link from 'next/link'

function ShopProductHeader({ props }) {
	const product = props.$on['SimpleProduct']

	return (
		<div className="ps-product__header">
			<div className="ps-product__thumbnail" data-vertical="false">
				<div className="ps-wrapper">
					<div className="ps-product__gallery">
						<div className="col-12 px-md-2 d-none d-md-block">
							<div className="">
								<img src={product.image.sourceUrl()} alt="" />
							</div>
						</div>
					</div>
				</div>

				<div className="ps-product__variants">
					<div className="col-12 d-none d-md-block my-4">
						<div className="row"></div>
					</div>
				</div>
			</div>
			<div className="ps-product__info">
				<div className="ps-product__info-header">
					<div className="ps-product__rating">
						<select className="ps-rating" data-read-only="true">
							<option value="1">1</option>
							<option value="1">2</option>
							<option value="1">3</option>
							<option value="1">4</option>
							<option value="2">5</option>
						</select>
						<span>1 Review</span>
					</div>
					<h2 className="ps-product__title">{product.name}</h2>
					<span className="ps-product__sku">SKU: {product.sku}</span>
					<h4 className="ps-product__price">{product.price()}</h4>
				</div>
				<div className="ps-product__desc">{product.description()}</div>
				<div className="ps-product__shopping">
					<figure>
						<div className="form-group--number">
							<button className="up"></button>
							<button className="down"></button>
							<input className="form-control" type="text" defaultValue="1" />
						</div>
						<button className="ps-btn ps-btn--black">Add to cart</button>
						<a className="ps-product__favorite" href="#">
							<i className="fa fa-heart-o"></i>
						</a>
					</figure>
					<div className="ps-product__buynow">
						<a className="ps-btn ps-btn--black ps-btn--fullwidth" href="#">
							Buy Now
						</a>
					</div>
				</div>
				<div className="ps-product__specification">
					<p>
						<strong>CATEGORY:</strong>
						{props.productCategories().nodes.map((item) => {
							return (
								<Link href={`/shop/${item.slug}`}>
									<a>{item.slug}</a>
								</Link>
							)
						})}
					</p>
				</div>
				<div className="ps-product__sharing">
					<a href="#">
						<i className="fa fa-facebook"></i>
					</a>
					<a href="#">
						<i className="fa fa-twitter"></i>
					</a>
					<a href="#">
						<i className="fa fa-pinterest"></i>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ShopProductHeader
