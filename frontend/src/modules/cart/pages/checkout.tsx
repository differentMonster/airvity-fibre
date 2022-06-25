import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import shallow from 'zustand/shallow'
import * as Yup from 'yup'

// Components
const CheckOutLogin = dynamic(() => import('../components/CheckOutLogin'))
const CheckOutCoupon = dynamic(() => import('../components/CheckOutCoupon'))
const CheckOutOrder = dynamic(() => import('../components/CheckOutOrder'))
const CheckOutBilling = dynamic(() => import('../components/CheckOutBilling'))

// Store
import useCart from '../store/cart'

export default function CheckOut() {
	// form validation rules
	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required('First Name is required'),
		lastName: Yup.string().required('Last Name is required'),
		companyName: Yup.string().required('Company Name is required'),
		country: Yup.string().required('Country is required'),
		billingAddress: Yup.string().required('Street Address is required'),
		postcode: Yup.string().required('Postcode is required'),
		email: Yup.string().required('Email is required').email('Email is invalid'),
	})

	const formOptions = { resolver: yupResolver(validationSchema) }

	// get functions to build form with useForm() hook
	const { register, handleSubmit, formState } = useForm(formOptions)
	const { errors } = formState

	function onSubmit(data) {
		// display form data on success
		alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4))
		return false
	}

	const { total, cart } = useCart(
		(state) => ({
			total: state.total,
			cart: state.cartContent,
		}),
		shallow
	)

	const [mycart, setCart] = useState([])
	const [mytotal, setTotal] = useState()

	useEffect(() => {
		setCart(cart)
		setTotal(total)
	}, [cart, total])

	return (
		<React.Fragment>
			<div className="ps-page--default">
				<div className="container">
					<div className="ps-page__header">
						<h3>Checkout</h3>
						<ul className="ps-breadcrumb">
							<li className="active">
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>Cart</li>
							<li>Checkout</li>
						</ul>
					</div>
					<div className="ps-page__content">
						<div className="ps-checkout">
							<div className="ps-section__actions">
								<div className="row">
									<CheckOutLogin />
									<CheckOutCoupon />
								</div>
							</div>
							<form className="ps-form--checkout" onSubmit={handleSubmit(onSubmit)}>
								<div className="row">
									<CheckOutBilling register={register} errors={errors} />
									<CheckOutOrder cart={mycart} total={mytotal} />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
