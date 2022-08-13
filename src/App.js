import React from "react";
import { AddButton } from "./components/AddButton";
import { ResetButton } from "./components/ResetButton";
import { SubtractButton } from "./components/SubtractButton";
import { CustomAddSub } from "./components/CustomAddSub";

class App extends React.Component {
	state = {
		count: 0
	}

	subtractOne = () => {
		this.setState({
			count: this.state.count - 1
		})
	}

	resetCount = () => {
		this.setState({
			count: 0
		})
	}

	addOne = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	customAdd = () => {
		let num = parseInt(document.getElementById("customBox").value);
		if (!isNaN(num)) {
			this.setState({
				count: this.state.count + parseInt(document.getElementById("customBox").value)
			})
		}
	}

	customSubtract = () => {
		let num = parseInt(document.getElementById("customBox").value);
		if (!isNaN(num)) {
			this.setState({
				count: this.state.count - parseInt(document.getElementById("customBox").value)
			})
		}
	}

	render() {
		return (
			<div className="cover-container-fluid d-flex h-100 p-3 mx-auto flex-column justify-content-center">
				<header className="masthead mb-auto ">
					<div className="inner d-flex justify-content-center">
						<h3 className="masthead-brand">Counter App</h3>
					</div>
				</header>

				<main role="main" className="inner cover">
					<h1 className="display-1 theCount">{this.state.count}</h1>
					<div className="lead">
						<div className="btn-group">
							<SubtractButton subtract={this.subtractOne} />
							<ResetButton reset={this.resetCount} />
							<AddButton add={this.addOne} />
						</div><br /><br />
					</div>
					<CustomAddSub customAdd={this.customAdd} customSubtract={this.customSubtract} />
				</main>

				<footer className="mastfoot mt-auto">
					<div className="inner">
						<p></p>
					</div>
				</footer>
			</div>

		)
	}
}
// ReactDOM.render(<App />, document.getElementById('app'));
export default App;