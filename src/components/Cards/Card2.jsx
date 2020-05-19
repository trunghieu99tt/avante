import React from "react";

const Card2 = ({ title, author, description, image }) => {
	return (
		<article className="card2">
			<header className="card2__header-container">
				<div>
					<h2 className="card2__title">{title || ""}</h2>
					<h3 className="card2__author">{author || ""}</h3>
				</div>

				<div className="card2__author-image-container">
					<img
						src={image}
						alt={author}
						className="card2__author-image"
					/>
				</div>
			</header>
			<p className="card2__description">{description || ""}</p>
		</article>
	);
};

export default Card2;
