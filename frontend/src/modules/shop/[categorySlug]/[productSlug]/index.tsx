import { client } from 'client'
import React from 'react'
import { useRouter } from 'next/router'
import { hasCategorySlug } from '@faustjs/next/utils'
import ShopProductHeader from '../../../../components/Shop/ShopProductHeader'

export default function ShopProduct() {
	const { useQuery } = client
	const { query } = useRouter()
	const { products } = useQuery()
	const productSlug = hasCategorySlug(query) ? query.productSlug : undefined

	const items = products({
		where: {
			slugIn: productSlug,
		},
	}).nodes

	return (
		<React.Fragment>
			<main>
				<h1>ShopProduct Page</h1>

				{items.map((item) => (
					<div key={`item.id`}>
						<ShopProductHeader props={item} />
					</div>
				))}
			</main>
		</React.Fragment>
	)
}
