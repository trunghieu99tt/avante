import { Expo, TweenMax } from "gsap";
import $ from "jquery";
import React, { Component } from "react";
import Card3 from "./Cards/Card3";

export default class Component5 extends Component {
	componentDidMount() {
		this.animationImage1();
		this.animationImage2();
	}

	animationImage1 = () => {
		var $img = $(".component5");

		$img.mousemove(function (e) {
			var xPos = $(this).data("xPos");
			var yPos = $(this).data("yPos");
			var mouseX = e.pageX;
			var mouseY = e.pageY;
			var left = mouseX - xPos;
			var top = mouseY - yPos;
			var origin = "center center -300";
			var xPerc =
				((left - $(this).data("itemWidth") / 2) /
					$(this).data("itemWidth")) *
				200;
			var yPerc =
				((top - $(this).data("itemHeight") / 2) /
					$(this).data("itemHeight")) *
				200;

			TweenMax.to($(this).data("imgOuter"), 3, {
				// rotationX: 0.1 * yPerc,
				// rotationY: -0.1 * xPerc,
				x: 0.3 * yPerc,
				y: -0.3 * xPerc,
				transformOrigin: origin,
				ease: Expo.easeOut,
			});
		});

		$img.each(function () {
			$(this).data("xPos", $(this).offset().left);
			$(this).data("yPos", $(this).offset().top);
			$(this).data("itemWidth", $(this).width());
			$(this).data("itemHeight", $(this).height());
			$(this).data("imgOuter", $(this).find(".card3__image--1"));
		});
	};

	animationImage2 = () => {
		$(window).scroll(() => {
			const images = document.querySelectorAll(".card3__image--2");
			const scrollPosition = $(window).scrollTop() / 30;

			images &&
				images.forEach((item) => {
					item.style.transform = `translate(-${0}px,-${scrollPosition}px)`;
				});
		});
	};

	render() {
		return (
			<section className="component5">
				<div className="container">
					<h2 className="component5__heading">
						Our Recents Cases for clients
					</h2>

					<div className="component5__main">
						{[...Array(2)].map((_, index) => {
							return (
								<Card3
									isReversed={index % 2}
									title="Goodreads Inc"
									images={[
										"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/10/portrait-of-smiling-senior-businesswoman-in-KEHVBZY-1024x683.jpg",
										"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/11/business-corporate-colleagues-co-workers-job-PXJLUYE-1024x1024.jpg",
									]}
									list={[
										"branding",
										"content & production",
										"digital",
										"graphic design",
									]}
								/>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}
