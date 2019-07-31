import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import WebForm from "../Form"
import Paper from "@material-ui/core/Paper"
import '../../assets/styles/inputform.css'


class InputForm extends Component {
	render() {	
		return (
					<Paper elevation={4} className="paper">
						<WebForm />
					</Paper>
		)
	}
}

export default InputForm
