import { useRouter } from 'next/router'

function ShopProductCard({ props }) {
	const product = props.$on['SimpleProduct']
	const router = useRouter()
	return (
		// <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
		<div className="ps-product">
			<div className="ps-product__thumbnail">
				<img className="ps-product__image" src={`${product.image.sourceUrl()}`} alt="" />
				{/* 		{/\* <nuxt-link :to="'/shop/'+ `${product.categories[0].slug}` + '/' + `${product.id}`" className="ps-product__overlay"></nuxt-link> *\/} */}
				<div className="ps-product__actions">
					<div onClick={() => router.push(`/cart`)}>
						<p> Add to cart </p>
					</div>
					<ul>
						<li>
							<div onClick={() => router.push(`/cart`)}>
								<i className="icon-heart"></i>
							</div>
						</li>
						<li>
							<div onClick={() => router.push(`/cart`)}>
								<i className="icon-frame-expand"></i>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="ps-product__content">
				<div onClick={() => router.push('/product-default.html')}>
					<p className="ps-product__title">{product.name}</p>
				</div>
				<p className="ps-product__price">
					<span>£</span>
					{product.price()}
				</p>
			</div>
		</div>
		// </div>
	)
}

export default ShopProductCard
