import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { client, MenuLocationEnum } from 'client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import shallow from 'zustand/shallow'

// Store
import useCart from '../modules/cart/store/cart'

// Styles
import styles from 'scss/components/Header.module.scss'

interface Props {
	title?: string
	description?: string
}

function Menu(): JSX.Element {
	const { menuItems } = client.useQuery()
	const links = menuItems({
		where: { location: MenuLocationEnum.PRIMARY },
	}).nodes

	const { getCartLength } = useCart(
		(state) => ({
			getCartLength: state.cartContent.length,
		}),
		shallow
	)

	return (
		<header className="header header--standard transparent" data-sticky="true">
			<div className="header__left">
				<Link href="/">
					<a>
						<img src="/img/logo.svg" alt="" />
					</a>
				</Link>
			</div>
			<div className="header__right">
				<div className="header__navigation">
					<ul className="menu">
						<li className="menu-item-has-children has-mega-menu">
							<Link href="/shop">
								<a>Shop</a>
							</Link>
							<span className="sub-toggle"></span>
							<div className="mega-menu">
								<div className="mega-menu__column">
									<h4>
										Shop Pages<span className="sub-toggle"></span>
									</h4>
									<ul className="sub-menu--mega">
										<li>
											<Link href="/shop/jersey">
												<a>Jersey</a>
											</Link>
										</li>
										<li>
											<Link href="/shop/shoes">
												<a>Shoes</a>
											</Link>
										</li>
									</ul>
								</div>
								<div className="mega-menu__column">
									<h4>
										Product Layouts<span className="sub-toggle"></span>
									</h4>
									<ul className="sub-menu--mega">
										<li>
											<a href="product-default.html">default</a>
										</li>
										<li>
											<a href="product-with-background.html">with background</a>
										</li>
									</ul>
								</div>
								<div className="mega-menu__column">
									<h4>
										Product Pages<span className="sub-toggle"></span>
									</h4>
									<ul className="sub-menu--mega">
										<li>
											<a href="product-simple.html">simple</a>
										</li>
										<li>
											<a href="product-on-sale.html">on sale</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li className="menu-item-has-children">
							<Link href="/customize">
								<a>Customize</a>
							</Link>
							<span className="sub-toggle"></span>
							<ul className="sub-menu">
								<li>
									<a href="portfolio-carousel.html">Portfolio Carousel</a>
								</li>
								<li>
									<a href="portfolio-grid.html">portfolio grid</a>
								</li>
							</ul>
						</li>
						<li className="menu-item-has-children">
							<a href="blog-grid.html">Pages</a>
							<span className="sub-toggle"></span>
							<ul className="sub-menu">
								<li>
									<Link href="/">
										<a>about</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a>FAQs</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a>404</a>
									</Link>
								</li>
							</ul>
						</li>
						<li className="menu-item-has-children">
							<Link href="/">
								<a>Blog</a>
							</Link>
							<span className="sub-toggle"></span>
							<ul className="sub-menu">
								<li>
									<a href="blog-grid.html">Blog Grid</a>
								</li>
								<li>
									<a href="blog-list.html">Blog list</a>
								</li>
								<li>
									<a href="blog-masonry.html">Blog Masonry</a>
								</li>
								<li>
									<a href="blog-sidebar.html">Blog Sidebar</a>
								</li>
								<li>
									<a href="blog-detail.html">Blog Detail</a>
								</li>
							</ul>
						</li>
						<li className="navbar__auth">
							<Link href="/signin">
								<a>Sign In</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="header__container">
					<div className="header__search">
						<form className="ps-form--header-search" action="index.html" method="get">
							<input className="form-control" type="text" placeholder="Search Searching..." />
							<button>
								<i>
									<FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
								</i>
							</button>
						</form>
						<a className="header__search-mini" href="#">
							<i className="icon-magnifier"></i>
						</a>
					</div>
					<div className="header__actions">
						<div>
							<Link className="header__user" href="/my-account">
								<a>
									<i>
										<FontAwesomeIcon icon={['far', 'user']} />
									</i>
								</a>
							</Link>
						</div>
						<Link className="header__cart" href="/cart/">
							<a>
								<i>
									<FontAwesomeIcon icon={['fas', 'cart-shopping']} />
								</i>
								<span>{getCartLength}</span>
							</a>
						</Link>
						<div></div>
						<a className="header__menu-toggle" href="#navigation-mobile">
							<i>
								<FontAwesomeIcon icon={['fas', 'bars']} />
							</i>
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Menu
