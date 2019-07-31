import React from "react"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import Paper from "@material-ui/core/Paper"
import withStyles from "@material-ui/core/styles/withStyles"
import Map from '../../containers/Map';
import '../../assets/styles/confirmation.css'

const styles = theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme
			.spacing(5)}px`
	},
	container: {
		maxWidth: "200px"
	}
})

class Confirmation extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: "",
			lastName: "",
			address: "",
			phoneNumber: "",
			annualIncome: "",
			educationLevel: "",
			email: ""
        }
        
	}

	componentDidMount() {
		this.setState(state => {
			return {
				firstName: this.props.firstName,
				lastName: this.props.lastName,
				address: this.props.address,
				phoneNumber: this.props.phoneNumber,
				annualIncome: this.props.annualIncome,
				educationLevel: this.props.educationLevel,
				email: this.props.email
			}
		})
	}

	render() {
		const classes = this.props
		return (
			<>
				<div className={classes.container}>
					<Paper elevation={4} className="paper">
						<h2>Your Information</h2>
						<ul>
							<li>
								Name: {this.props.firstName} {this.props.lastName}{" "}
							</li>
							<li>Address: {this.props.address} </li>
							<li>Phone #: {this.props.phoneNumber}</li>
							<li>Annual Salary: {this.props.annualIncome}</li>
							<li>Education Level: {this.props.educationLevel}</li>
							<li>Email Address: {this.props.email}</li>
						</ul>
						<Button className="secondary" fullWidth>
							<Link to="/">Back to form</Link>
						</Button>
					</Paper>
                    <Map />
				</div>
			</>
		)
	}
}

export default withStyles(styles)(Confirmation)
