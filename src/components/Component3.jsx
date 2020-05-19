import React, { Component } from "react";
import draggableSlider from "../utils/DraggableSlider";

export default class Component3 extends Component {
	componentDidMount() {
		draggableSlider(
			"component3",
			"component3__sliders-images-container",
			"component3__sliders-images",
			"component3__sliders-image"
		);

		draggableSlider(
			"component3",
			"component3__sliders-text--1-container",
			"component3__sliders-text--1",
			"component3__sliders-image"
		);
		draggableSlider(
			"component3",
			"component3__sliders-text--2-container",
			"component3__sliders-text--2",
			"component3__sliders-image",
			"vertical"
		);
	}

	render() {
		return (
			<React.Fragment>
				<section className="component3">
					<div className="container">
						<header className="row">
							<div className="col-md-4">
								<h1 className="component3__heading">
									The design industry today
								</h1>
							</div>
							<div className="col-md-4">
								<p className="component3__description">
									One morning, when Gregor Samsa woke from
									troubled dreams, he found himself
									transformed in his bed into a horrible
									vermin. He lay on his armour-like back
								</p>
							</div>
							<div className="col-md-4">
								<p className="component3__description">
									Gregor Samsa woke from troubled dreams, he
									found himself transformed in his bed into a
									horrible vermin. He lay on his armour-like
									back, and if he lifted his head a little
								</p>
							</div>
						</header>
						<section className="component3__sliders">
							<div className="component3__sliders-text--1-container">
								<ul id="component3__sliders-text--1">
									<li>01</li>
									<li>02</li>
									<li>03</li>
								</ul>
							</div>

							<div className="component3__sliders-text--2-container">
								<ul id="component3__sliders-text--2">
									<li>
										<h3>
											Technology enabled fitness company
										</h3>
									</li>
									<li>
										<h3>
											Technology enabled fitness company
										</h3>
									</li>
									<li>
										<h3>
											Technology enabled fitness company
										</h3>
									</li>
								</ul>
							</div>

							<div className="component3__sliders-images-container">
								<div id="component3__sliders-images">
									{[...Array(3)].map(() => (
										<figure class="component3__sliders-image">
											<img
												src="https://themes.themegoods.com/avante/wp-content/uploads/2019/04/business-people-working-in-office-UG93BVM.jpg"
												alt=""
											/>
										</figure>
									))}
								</div>
							</div>
						</section>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
