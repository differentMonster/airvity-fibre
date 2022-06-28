import { client } from 'client'
import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import shallow from 'zustand/shallow'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'

// Methods
import { convertPriceToNumber } from '../../../class'

// Components
const ShopProductHeader = dynamic(() => import('../../../components/ShopProductHeader'))
const ShopProductRelated = dynamic(() => import('../../../components/ShopProductRelated'))
const ShopProductBreadcrumbs = dynamic(() => import('../../../components/ShopProductBreadcrumbs'))

// Store
import useCart from '../../../../cart/store/cart'

export default function ShopProduct() {
	const { useQuery } = client
	const { query, isReady } = useRouter()
	const { products } = useQuery()
	const productSlug = query.productSlug
	const categorySlug = query.categorySlug

	const { addToCart, mycart } = useCart(
		(state) => ({
			addToCart: state.addToCart,
			mycart: state.cartContent,
		}),
		shallow
	)

	const items = products({
		where: {
			slugIn: Array.isArray(productSlug) ? productSlug : [productSlug],
		},
	}).nodes

	if (useQuery().$state.isLoading) {
		return null
	}

	if (!isReady) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		)
	}

	return (
		<React.Fragment>
			<div className="ps-page--default">
				<div className="ps-page ps-page--product-detail">
					<div className="container">
						{items.map((item) => (
							<React.Fragment key={`item.id`}>
								<ShopProductBreadcrumbs category={categorySlug} product={productSlug} />
								<div className="ps-product--detail">
									<ShopProductHeader props={item} addToCart={addToCart} convertPriceToNumber={convertPriceToNumber} />
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
				<ShopProductRelated />
			</div>
		</React.Fragment>
	)
}

export async function getStaticProps(context: GetStaticPropsContext) {
	if (await is404(context, { client })) {
		return {
			notFound: true,
		}
	}
	return getNextStaticProps(context, {
		Page: ShopProduct,
		client,
	})
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	}
}
