import { Expo, TimelineMax } from "gsap";
import $ from "jquery";
import React, { Component } from "react";
import { isScrolledIntoView } from "../utils/Helper";
import Card1 from "./Cards/Card1";

export default class Component1 extends Component {
	state = {
		isInView: false,
		isMobile: false,
	};

	componentDidMount() {
		const screenWidth = window.screen.width;

		if (screenWidth <= 500) {
			this.setState({ isInView: true });
			this.animation();
		} else {
			$(window).on("scroll", () => {
				const { isInView } = this.state;
				if (!isInView) {
					if (isScrolledIntoView(".component1")) {
						this.setState({ isInView: true });
						this.animation();
					}
				}
			});
		}
	}

	animation = () => {
		const heading = document.querySelector(".component1__heading");
		const subHeading = document.querySelector(".component1__subheading");
		const separator = document.querySelector(".component1__separator");
		const description = document.querySelector(".component1__description");

		const tl = new TimelineMax();

		tl.from(
			heading,
			1,
			{
				y: 50,
				rotationX: 90,
			},
			Expo
		)
			.from(
				subHeading,
				1,
				{
					y: 50,
					rotationX: 90,
				},
				Expo
			)
			.from(separator, 1, {
				scale: 0,
			})
			.from(
				description,
				1,
				{
					y: 50,
					rotationX: 90,
				},
				Expo
			);
	};

	render() {
		const { isInView } = this.state;

		return (
			<React.Fragment>
				<section className={`component1 ${!isInView ? "hide" : ""}`}>
					<div className="container">
						<div className="row">
							<div className="col-lg-5 component1__text-container">
								<h1 className="component1__heading">
									A view of the design universe
								</h1>
								<h3 className="component1__subheading">
									2,500+ Customers
								</h3>

								<div className="component1__separator">
									<span className="component1__separator-main"></span>
								</div>

								<p className="component1__description">
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Sint qui illum nemo quo
									velit vero iure dolores expedita maxime eum,
									hic amet provident id commodi dolor rem
									inventore reiciendis impedit?
								</p>
							</div>
							<div className="col-lg-7 component1__cards-container">
								{[...Array(2)].map((_, index) => (
									<Card1
										key={Math.random()}
										name="National top 50 consulting firms"
										description="Consistently ranked among the top consulting firms across the nation."
										image="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/11/home7_icon1.png"
										id={index}
										isInView={isInView}
									/>
								))}
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
