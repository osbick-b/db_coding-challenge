import { useState } from "react";


export default function Header ({setRoute}) {

	// city is defined dynamically, to make it easily adaptable for search input
let city = "Frankfurt"
	const getRoutes = ({ target }) => {
		console.log(`target.id`, target);
		console.log(`setRoute(target)`, setRoute(target));
		target.id === "TO" && console.log(target.value);;
		// target.id === "TO" && setState(route: {to: target.value});
		
		const route = {}
	}

		// setRoute(route);
        // target.id === "TO" && this.setState({ from: "", to: target.value });
        // target.id === "FROM" && this.setState({ from: target.value, to: "" });
        
	


		return (
			<header className="route-search">
				<h1 className="main-title">
					<span className="db">DB</span> Fahrplananzeige
				</h1>
				<div className="btn-container">
					<button
						className="primary"
						id="FROM"
						onClick={getRoutes}
						value={city}
					>
						von {city}
					</button>
					<button
						className="primary"
						id="TO"
						onClick={getRoutes}
						value={city}
					>
						nach {city}
					</button>
				</div>
			</header>
		);
	}
