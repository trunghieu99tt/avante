import React, { Component } from "react";

export default class Header extends Component {
	render() {
		const data = [
			{
				name: "Home",
			},
			{
				name: "services",
				subMenu: [
					{
						img:
							"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/11/home1.jpg",
						name: "",
					},
					{
						img:
							"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/11/home1.jpg",
						name: "",
					},
					{
						img:
							"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/11/home1.jpg",
						name: "",
					},
					{
						img:
							"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/11/home1.jpg",
						name: "",
					},
					{
						img:
							"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/11/home1.jpg",
						name: "",
					},
				],
			},
			{
				name: "pages",
				subMenu: [
					{
						img: "",
						name: "About1",
					},
				],
			},
		];

		return (
			<header>
				<section className="header__logo-container">
					<img
						src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/10/logo_white.png"
						alt="logo"
						className="header__logo"
					/>
				</section>

				<nav className="header__navigations-container">
					<li></li>
				</nav>
			</header>
		);
	}
}
