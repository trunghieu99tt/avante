import React, { Component } from "react";
import Card4 from "../components/Cards/Card4";
import Card5 from "../components/Cards/Card5";

export default class Header extends Component {
	state = {
		isOpeningMobileNav: false,
	};

	componentDidMount() {
		window.addEventListener("scroll", () => {
			const logo = document.querySelector(".logo");
			const header = document.querySelector(".header");
			if (window.scrollY > 0) {
				logo.src =
					"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/10/logo.png";
				header.classList.add("onScroll");
			} else {
				logo.src =
					"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/10/logo_white.png";
				header.classList.remove("onScroll");
			}
		});
	}

	toggleMobileNav = () => {
		const mobileNav = document.querySelector(
			".navigation-mobile-container"
		);
		if (mobileNav) {
			this.setState((prevState) => ({
				isOpeningMobileNav: !prevState.isOpeningMobileNav,
			}));
			mobileNav.classList.toggle("active");
		}
	};

	showSubItems = (idx) => {
		const navigationSubItems = document.querySelectorAll(
			".navigation-mobile-subItem"
		);
		navigationSubItems.forEach((item) => {
			if (item && item.getAttribute("datamobile") == idx) {
				item.classList.add("active");
			} else item.classList.remove("active");
		});
	};

	hideSubItems = (idx) => {
		const navigationSubItems = document.querySelectorAll(
			".navigation-mobile-subItem"
		);
		navigationSubItems.forEach(
			(item) => item && item.classList && item.classList.remove("active")
		);
	};

	render() {
		const { isOpeningMobileNav } = this.state;

		const data = [
			{
				name: "Home",
				type: 1,
				subMenu: [
					{
						image:
							"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/11/home1.jpg",
						title: "",
						description: "",
						url: "#",
					},
				],
			},
			{
				name: "Services",
				type: 2,
				subMenu: [
					{
						image:
							"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/11/home2_icon1.png",
						title: "Service 1",
						description:
							"Consistently ranked among the top consulting firms across the nation.",
						url: "#",
					},
				],
			},
			{
				name: "Pages",
				type: 3,
				subMenu: [
					{
						title: "",
					},
				],
			},
		];

		const navigation =
			data &&
			data.length > 0 &&
			data.map((item) => {
				const { type } = item;

				return (
					<li className={`navigation-item `}>
						<p className="navigation-item__title">{item.name}</p>
						{item && item.subMenu && (
							<div
								className={`navigation-subItem row ${
									type === 3 ? "list" : ""
								}`}
							>
								{[...Array(8)].map(() => {
									return (
										(type === 1 && (
											<Card4 {...item.subMenu[0]} />
										)) ||
										(type === 2 && (
											<Card5 {...item.subMenu[0]} />
										)) || (
											<p className="navigation-subItem__title">
												Title
											</p>
										)
									);
								})}
							</div>
						)}
					</li>
				);
			});

		const navigationMobile =
			data &&
			data.length > 0 &&
			data.map((item, index) => {
				return (
					<li className="navigation-mobile-item">
						<p
							className="navigation-mobile-item__title"
							onClick={() => this.showSubItems(index)}
						>
							{item.name}
						</p>
						{item && item.subMenu && (
							<div
								className="navigation-mobile-subItem"
								datamobile={index}
							>
								<div
									style={{
										fontSize: "15px",
									}}
									onClick={() => this.hideSubItems(index)}
								>
									<i className={"fa fa-chevron-left"}></i>
									Back
								</div>
								{[...Array(8)].map(() => {
									return (
										<p className="navigation-mobile-subItem__title">
											Title
										</p>
									);
								})}
							</div>
						)}
					</li>
				);
			});

		return (
			<header className="header">
				<div
					className={`overlay ${isOpeningMobileNav ? "active" : ""}`}
					onClick={this.toggleMobileNav}
				></div>
				<div className="container header__inner">
					<section className="logo-container">
						<img
							src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/avante/wp-content/uploads/2019/10/logo_white.png"
							alt="logo"
							className="logo"
						/>
					</section>

					<input
						type="checkbox"
						class="nav__checkbox"
						name="checkbox"
						id="toggle-nav"
						className="toggle-nav"
						style={{
							display: "none",
						}}
					/>
					<label
						for="toggle-nav"
						class="nav__toggle-btn"
						onClick={this.toggleMobileNav}
					>
						<span class="nav__icon">&nbsp;</span>
					</label>

					<nav className="navigation-container">
						<ul className="navigation">{navigation}</ul>
					</nav>

					<nav className="navigation-mobile-container">
						<ul className="navigation-mobile">
							{navigationMobile}
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}
