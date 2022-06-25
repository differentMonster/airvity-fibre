import react from 'react'
import Link from 'next/link'
import { client, CreateUserInput } from 'client'
import { getNextStaticProps } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface FormData {
	username: string
	email: string
	firstName: string
	lastName: string
}

export default function SignUp() {
	const [registerUser, { data, isLoading, error }] = client.useMutation((mutation, { username, email, }: FormData) => {
		const result = mutation.registerUser({
			input: {
				username,
				email,
			},
		})
		console.log('Result', result)
		return result.user
	})

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		const values = Object.fromEntries(data) as unknown as FormData
		values['username'] = values['email']

		await registerUser({
			args: {
				...values,
			},
		})
			.catch((err) => {
				console.log('Error catch', err)
			})
			.then((user) => {
				console.log('THen', user)
			})
	}
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
						<form className="ps-form--auth" id="register__tab" method="post" onSubmit={handleSubmit}>
							<div className="ps-tabs">
								<div id="tab-2">
									<div className="form-group form-group--space">
										<input className="form-control" name="username" id="register__tab--username" type="text" placeholder="What should we call you ?" />
									</div>
									<div className="form-group form-group--space">
										<input className="form-control" name="email" id="register__tab--email" type="email" placeholder="Enter your email" />
									</div>
									<div className="form-group form-group--space">
										<input className="form-control" name="password" id="register__tab--password" type="text" placeholder="Create a password" />
									</div>
									<div className="ps-form__desc">
										<p>
											Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in
											our privacy policy.
										</p>
									</div>
									<div className="form-group submit">
										<button type="submit" className="ps-btn ps-btn--fullwidth ps-btn--black">
											Register
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

// export async function getStaticProps(context: GetStaticPropsContext) {
// 	return getNextStaticProps(context, {
// 		SignUp,
// 		client,
// 	})
// }
