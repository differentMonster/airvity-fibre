import { client, ProductCategoryIdType } from 'client'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { hasCategorySlug } from '@faustjs/next/utils'
import ShopProductCard from '../../../components/Shop/ShopProductCard'
import ShopHeader from '../../../components/Shop/ShopHeader'

export function ShopCategoryComponent({ products }): JSX.Element {
	const { query } = useRouter()
	const router = useRouter()
	const categorySlug = hasCategorySlug(query) ? query.categorySlug : undefined

	const viewProductDeatails = useCallback(
		(productSlug) => {
			router.push(`/shop/${categorySlug}/${productSlug}`)
		},
		[router]
	)

	return (
		<section>
			{products.map((product) => (
				<div key={`${product.id}`}>
					<ShopProductCard props={product} handleCheck={viewProductDeatails} />
				</div>
			))}
		</section>
	)
}

export default function ShopCategory() {
	const { useQuery } = client
	const { query } = useRouter()
	const { products } = useQuery()
	const categorySlug = hasCategorySlug(query) ? query.categorySlug : undefined
	// const generalSettings = useQuery().generalSettings

	const setProducts = products({
		where: {
			categoryIn: categorySlug,
		},
	}).nodes

	return (
		<React.Fragment>
			<main className="ps-page">
				<div className="ps-shop ps-shop--fullwidth">
					<div className="container-fluid">
						<ShopHeader />
						<ShopCategoryComponent products={setProducts} />
						<div className="ps-shop__footer">
							<a className="ps-link--under" href="#">
								Discover more
							</a>
						</div>
					</div>
				</div>
			</main>
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
		Page: ShopCategory,
		client,
	})
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	}
}
