import "./App.css";
import Header from "./header";
import SearchResults from "./search-results";
import { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      route: {
        from:"here",
        to: "there",
      }
    };
    
    this.setRoute = this.setRoute.bind(this);
  }

setRoute(route) {
  console.log(`setRoute`, route);
  this.setState({route: route});
  console.log(`this.state`, this.state);
}

	render() {
		return (
			<div id="app">
				<div class="content">
					{/* <Header setRoute={this.setRoute} /> */}
					{/* <SearchResults route={this.state.route} /> */}

					<main class="route-results-all"></main>
				</div>
			</div>
		);
	}
}

export default App;
