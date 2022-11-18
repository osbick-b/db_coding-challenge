import { Component } from "react";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			from: "",
			to: "",
		};
	}

	searchRoute({ target }) {
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
						onClick={this.props.setRoute(this.value)}
						value="Frankfurt"
					>
						von Frankfurt
					</button>
					<button
						className="primary"
						id="TO"
						onClick={this.props.setRoute(this.value)}
						value="Frankfurt"
					>
						nach Frankfurt
					</button>
				</div>
			</header>
		);
	}
}
