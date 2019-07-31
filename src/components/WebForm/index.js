import { educationLevels, annualIncomeRanges } from "../../assets/constants.js"
import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Confirmation from "../Confirmation/index.js";

class WebForm extends React.Component {
	render() {
		return (
			<div>
				<h1>Fill Out Form Below</h1>
				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						streetAddress: "",
						city: "",
						state: "",
						zipCode: "",
						levelOfEducation: "",
						annualIncome: "",
						email: "",
						confirmEmail: ""
					}}
					// Return any errors that arise during validation
					validate={values => {
						let errors = {}

						// Validate email address
						//Email Address
						if (!values.email) {
							errors.email = "Required"
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values.email)
						) {
							errors.email = "Invalid email address"
						}

						//Confirm Email Address
						if (!values.confirmEmail) {
							errors.confirmEmail = "Please confirm your email address"
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(
								values.confirmEmail
							)
						) {
							errors.confirmEmail = "Invalid email address"
						} else if (values.confirmEmail !== values.email) {
							errors.confirmEmail = "Emails do not match"
						}

						// Validate names
						//First Name
						if (!values.firstName) {
							errors.firstName = "Required"
						} else if (!/^[A-Z._%+-]$/i.test(values.firstName)) {
							errors.firstName = "First name is invalid"
						}
						if (values.firstName.length > 20) {
							errors.firstName = "Max characters exceeded"
						}
						//Last Name
						if (!values.lastName) {
							errors.lastName = "Required"
						} else if (!/^[A-Z._%+-]$/i.test(values.lastName)) {
							errors.lastName = "Last name is invalid"
						}
						if (values.lastName.length > 20) {
							errors.lastName = "Max characters exceeded"
						}

						// Validate address
						//Street Address
						if (values.streetAddress.length > 40) {
							errors.streetAddress = "Max characters exceeded"
						}

						//State
						if (values.state.length > 2) {
							errors.state = "Please abbreviate name of state"
						}

						//Zip Code
						if (!values.zipCode) {
							errors.zipCode = "Zip code required"
						} else if (!/\d{5}$/i.test(values.zipCode)) {
							errors.zipCode = "Invalid zip code"
						}

						// Validate Phone Number
						if (!values.phoneNumber) {
							errors.phoneNumber = "Phone number required"
						} else if (!/^\d{7}$/i.test(values.phoneNumber)) {
							errors.zipCode = "Invalid zip code"
						}

						return errors
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2))
							setSubmitting(false)
						}, 400)
					}}>
					{({ values, isSubmitting }) => (
						<Form>
								<div className="row">
									<Field
										type="text"
										name="firstName"
										placeholder="FIRST NAME"
										required="true"
									/>
									<ErrorMessage name="firstName" component="div" />
									<Field
										type="text"
										name="lastName"
										placeholder="LAST NAME"
										required="true"
									/>
									<ErrorMessage name="lastName" component="div" />
								</div>
								<div className="row">
									<div className="col">
										<Field
											type="text"
											name="streetAddress"
											placeholder="STREET ADDRESS"
											required="true"
										/>
										<ErrorMessage name="streetAddress" component="div" />
									</div>
								</div>
								<div className="row">
									<div className="col">
										<Field
											type="text"
											name="city"
											placeholder="CITY"
											required="true"
										/>
										<ErrorMessage name="city" component="div" />
									</div>
									<div className="col">
										<Field
											type="text"
											name="state"
											placeholder="STATE"
											required="true"
										/>
										<ErrorMessage name="state" component="div" />
									</div>
									<div className="col">
										<Field
											type="text"
											name="zipCode"
											placeholder="ZIP CODE"
											required="true"
										/>
										<ErrorMessage name="zipCode" component="div" />
									</div>
								</div>
								<div className="row">
									<Field
										type="select"
										name="educationLevel"
										placeholder="LEVEL OF EDUCATION"
										required="true"
									/>
									<ErrorMessage name="educationLevel" component="div" />
									<Field
										type="text"
										name="annualIncome"
										placeholder="ANNUAL INCOME"
										required="true"
									/>
									<ErrorMessage name="annualIncome" component="div" />
								</div>
								<div className="row">
									<Field
										type="text"
										name="phoneNumber"
										placeholder="PHONE NUMBER"
										required="true"
									/>
									<ErrorMessage name="phoneNumber" component="div" />
								</div>
								<div className="row">
									<Field
										type="email"
										name="email"
										placeholder="EMAIL"
										required="true"
									/>
									<ErrorMessage name="email" component="div" />
									<Field
										type="email"
										name="confirmEmail"
										placeholder="CONFIRM EMAIL"
										required="true"
									/>
									<ErrorMessage name="confirmEmail" component="div" />
								</div>
								<div className="row">
									<Field
										type="checkbox"
										name="termsOfAgreement"
										required="true">
										I Agree to <a href="#">Terms</a>
									</Field>
									<ErrorMessage name="termsOfAgreement" component="div" />
								</div>
								))}
								<button
									type="submit"
									className="secondary"
									color={'primary'}
									disabled={isSubmitting}>
									Submit
								</button>
							)}
						</Form>
					)}
				</Formik>
				{ this.isSubmitting && <Confirmation /> }
			</div>
		)
	}
}

export default WebForm
