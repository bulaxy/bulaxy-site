
import React, { useState } from 'react';

export function header(props) {

	// if ($(window).width() > 992) {
	// 	$(window).scroll(function () {
	// 		if ($(this).scrollTop() > 40) {
	// 			$('#navbar_top').addClass("fixed-top");
	// 			// add padding top to show content behind navbar
	// 			$('body').css('padding-top', $('.navbar').outerHeight() + 'px');
	// 		} else {
	// 			$('#navbar_top').removeClass("fixed-top");
	// 			// remove padding top from body
	// 			$('body').css('padding-top', '0');
	// 		}
	// 	});
	// } 

	const headerColorChange = () => {
		const color = "transparent", changeColorOnScroll= {height:400,color:'red'};
		const windowsScrollTop = window.pageYOffset;
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body
				.getElementsByTagName("navbar_top")[0]
				.addClass("fixed-top");
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[changeColorOnScroll.color]);
		} else {
			document.body
			.getElementsByTagName("navbar_top")[0]
			.addClass("fixed-top");
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[changeColorOnScroll.color]);
		}
	};
	React.useEffect(() => {
		if (props.changeColorOnScroll) {
			window.addEventListener("scroll", headerColorChange);
		}
		return function cleanup() {
			if (props.changeColorOnScroll) {
				window.removeEventListener("scroll", headerColorChange);
			}
		};
	});
	return (
		<header>
			<div class="bg-warning py-2">
				<div class="container">
					Some top header info
				</div>
			</div>
			<nav id="navbar_top" class="navbar navbar-expand-lg navbar-dark bg-primary">
				<div class="container">
					<a class="navbar-brand" href="#">Navbar</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="main_nav">
						<ul class="navbar-nav ml-auto">
							{/* <li class="nav-item"><a class="nav-link" href="#"> Menu item </a></li>
							<li class="nav-item"><a class="nav-link" href="#"> Menu item </a></li> */}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}