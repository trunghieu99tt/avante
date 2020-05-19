import React, {useEffect} from "react";


const Card3 = ({ images, title, list, isReversed }) => {
	return (
		<article className={`card3 row ${isReversed ? "reverse-order" : ""}`}>
			<div className={`col-md-7 card3__images-container `}>
				<figure className="card3__image--1">
					<img
						src={images && images.length > 0 && images[0]}
						alt={`${title}-img-1`}
					/>
				</figure>
				<figure
					className={`card3__image--2 ${
						isReversed ? "reverse-images" : ""
					}`}
				>
					<img
						src={
							(images && images.length > 1 && images[1]) ||
							(images && images.length > 0 && images[0]) ||
							""
						}
						alt={`${title}-img-2`}
					/>
				</figure>
			</div>

			<div className="col-md-5 card3__content">
				<h3 className="card3__title">{title}</h3>
				<div className="card3__list-tag">
					{list &&
						list.length > 0 &&
						list.map((e, index) => {
							return (
								(index < list.length - 1 && (
									<span>{e}/</span>
								)) || <span>{e}</span>
							);
						})}
				</div>
			</div>
		</article>
	);
};

export default Card3;
