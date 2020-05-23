import { TweenLite } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import $ from "jquery";
import React, { Component } from "react";

export default class Component2 extends Component {
	state = {
		isInView: true,
	};

	componentDidMount() {
		this.animation();
	}
	animation = () => {
		const imageReveal = CSSRulePlugin.getRule(
			".component2__image-container:after"
		);
		const title = CSSRulePlugin.getRule(".component2__heading");

		TweenLite.from(imageReveal, 2, {
			transform: "scaleY(1)",
		});
		TweenLite.from(title, 1, {
			transform: "scaleY(0)",
			opacity: 0,
		});

		$(window).scroll(() => {
			const image = document.querySelectorAll(
				".component2__image-container"
			);
			const scrollPosition = $(window).scrollTop() / 20;

			image.forEach((item, index) => {
				switch (index) {
					case 0:
						item.style.transform = `translate(-${0}px,${scrollPosition}px) scale(${
							1 + scrollPosition / 500
						})`;
						break;
					case 1:
						item.style.transform = `translate(${0}px,-${scrollPosition}px) scale(${
							1 + scrollPosition / 500
						})`;

						break;
					case 2:
						item.style.transform = `translate(-${0}px,-${scrollPosition}px) scale(${
							1 + scrollPosition / 500
						})`;
						break;
					default:
						item.style.transform = `translate(${0}px,-${scrollPosition}px) scale(${
							1 + scrollPosition / 500
						})`;
				}
			});
		});
	};

	render() {
		const { isInView } = this.state;

		return (
			<React.Fragment>
				<section className={`component2 ${!isInView ? "hide" : ""}`}>
					<div className="container-fluid">
						<div className="row ">
							<div className="col-md-6 component2__images-container">
								{[...Array(3)].map((_, index) => {
									return (
										<figure
											className={`component2__image-container component2__image-container--${
												index + 1
											}`}
										>
											<img
												src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/04/business-people-discussion-happiness-coffee-PM2SKXD-1024x1024.jpg"
												alt="images1"
											/>
										</figure>
									);
								})}
							</div>
							<div className="col-md-5 component2__content-container">
								<h3 className="component2__heading">
									We are optimists who love to work together
								</h3>
								<p className="component2__description">
									{" "}
									Geeza arse it’s your round grub sloshed
									burke, my good sir chancer he legged it he
									lost his bottle pear shaped bugger all mate
								</p>

								<button className="button button--1">
									Get in touch
								</button>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
