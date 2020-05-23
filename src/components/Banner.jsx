import React, { Component } from "react";
import DraggableSlider from "../utils/DraggableSlider";

export default class Banner extends Component {
	componentDidMount() {
		DraggableSlider("banner", "slider-container", "slides", "slide");	
	}

	render() {
		return (
			<section className="banner">
				<div className="container h-100">
					<div className="row h-100 align-items-center">
						<div className="col-md-4 banner__text-container">
							<h1 className="banner__heading">
								We Take Care of the Future
							</h1>
							<h3 className="banner__subheading">
								Never ever think of giving up. Winners never
								quit and quitters never win. Take all negative
								words out of your mental dictionary
							</h3>
						</div>

						<div className="col-md-8 slider-container">
							<div id="slides">
								{[...Array(3)].map((_, index) => (
									<figure class="slide">
										<img
											src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/04/young-businesswoman-smiling-at-office-LGQRJY2-1024x680.jpg"
											className="slide-image"
											alt=""
										/>
									</figure>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
