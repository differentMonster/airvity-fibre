// import react, { useState } from 'react'
// import Link from 'next/link'
// import { client, CreateUserInput } from 'client'
// import { getNextStaticProps } from '@faustjs/next'
// import { GetStaticPropsContext } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import axios from 'axios'
// import { WooComGateway } from '../utils/woocommerce'

// export interface FormData {
// 	username: string
// 	email: string
// 	firstName: string
// 	lastName: string
// }

// export default function SignUp() {
// 	// const [password, setPassword] = useState('')
// 	const [registerUser, { data, isLoading, error }] = client.useMutation((mutation, { username, email, password }: FormData) => {
// 		const result = mutation.registerUser({
// 			input: {
// 				username,
// 				email,
// 				password,
// 			},
// 		})
// 		console.log('Result', result)
// 		return result.user
// 	})

// 	console.log('mutation:', client.useMutation())

// 	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault()
// 		// const data = new FormData(event.currentTarget)
// 		// const values = Object.fromEntries(data) as unknown as FormData
// 		// values['username'] = values['email']

// 		const userData = {
// 			email: 'testtest@gmail.com',
// 			username: 'testme',
// 			// password: '123456',
// 		}

// 		// await WooComGateway.post('customers', userData)
// 		// 	.then((response) => {
// 		// 		console.log('response:', response)
// 		// 	})
// 		// 	.catch((error) => {
// 		// 		console.log('error:', error)
// 		// 	})

// 		await registerUser({
// 			args: {
// 				// email: 'testtest@gmail.com',
// 				// username: 'testme',
// 				// password: '123456',
// 				...userData,
// 			},
// 		})
// 			.then((user) => {
// 				console.log('success', user)
// 			})
// 			.catch((err) => {
// 				console.log('Error catch', err)
// 			})
// 	}
// 	return (
// 		<div className="ps-page--default">
// 			<div className="container">
// 				<div className="ps-page__header">
// 					<h3>Sign Up</h3>
// 					<ul className="ps-breadcrumb">
// 						<li>
// 							<Link href="/">
// 								<a>Home</a>
// 							</Link>
// 						</li>
// 						<li>Sign Up</li>
// 					</ul>
// 				</div>
// 				<div className="ps-page__content">
// 					<div className="ps-tab-root">
// 						<form className="ps-form--auth" id="register__tab" method="post" onSubmit={handleSubmit}>
// 							<div className="ps-tabs">
// 								<div id="tab-2">
// 									<div className="form-group form-group--space">
// 										<input className="form-control" name="username" id="register__tab--username" type="text" placeholder="What should we call you ?" />
// 									</div>
// 									<div className="form-group form-group--space">
// 										<input className="form-control" name="email" id="register__tab--email" type="email" placeholder="Enter your email" />
// 									</div>
// 									<div className="form-group form-group--space">
// 										<input className="form-control" name="password" id="register__tab--password" type="text" placeholder="Create a password" />
// 									</div>
// 									<div className="ps-form__desc">
// 										<p>
// 											Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in
// 											our privacy policy.
// 										</p>
// 									</div>
// 									<div className="form-group submit">
// 										<button type="submit" className="ps-btn ps-btn--fullwidth ps-btn--black">
// 											Register
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 						</form>
// 						<div className="ps-form--auth">
// 							<p>Connect with</p>
// 							<ul className="ps-list--social">
// 								<li>
// 									<a className="facebook" href="#">
// 										<i>
// 											<FontAwesomeIcon icon={['fab', 'facebook']} />
// 										</i>
// 									</a>
// 								</li>
// 								<li>
// 									<a className="google-plus" href="#">
// 										<i>
// 											<FontAwesomeIcon icon={['fab', 'google']} />
// 										</i>
// 									</a>
// 								</li>
// 								<li>
// 									<a className="twitter" href="#">
// 										<i>
// 											<FontAwesomeIcon icon={['fab', 'twitter']} />
// 										</i>
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// // export async function getStaticProps(context: GetStaticPropsContext) {
// // 	return getNextStaticProps(context, {
// // 		SignUp,
// // 		client,
// // 	})
// // }

import React, { useEffect, useState } from 'react'
import { client, CreateUserInput } from 'client'
import Link from 'next/link'
import { getNextStaticProps } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'

export interface FormData {
	username: string
	email: string
	password: string
}

export default function SignUpForm() {
	// const [registerUser, { data, isLoading, error }] = client.useMutation((mutation, { username, email, firstName, lastName }: FormData) => {
	// 	const result = mutation.registerUser({
	// 		input: {
	// 			username,
	// 			email,
	// 			firstName,
	// 			lastName,
	// 		},
	// 	})
	// 	console.log('REsult', result)
	// 	return result.user
	// })

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [registerUser, { data, error, isLoading }] = client.useMutation((mutation, args: FormData) => {
		const result = mutation.registerUser({
			input: args,
		})
		console.log('REsult', result)
		return result.user
	})
	// // const wasSignUpSuccessful = Boolean(data?.databaseId)
	const handleSubmit = async (event) => {
		event.preventDefault()
		await registerUser({
			args: {
				username,
				email,
				password,
			},
		})
			.catch((error) => {
				console.log('error:', error)
			})
			.then((response) => {
				console.log('response:', response)
			})
	}

	useEffect(() => {
		console.log(data)

		setUsername('')
		setEmail('')
		setPassword('')
	}, [data])

	return (
		<div className="ps-page--default">
			<div className="container">
				<div className="ps-page__header">
					<h3>Sign Up</h3>
					<ul className="ps-breadcrumb">
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>Sign Up</li>
					</ul>
				</div>
				<div className="ps-page__content">
					<div className="ps-tab-root">
						<form className="ps-form--auth" id="register__tab">
							<div className="ps-tabs">
								<div id="tab-2">
									<div className="form-group form-group--space">
										<input
											className="form-control"
											name="username"
											id="register__tab--username"
											type="text"
											placeholder="What should we call you ?"
											value={username}
											onChange={(e) => setUsername(e.target.value)}
										/>
									</div>
									<div className="form-group form-group--space">
										<input
											className="form-control"
											name="email"
											id="register__tab--email"
											type="email"
											placeholder="Enter your email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className="form-group form-group--space">
										<input
											className="form-control"
											name="password"
											id="register__tab--password"
											type="text"
											placeholder="Create a password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<div className="ps-form__desc">
										<p>
											Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in
											our privacy policy.
										</p>
									</div>
									<div className="form-group submit">
										<button type="submit" className="ps-btn ps-btn--fullwidth ps-btn--black" disabled={isLoading} onClick={handleSubmit}>
											{isLoading ? 'Signing up...' : 'Sign up'}
										</button>
									</div>
								</div>
							</div>
						</form>
						<div className="ps-form--auth">
							<p>Connect with</p>
							<ul className="ps-list--social">
								<li>
									<a className="facebook" href="#">
										<i>
											<FontAwesomeIcon icon={['fab', 'facebook']} />
										</i>
									</a>
								</li>
								<li>
									<a className="google-plus" href="#">
										<i>
											<FontAwesomeIcon icon={['fab', 'google']} />
										</i>
									</a>
								</li>
								<li>
									<a className="twitter" href="#">
										<i>
											<FontAwesomeIcon icon={['fab', 'twitter']} />
										</i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export async function getStaticProps(context: GetStaticPropsContext) {
	return getNextStaticProps(context, {
		SignUpForm,
		client,
	})
}
