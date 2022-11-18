import { Component } from "react";
import { useState, useEffect } from "react";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: {
				city: "Frankfurt",
				from: "",
				to: "",
			},
		};
	}
	
	getRoutes({ target }) {
		console.log(`target.id`, target.id);
		target.id === "TO" && this.setState({ from: "", to: target.value });
		target.id === "FROM" && this.setState({ from: target.value, to: "" });
	}

	render() {
		return (
			<header className="route-search">
				<h1 className="main-title">
					<span className="db">DB</span> Fahrplananzeige
				</h1>
				<div className="btn-container">
					<button
						className="primary"
						id="FROM"
						onClick={this.getRoutes(this.value)}
						value={this.state.route.city}
					>
						von {this.state.route.city}
					</button>
					<button
						className="primary"
						id="TO"
						onClick={this.props.setRoute(this.value)}
						value={this.state.route.city}
					>
						nach {this.state.route.city}
					</button>
				</div>
			</header>
		);
	}
}
