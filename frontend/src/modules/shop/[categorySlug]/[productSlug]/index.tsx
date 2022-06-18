import { client } from 'client'
import React from 'react'
import { useRouter } from 'next/router'
import ShopProductHeader from '../../../../components/Shop/ShopProductHeader'

export default function ShopProduct() {
	const { useQuery } = client
	const { query, isReady } = useRouter()
	const { products } = useQuery()
	const productSlug = query.productSlug

	const items = products({
		where: {
			  slugIn: Array.isArray(productSlug) ? productSlug : [productSlug]
		},
	}).nodes

	if (!isReady) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		)
	}

	return (
		<main>
			<h1>ShopProduct Page</h1>
			{items.map((item) => (
				<React.Fragment key={`item.id`}>
					<ShopProductHeader props={item} />
				</React.Fragment>
			))}
		</main>
	)
}
