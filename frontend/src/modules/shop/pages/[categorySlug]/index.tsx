import { client, ProductCategoryIdType } from 'client'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useCallback } from 'react'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'

// Components
const ShopProductCard = dynamic(() => import('../../components/ShopProductCard'))
const ShopHeader = dynamic(() => import('../../components/ShopHeader'))

export function ShopCategoryComponent({ products }): JSX.Element {
	const { query, isReady } = useRouter()
	const router = useRouter()
	const categorySlug = query.categorySlug

	if (!isReady) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		)
	}

	return (
		<React.Fragment>
			<div className="container-fluid">
				<ShopHeader category={categorySlug}/>
				<div className="ps-tabs">
					<div className="ps-tab active">
						<div className="row row--5-columns">
							{products.map((product, index) => (
								<React.Fragment key={`${product.id}`}>
									<Link href={`/shop/${categorySlug}/${product.slug}`}>
										<a className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
											<ShopProductCard props={product} />
										</a>
									</Link>
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
				<div className="ps-shop__footer">
					<a className="ps-link--under" href="#">
						Discover more
					</a>
				</div>
			</div>
		</React.Fragment>
	)
}

export default function ShopCategory() {
	const { useQuery } = client
	const { query } = useRouter()
	const { products } = useQuery()
	const categorySlug = query.categorySlug

	const setProducts = products({
		where: {
			categoryIn: Array.isArray(categorySlug) ? categorySlug : [categorySlug],
		},
	}).nodes

	return (
		<React.Fragment>
			<main className="ps-page">
				<div className="ps-shop ps-shop--fullwidth">
					<ShopCategoryComponent products={setProducts} />
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
