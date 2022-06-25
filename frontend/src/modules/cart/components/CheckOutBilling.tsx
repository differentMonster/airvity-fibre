import Select from 'react-select'

/**
 * @form-control: css transation close
 * @select: switch to react-selct
 */
const CheckOutBilling = ({ register, errors }) => {
	const options = [
		{ value: 'Abe', label: 'Abe', customAbbreviation: 'A' },
		{ value: 'John', label: 'John', customAbbreviation: 'J' },
		{ value: 'Dustin', label: 'Dustin', customAbbreviation: 'D' },
	]

	return (
		<div className="col-md-6">
			<div className="ps-form__billings">
				<h4 className="ps-form__heading">Billings</h4>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group form-group--space">
							<label>First Name</label>
							<input
								name="firstName"
								type="text"
								placeholder=""
								id="checkout__form--firstname"
								{...register('firstName')}
								className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
							/>
							<div className="invalid-feedback">{errors.firstName?.message}</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="form-group form-group--space">
							<label>Last Name</label>
							<input
								name="firstName"
								type="text"
								placeholder=""
								id="checkout__form--lastname"
								{...register('lastName')}
								className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
							/>
							<div className="invalid-feedback">{errors.lastName?.message}</div>
						</div>
					</div>
					<div className="col-sm-12">
						<div className="form-group form-group--space">
							<label>Company Name (optional)</label>
							<input name="companyName" type="text" placeholder="" id="checkout__form--companyname" className={`form-control ${errors.companyName ? 'is-invalid' : ''}`} />
							<div className="invalid-feedback">{errors.companyName?.message}</div>
						</div>
					</div>
					<div className="col-sm-12">
						<div className="form-group form-group--space">
							<label>Country </label>
							<select name="country" id="checkout__form--country" {...register('title')} className={`form-control ${errors.country ? 'is-invalid' : ''}`}>
								<option value="">Select</option>
								<option value="Malaysia">Malaysia</option>
								<option value="USA">USA</option>
								<option value="Tawian">Tawian</option>
							</select>
							<div className="invalid-feedback">{errors.country?.message}</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group form-group--space">
								<label>Street Address</label>
								<input
									name="billingAddress"
									type="text"
									placeholder="House number and Street name"
									id="checkout__form--billingaddress"
									className={`form-control ${errors.billingAddress ? 'is-invalid' : ''}`}
								/>
								<div className="invalid-feedback">{errors.billingAddress?.message}</div>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group form-group--space">
								<label>Postcode / ZIP (optional)</label>
								<input
									name="postcode"
									type="text"
									placeholder="Apartment, suite, unit etc. (optional)"
									id="checkout__form--postcode"
									className={`form-control ${errors.postcode ? 'is-invalid' : ''}`}
								/>
								<div className="invalid-feedback">{errors.postcode?.message}</div>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group form-group--space">
								<label>Town / City</label>
								<input className="form-control" type="text" placeholder="" id="checkout__form--city" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group form-group--space">
								<label>Email</label>
								<input name="email" type="text" id="check__form--email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
								<div className="invalid-feedback">{errors.email?.message}</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group form-group--space">
								<label>Phone</label>
								<input className="form-control" type="text" placeholder="" id="checkout__form--phone" />
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group form-group--space create-account">
								<div className="ps-checkbox">
									<input className="form-control" type="checkbox" id="createAccount" name="createAccount" />
									<label htmlFor="createAccount">Create An account</label>
								</div>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group form-group--space shipping">
								<div className="ps-checkbox">
									<input className="form-control" type="checkbox" id="shipping" name="shipping" />
									<label htmlFor="shipping">
										<strong>Shipping to different Address</strong>
									</label>
								</div>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group form-group--space">
								<label>Order notes (optional)</label>
								<textarea className="form-control" id="checkout__form--notes" rows={6} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CheckOutBilling
