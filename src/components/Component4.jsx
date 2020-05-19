import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import Card2 from "./Cards/Card2";

export default class Component4 extends Component {
	render() {
		const options = {
			loop: true,
			center: true,
			margin: 20,
			dots: false,
			autoplay: true,
			responsive: {
				0: { items: 1 },
				768: { items: 2 },
				1170: { items: 3 },
			},
		};

		const image =
			"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/11/smiling-mature-man-outdoors-with-mobile-phone-PB28ME5-150x150.jpg";

		return (
			<section className="component4">
				<header className="component4__header container">
					<div className="row">
						<div className="col-md-4">
							<h1 className="component4__heading">
								How Design Team Level Up
							</h1>
						</div>
						<div className="col-md-8">
							<div className="component4__rating"></div>

							<div className="component4__rating-description">
								"They treated me like family. If I could I would
								give them 100 Stars"
							</div>
						</div>
					</div>
				</header>
				<section className="component4__body">
					<OwlCarousel {...options}>
						{[...Array(5)].map((item) => {
							return (
								<Card2
									title="Cost Accounting is enemy number one of productivity"
									author="Jenny Doe"
									description="Duis consectetur feugiat auctor. Morbi nec enim luctus, feugiat arcu id, ultricies ante. Duis vel massa eleifend, porta est non, feugiat metus."
									image={image}
								/>
							);
						})}
					</OwlCarousel>
				</section>
			</section>
		);
	}
}
