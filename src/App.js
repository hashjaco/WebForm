import React, { Component } from "react"
import InputForm from "./components/InputForm";
import Confirmation from './components/Confirmation'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './assets/styles/app.css'

export default class App extends Component {
	
	render() {
		return (
			<>
				<Router>			
						<Route
							path='/'
							render={props => <InputForm {...props} className="app" />}
						/>
						<Route
							path='/confirmation'
							render={props =>
								<Confirmation {...props} />
							}
						/>
				</Router>
			</>
		)
	}
}