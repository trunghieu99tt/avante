import React from "react";

const Card4 = ({ url, image, name }) => {
	return (
		<article className="card4">
			<a href={url}>
				<figure className="card4__image-container">
					<img className="card4__image" src={image} alt={name} />
				</figure>
			</a>
		</article>
	);
};

export default Card4;
