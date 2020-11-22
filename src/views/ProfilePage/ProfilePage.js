import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import BusinessOutlined from "@material-ui/icons/BusinessOutlined";
import Star from "@material-ui/icons/Star";

import PropTypes from "prop-types";
// core components
import Header from "../../components/header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax.js";

import profile from "../../assets/img/faces/roger.png";
import InterestProfile from './InterestProfile'
import WorkProfile from './WorkProfile'
import ValuesProfile from './ValuesProfile'
import withWidth from '@material-ui/core/withWidth';
import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import { Github } from '@styled-icons/boxicons-logos/Github'
import { TelephoneFill } from '@styled-icons/bootstrap/TelephoneFill'
import { Mail } from '@styled-icons/entypo/Mail'
import { Linkedin } from '@styled-icons/entypo-social/Linkedin'
import { bgCubeMin } from '../../constants/images'
const useStyles = makeStyles(styles);

function ProfilePage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<Header
				color="transparent"
				brand="Bulaxy Site"
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: 200,
					color: "white"
				}}
				{...rest}
			/>
			<Parallax small filter image={bgCubeMin} />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={6}>
								<div className={classes.profile}>
									<div>
										<img src={profile} alt="..." className={imageClasses} />
									</div>
									<div className={classes.name}>
										<h3 className={classes.title}>Roger Hiu Fung Cheng</h3>
										<h6>Developer</h6>
										<Button href='https://github.com/bulaxy' justIcon link className={classes.margin5}>
											<Github />
										</Button>
										<Button href='https://au.linkedin.com/in/hiu-fung-roger-cheng-75815a142' justIcon link className={classes.margin5}>
											<Linkedin />
										</Button>
										<Button href='mailto:rogerhiufungcheng@gmail.com' justIcon link className={classes.margin5}>
											<Mail />
										</Button>
										<Button href='tel:+61470642637' justIcon link className={classes.margin5}>
											<TelephoneFill />
										</Button>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<div className={classes.description}>
							<p>
								Thank you for checking out my page/website! Not sure which part of the website did you come from
								but this is all part of my passion project to learning and sharperning my development skills! These site surely are not
								not be	the best site you ever visited, but it is surely something I am passionate in improveing and enchanting!
								If you have any suggestions,more than welcome to shot me a email or contact me!
								{" "}
							</p>
						</div>
						<GridContainer >
							<GridItem xs={12} sm={12} md={12} lg={12} className={classes.navWrapper}>
								<NavPills
									color="rose"
									horizontal={
										(props.width === 'xs' || props.width === 'sm') ?
											undefined
											:
											{
												tabsGrid: { xs: 12, sm: 3, md: 3, lg: 3, xl: 3 },
												contentGrid: { xs: 12, sm: 9, md: 9, lg: 9, xl: 9 },
											}
									}
									tabs={[
										{
											tabButton: "Values & Believes",
											tabIcon: AccountCircle,
											tabContent: (<ValuesProfile />)
										},
										{
											tabButton: "Work",
											tabIcon: BusinessOutlined,
											tabContent: (<WorkProfile />)
										},
										{
											tabButton: "Interest \n & \n Hobbies",
											tabIcon: Star,
											tabContent: (<InterestProfile />)
										}
									]}
								/>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}


ProfilePage.propTypes = {
	width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(ProfilePage)

/*
{
										tabsGrid: { xs: 12, sm: 4, md: 4 },
										contentGrid: { xs: 12, sm: 8, md: 8 }
									}
									*/