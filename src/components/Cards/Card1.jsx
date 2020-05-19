import { TweenLite } from "gsap";
import React, { Component } from "react";

export default class Card1 extends Component {
	constructor(props) {
		super(props);
		this.card = React.createRef();
	}

	componentDidMount() {
		const { isInView } = this.props;
		if (isInView) {
			this.animation();
		}
	}

	animation = () => {
		const { id } = this.props;

		const cardImageContainer = document.querySelector(
			`#card1__image-container-${id}`
		);
		const cardTitle = document.querySelector(`#card1__title-${id}`);
		const cardDescription = document.querySelector(
			`#card1__description-${id}`
		);

		TweenLite.from(cardImageContainer, 2, {
			css: {
				opacity: 0,
			},
			scale: 0.5,
		});

		TweenLite.from(cardTitle, 1, {
			css: {
				opacity: 0,
				transform: "translateY(20px)",
			},
		});
		TweenLite.from(cardDescription, 1, {
			css: {
				opacity: 0,
				transform: "translateY(20px)",
			},
		});
	};

	render() {
		const { image, name, description, id } = this.props;

		return (
			<article className="card1">
				<figure
					className="card1__image-container"
					id={`card1__image-container-${id}`}
				>
					<img src={image} alt={name} />
				</figure>

				<h2 className="card1__title" id={`card1__title-${id}`}>
					{name}
				</h2>

				<p
					className="card1__description"
					id={`card1__description-${id}`}
				>
					{description}
				</p>
			</article>
		);
	}
}
