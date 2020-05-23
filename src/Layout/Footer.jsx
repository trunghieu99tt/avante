import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="row">
						<section className="col-lg-3 col-md-6">
							<h2 className="footer__name">Avante</h2>
							<p className="footer__description--1">
								We help our clients archive
							</p>

							<p className="footer__description--2">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Dolorum aut, delectus, harum
								porro odio doloremsus?
							</p>
						</section>
						<section className="col-lg-3 col-md-6">
							<h2 className="footer__section-heading">Explore</h2>

							<ul className="footer__section-list">
								<li className="footer__section-item">Home</li>
								<li className="footer__section-item">
									About Us
								</li>
								<li className="footer__section-item">
									Our services
								</li>
								<li className="footer__section-item">
									Contact
								</li>
							</ul>
						</section>
						<section className="col-lg-3 col-md-6">
							<h2 className="footer__section-heading">Explore</h2>

							<ul className="footer__section-list">
								<li className="footer__section-item">Home</li>
								<li className="footer__section-item">
									About Us
								</li>
								<li className="footer__section-item">
									Our services
								</li>
								<li className="footer__section-item">
									Contact
								</li>
							</ul>
						</section>
						<section className="col-lg-3 col-md-6">
							<h2 className="footer__section-heading">Explore</h2>

							<ul className="footer__section-list">
								<li className="footer__section-item">Home</li>
								<li className="footer__section-item">
									About Us
								</li>
								<li className="footer__section-item">
									Our services
								</li>
								<li className="footer__section-item">
									Contact
								</li>
							</ul>
						</section>
					</div>

					<p className="footer__copyright">
						Copyright 2019 by Avant WordPress Theme All Right
						Reserved.
					</p>
				</div>
			</footer>
		);
	}
}
