import React from "react"
import { TextField, Checkbox, Button } from "@material-ui/core"
import * as Yup from "yup"
import { Formik } from "formik"
import "../../assets/constants"
import { educationLevels, annualIncomeRanges } from "../../assets/constants"
import Confirmation from "../Confirmation"
import "../../routes"
import ReCAPTCHA from "react-google-recaptcha"
import '../../assets/styles/form.css'


export default class WebForm extends React.Component {
	constructor(props) {
		super(props)

		const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
		const nameRegExp = /^[\p{L}\s'.-]+$/

		this.validationSchema = Yup.object({
			firstName: Yup.string("Enter your first name")
				.matches(nameRegExp, "Name is not valid")
				.max(20, "Name can contain no more than 20 characters")
				.required("First name is required"),
			lastName: Yup.string("Enter your last name")
				.max(20, "Name can contain no more than 20 characters")
				.required("Last name is required"),
			address: Yup.string("Enter your address").required("Address is required"),
			phoneNumber: Yup.string("Enter your phone number")
				.matches(phoneRegExp, "Phone number is not valid")
				.min(10, "More digits please")
				.max(10, "Too many digits")
				.required("Phone number is required"),
			email: Yup.string("Enter your email")
				.email("Enter a valid email")
				.required("Email is required"),
			confirmEmail: Yup.string("Confirm your email address")
				.email("Enter a valid email")
				.required("Must confirm email")
				.oneOf([Yup.ref("email")], "Email does not match"),
			agreeToTerms: Yup.bool("Check to agree to terms").required(
				"Must agree to terms in order to register"
			)
		})
		this.state = {
			values: {
				firstName: "",
				lastName: "",
				address: "",
				phoneNumber: "",
				annualIncome: "",
				educationLevel: "",
				email: "",
				confirmEmail: "",
				agreeToTerms: false
			},

			isSubmitted: false
		}

		this.onChange = value => {
			console.log("Captcha value:", value)
		}

		this.renderConfirm = () => {
			this.setState({
				isSubmitted: true
			})
			return <Confirmation info={this.state.values} />
		}
	}
	render() {
		return (
			<>
				{!this.state.isSubmitted ? (
					<Formik
						initialValues={this.state.values}
						validationSchema={this.validationSchema}
						onSubmit={(values, actions) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2))
								actions.setSubmitting(false)
							}, 1000)
							console.log("form values", values)
							this.setState({ values: values })
						}}>
						{({ handleSubmit, handleChange, values, touched, errors }) => (
							<form onSubmit={handleSubmit} className="form">
                                <h1>Form</h1>
								<TextField
									class="name"
									name="firstName"
									helperText={touched.firstName ? errors.firstName : ""}
									placeholder="First Name"
									error={touched.lastName && Boolean(errors.lastName)}
									onChange={handleChange("firstName")}
									fullWidth
                                    value={values.firstName}
                                    className="inputFields"
								/>
								<TextField
									class="name"
									name="lastName"
									helperText={touched.lastName ? errors.lastName : ""}
									placeholder="Last Name"
									error={touched.lastName && Boolean(errors.lastName)}
									onChange={handleChange("lastName")}
									fullWidth
                                    value={values.lastName}
                                    className="inputFields"
								/>
								<TextField
									id="address"
									name="address"
									helperText={touched.address ? errors.address : ""}
									placeholder="Address"
									error={values.address && Boolean(errors.address)}
									onChange={handleChange("address")}
									fullWidth
                                    value={values.address}
                                    className="inputFields"
								/>
								<select
									id="educationLevel"
									name="educationLevel"
									placeholder="Level of Education"
									error={
										values.educationLevel && Boolean(errors.educationLevel)
									}
									onChange={handleChange("educationLevel")}
									value={values.educationLevel}>
									{educationLevels.map(educationLevel => {
										return (
											<option value={educationLevel}>{educationLevel}</option>
										)
									})}
									}
								</select>
								<select
									id="annualIncome"
									name="annualIncome"
									placeholder="Annual Income"
									autoWidth
									error={values.annualIncome && Boolean(errors.annualIncome)}
									onChange={handleChange("annualIncome")}
									value={values.annualIncome}>
									{annualIncomeRanges.map(annualIncome => (
										<option value={annualIncome} placeholder="Annual Income">
											{annualIncome}
										</option>
									))}
								</select>
								<TextField
									id="phoneNumber"
									name="phoneNumber"
									helperText={values.phoneNumber ? errors.phoneNumber : ""}
									placeholder="Phone Number"
									error={values.phoneNumber && Boolean(errors.phoneNumber)}
									onChange={handleChange("phoneNumber")}
									fullWidth
                                    value={values.phoneNumber}
                                    className="inputFields"
								/>
								<TextField
									id="email"
									name="email"
									helperText={values.email ? errors.email : ""}
									label="Email"
									error={values.email && Boolean(errors.email)}
									onChange={handleChange("email")}
									fullWidth
                                    value={values.email}
                                    className="inputFields"
								/>
								<TextField
									id="confirmEmail"
									name="confirmEmail"
									helperText={values.confirmEmail ? errors.confirmEmail : ""}
									label="Confirm Email"
									error={values.confirmEmail && Boolean(errors.confirmEmail)}
									onChange={handleChange("confirmEmail")}
									fullWidth
                                    value={values.confirmEmail}
                                    className="inputFields"
								/>
								<p>
									Agree To <a href="../TermAgreement">Terms</a>
								</p>
								<Checkbox
									color="primary"
									onChange={handleChange("agreeToTerms")}
									value={values.agreeToTerms}
									inputvalues={{
										"aria-label": "secondary checkbox"
									}}></Checkbox>
								<ReCAPTCHA
									sitekey="6LfqSrAUAAAAAHycG38eVjxz49EYVOaEBdCkETsa
                                    "
									onChange={this.onChange}
								/>
								<Button type="submit" onClick={this.renderConfirm} className="button">
									Submit
								</Button>
							</form>
						)}
					</Formik>
				) : (
					<Confirmation info={this.state.values} />
				)}
			</>
		)
	}
}
