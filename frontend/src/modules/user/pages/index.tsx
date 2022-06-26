import React from 'react'
import { client } from 'client'

// Styles
import styles from '../../../scss/pages/user.module.scss'

export default function User() {
	const { useAuth, useClient, useQuery } = client?.auth
	const { isLoading: isAuthLoading, isAuthenticated } = useAuth()
	const viewer = useQuery()?.viewer

	if (isAuthLoading) {
		return <div>Loading...</div>
	}

	if (!isAuthenticated) {
		return <div>You are not Authenticated!</div>
	}

	return (
		<div className={styles.container}>
			<h1>User Page</h1>
			<div>Authenticated Success</div>
			<div>First Name: {viewer?.firstName}</div>
			<div>Last Name: {viewer?.lastName}</div>
			<div>ID: {viewer?.id}</div>
			<div>Email: {viewer?.email}</div>
		</div>
	)
}

// import React, { useState } from 'react'
// import { client, UpdateUserInput } from 'client'

// export default function ProfileForm() {
// 	const [view, setView] = useState<'Viewing' | 'Editing'>('Viewing')
// 	const [wasProfileUpdated, setWasProfileUpdated] = useState<boolean>(false)

// 	const { isLoading: isAuthLoading, isAuthenticated } = client?.auth?.useAuth()
// 	const viewer = client?.auth?.useQuery()?.viewer

// 	return (
// 		<>
// 			{wasProfileUpdated ? <p className="profile-update-confirmation">Profile details have been updated.</p> : null}
// 			{view == 'Viewing' && (
// 				<>
// 					<div>First Name: {viewer?.firstName}</div>
// 					<div>Last Name: {viewer?.lastName}</div>
// 					<button onClick={() => setView('Editing')}>Edit Profile</button>
// 				</>
// 			)}

// 			{view == 'Editing' && (
// 				<form method="post" onSubmit={handleSubmit}>
// 					<fieldset disabled={isLoading} aria-busy={isLoading}>
// 						<label htmlFor="profile-first-name">First Name</label>
// 						<input id="profile-first-name" type="text" name="firstName" defaultValue={viewer?.firstName || ''} autoComplete="given-name" />
// 						<label htmlFor="profile-last-name">Last Name</label>
// 						<input id="profile-last-name" type="text" name="lastName" defaultValue={viewer?.lastName || ''} autoComplete="family-name" />
// 						{error ? <p className="error-message">{error.message}</p> : null}
// 						<button type="submit" disabled={isLoading}>
// 							{isLoading ? 'Sending...' : 'Update Profile'}
// 						</button>
// 					</fieldset>
// 				</form>
// 			)}
// 		</>
// 	)
// }
