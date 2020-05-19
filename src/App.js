import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { Component } from "react";
import Banner from "./components/Banner";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Footer from "./Layout/Footer";
import "./static/css/main.min.css";

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="wrapper">
					<Banner />
					<Component1 />
					<Component2 />
					<Component3 />
					<Component4 />
					<Component5 />
				</section>
				<Footer />
			</React.Fragment>
		);
	}
}
