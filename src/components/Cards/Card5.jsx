import React from "react";

const Card5 = ({ image, title, description, url }) => {
	return (
		<article className="col-md-4 card5">
			<div className="card5__inner">
				<figure className="card5__image-container">
					<img
						src={image}
						alt={title || ""}
						className="card5__image"
					/>
				</figure>

				<h3 className="card5__title">{title || ""}</h3>

				<p className="card5__description">{description || ""}</p>

				<a className = "card5__link" href={url}>View more</a>
			</div>
		</article>
	);
};

export default Card5;
