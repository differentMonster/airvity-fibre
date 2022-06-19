import Link from 'next/link'
import React from 'react'

export default function ShopProductBreadcrumbs({ category, product }) {
	return (
		<div className="ps-page__header">
			<ul className="ps-breadcrumb">
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/shop">
						<a>shop</a>
					</Link>
				</li>
				<li>
					<Link href={`/shop/${category}`}>
						<a>{category}</a>
					</Link>
				</li>
				<li>
					<Link href={`/shop/${category}/${product}`}>
						<a>{product}</a>
					</Link>
				</li>
			</ul>
			<div className="ps-page__nav">
				{/* <button> */}
				{/* 	<i className="icon-chevron-left"></i> */}
				{/* </button> */}
				{/* <button> */}
				{/* 	<i className="icon-chevron-right"></i> */}
				{/* </button> */}
			</div>
		</div>
	)
}
