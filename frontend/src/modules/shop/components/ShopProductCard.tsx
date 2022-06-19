import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ShopProductCard({ props }) {
	const product = props.$on['SimpleProduct']

	const router = useRouter()
	return (
		<div className="ps-product">
			<div className="ps-product__thumbnail">
				<img className="ps-product__image" src={product.image.sourceUrl()} alt={product.description()} />
				<div className="ps-product__actions">
					<div onClick={() => router.push(`/cart`)}>
						<p> Add to cart </p>
					</div>
					<ul>
						<li>
							<div onClick={() => router.push(`/cart`)}>
								<i>
									<FontAwesomeIcon icon={['far', 'heart']} />
								</i>
							</div>
						</li>
						<li>
							<div onClick={() => router.push(`/cart`)}>
								<i>
									<FontAwesomeIcon icon={['fas', 'expand']} />
								</i>
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
	)
}

export default ShopProductCard
