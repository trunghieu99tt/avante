import React, { Component } from "react";
import DraggableSlider from "../utils/DraggableSlider";

export default class Banner extends Component {
	componentDidMount() {
		DraggableSlider("banner", "slider-container", "slides", "slide");

		// $(function () {
		// 	let sliding = 0;
		// 	let startClientX = 0;
		// 	let startPixelOffset = 0;
		// 	let pixelOffset = 0;
		// 	let currentSlide = 0;

		// 	let slideCount = $(".slide").length;

		// 	const slideStart = (event) => {
		// 		// If it is mobile device redefine event to first touch point
		// 		if (event.originalEvent.touches)
		// 			event = event.originalEvent.touches[0];
		// 		// If sliding not started yet store current touch position to calculate distance in future.
		// 		if (sliding === 0) {
		// 			sliding = 1; // Status 1 = slide started.
		// 			startClientX = event.clientX;
		// 		}
		// 	};

		// 	/** Occurs when image is being slid.
		// 	 */
		// 	const slide = (event) => {
		// 		event.preventDefault();
		// 		if (event.originalEvent.touches)
		// 			event = event.originalEvent.touches[0];
		// 		// Distance of slide.
		// 		var deltaSlide = event.clientX - startClientX;
		// 		// If sliding started first time and there was a distance.
		// 		if (sliding === 1 && deltaSlide !== 0) {
		// 			sliding = 2; // Set status to 'actually moving'
		// 			startPixelOffset = pixelOffset; // Store current offset
		// 		}

		// 		//  When user move image
		// 		if (sliding === 2) {
		// 			// Means that user slide 1 pixel for every 1 pixel of mouse movement.
		// 			var touchPixelRatio = 1;
		// 			// Check for user doesn't slide out of boundaries
		// 			if (
		// 				(currentSlide === 0 && event.clientX > startClientX) ||
		// 				(currentSlide === slideCount - 1 &&
		// 					event.clientX < startClientX)
		// 			)
		// 				// Set ratio to 3 means image will be moving by 3 pixels each time user moves it's pointer by 1 pixel. (Rubber-band effect)
		// 				touchPixelRatio = 3;
		// 			// Calculate move distance.
		// 			pixelOffset =
		// 				startPixelOffset + deltaSlide / touchPixelRatio;
		// 			// Apply moving and remove animation class
		// 			$("#slides")
		// 				.css("transform", "translateX(" + pixelOffset + "px")
		// 				.removeClass();
		// 		}
		// 	};

		// 	/** When user release pointer finish slide moving.
		// 	 */
		// 	const slideEnd = (event) => {
		// 		if (sliding === 2) {
		// 			// Reset sliding.
		// 			sliding = 0;
		// 			// Calculate which slide need to be in view.
		// 			currentSlide =
		// 				pixelOffset < startPixelOffset
		// 					? currentSlide + 1
		// 					: currentSlide - 1;
		// 			// Make sure that unexisting slides weren't selected.
		// 			currentSlide = Math.min(
		// 				Math.max(currentSlide, 0),
		// 				slideCount - 1
		// 			);
		// 			// Since in this example slide is full viewport width offset can be calculated according to it.
		// 			pixelOffset =
		// 				currentSlide * -$(".slider-container").width();
		// 			// Remove style from DOM (look below)
		// 			$("#temp").remove();

		// 			// Add a translate rule dynamically and asign id to it
		// 			$(
		// 				'<style id="temp">#slides.animate{transform:translateX(' +
		// 					pixelOffset +
		// 					"px)}</style>"
		// 			).appendTo("head");

		// 			// Add animate class to slider and reset transform prop of this class.
		// 			$("#slides").addClass("animate").css("transform", "");
		// 		}
		// 	};

		// 	$(".banner").on("mousedown touchstart", slideStart);
		// 	$(".banner").on("mouseup touchend", slideEnd);
		// 	$(".banner").on("mousemove touchmove", slide);
		// });
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
